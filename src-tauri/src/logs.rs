use crate::constants;
use std::fs;

pub fn write_err(content: &str) {
    if let Err(err) = fs::write(constants::ERR_FILE, content) {
        println!("Failed to write err logs: {:?}", err);
    };
}

pub fn write_log(content: &str) {
    if let Err(err) = fs::write(constants::LOG_FILE, content) {
        println!("Failed to write logs: {:?}", err);
    };
}
