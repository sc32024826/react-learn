interface config {
  prefixDefault? : boolean;
  locales: string[];
  defaultLocale : string;
  localeDetection? : boolean;
}

export const i18nConfig: config = {
  locales: ["en", "zh-CN"],
  defaultLocale: "zh-CN",
  localeDetection: false,
};
