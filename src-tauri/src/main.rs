// this hides the console for Windows release builds
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

pub mod commands;
pub mod constants;

use commands::*;

fn main() {
    // main window should be invisible to allow either the setup delay or the plugin to show the window
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![process_file, close_splashscreen])
        .setup(|app| {
            // let main_window = app.get_window(MAIN_WINDOW_LABLE).unwrap();
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
