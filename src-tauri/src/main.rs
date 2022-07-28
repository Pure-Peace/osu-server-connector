// this hides the console for Windows release builds
#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[macro_use]
extern crate rust_i18n;
rust_i18n::i18n!("../public/locales");

pub mod commands;
pub mod constants;
pub mod error;
pub mod logs;
pub mod utils;

use commands::*;

fn start_tauri() {
    if let Err(err) = tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![process_file, close_splashscreen])
        .setup(|app| {
            // let main_window = app.get_window(MAIN_WINDOW_LABLE).unwrap();
            Ok(())
        })
        .run(tauri::generate_context!())
    {
        error::handle_tauri_err(err);
    }
}

fn main() {
    utils::init_i18n();
    start_tauri();
}
