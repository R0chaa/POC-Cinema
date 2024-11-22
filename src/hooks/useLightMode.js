import { useEffect } from "react";

const useLightMode = (setLightMode) => {
  useEffect(() => {
    const prefersLightMode = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    setLightMode(prefersLightMode);

    const handleThemeChange = (e) => setLightMode(e.matches);
    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", handleThemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: light)")
        .removeEventListener("change", handleThemeChange);
    };
  }, [setLightMode]);
};

export default useLightMode;
