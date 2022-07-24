use tauri::Manager;

use crate::constants::{MAIN_WINDOW_LABLE, SPLASHSCREEN_LABLE};

#[tauri::command]
pub fn process_file(filepath: String) -> String {
    println!("Processing file: {}", filepath);
    "Hello from Rust!".into()
}

#[tauri::command]
pub async fn close_splashscreen(window: tauri::Window) {
    if let Some(win) = window.get_window(SPLASHSCREEN_LABLE) {
        let _ = win.close();
    }
    if let Some(win) = window.get_window(MAIN_WINDOW_LABLE) {
        let _ = win.show();
    }
}
