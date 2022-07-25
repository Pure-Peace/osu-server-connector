use crate::{constants, logs::write_err};

pub fn handle_tauri_err(err: tauri::Error) {
    let err_str = format!("{err}");
    match err {
        tauri::Error::Runtime(ref err) => match err {
            tauri_runtime::Error::CreateWebview(_) => {
                let _ = open::that(constants::WEBVIEW_DOWNLOAD_URL);

                throw_error(
                    &t!("messages.failed-to-launch"),
                    &err_str,
                    Some(&t!(
                        "solutions.download-webview",
                        url = constants::WEBVIEW_DOWNLOAD_URL
                    )),
                    true,
                );

                let _ = open::that(constants::ERR_FILE);
                return;
            }
            _ => (),
        },
        _ => (),
    };
    // Unhandled err
    throw_error(&t!("unhandled-error"), &err_str, None, false);
}

pub fn throw_error(title: &str, err_str: &str, solution: Option<&str>, is_handled: bool) {
    write_err(&create_err_content(title, err_str, solution, is_handled));
    error_msg_box(title, &for_details(solution.unwrap_or(err_str)));
}

pub fn create_err_content(
    title: &str,
    err: &str,
    solution: Option<&str>,
    is_handled: bool,
) -> String {
    format!(
        "[{err_type}]\n{title}\n{time}\n\n[{details}]\n{err}\n\n[{solution_key}]\n{solution_content}\n\n",
        err_type = if is_handled {
            t!("error")
        } else {
            t!("unhandled-error")
        },
        time = chrono::Local::now(),
        details = t!("details"),
        solution_key = t!("solution"),
        solution_content = solution.unwrap_or(&t!("none"))
    )
}

pub fn for_details(content: &str) -> String {
    format!(
        "{} \n\n{}",
        content,
        t!("messages.for-details", file_path = constants::ERR_FILE)
    )
}

pub fn error_msg_box(title: &str, content: &str) {
    msgbox::create(title, content, msgbox::IconType::Error).expect(title);
}
