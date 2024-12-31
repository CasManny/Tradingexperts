"use client";

import { useEffect } from "react";

const LiveChat = () => {
  useEffect(() => {
    // Ensure the Smartsupp object exists globally
    if (typeof window !== "undefined") {
      var _smartsupp = (window._smartsupp = window._smartsupp || {});
      _smartsupp.key = "34b3c10a96382c18607e0baa3adee33d7b796305";

      // Load the Smartsupp script dynamically
      if (!window.smartsupp) {
        (function (d) {
          var s, c;
          s = d.getElementsByTagName("script")[0];
          c = d.createElement("script");
          c.type = "text/javascript";
          c.charset = "utf-8";
          c.async = true;
          c.src = "https://www.smartsuppchat.com/loader.js?";
          s.parentNode.insertBefore(c, s);
        })(document);
      }
    }
  }, []);

  return null; // No visible UI for the chat script
};

export default LiveChat;
