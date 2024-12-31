"use client";
import { useEffect } from "react";

const GTranslateWidget = () => {
  useEffect(() => {
    // Dynamically load the GTranslate script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    // Set the GTranslate settings
    window.gtranslateSettings = {
      default_language: "en",
      detect_browser_language: true,
      languages: [
        "en",
        "ar",
        "az",
        "bg",
        "zh-CN",
        "hr",
        "cs",
        "nl",
        "fr",
        "ka",
        "de",
        "el",
        "haw",
        "hi",
        "hu",
        "ga",
        "it",
        "ja",
        "ko",
        "la",
        "pl",
        "pt",
        "pa",
        "ru",
        "ro",
        "sk",
        "es",
        "sv",
        "th",
        "tr",
        "uk",
        "vi",
      ],
      wrapper_selector: ".gtranslate_wrapper",
    };

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslateWidget;
