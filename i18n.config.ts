interface I18nConfig {
  defaultLocale: string;
  locales: string[];
}

export const i18n: I18nConfig = {
  defaultLocale: "en",
  locales: ["en", "de"],
};
