interface config {
  prefixDefault? : string;
  locales? : string[];
  defaultLocale? : string;
  localeDetection? : boolean;
}

export const i18nConfig: config = {
  locales: ["en", "zh"],
  defaultLocale: "zh",
  localeDetection: false,
};
