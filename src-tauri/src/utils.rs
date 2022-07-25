use crate::constants;

pub fn init_i18n() {
    let locale = sys_locale::get_locale().unwrap_or(constants::DEFAULT_LANG.into());
    set_i18n_locale(&locale);
}

pub fn set_i18n_locale(locale: &str) {
    rust_i18n::set_locale(if constants::SUPPORTED_LANG.iter().any(|y| *y == locale) {
        &locale
    } else {
        constants::DEFAULT_LANG
    });
}
