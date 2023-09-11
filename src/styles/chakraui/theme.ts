import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const colors = {
  base: {
    secondary: "#999",
    bg: "#edeeee",
    bgText: "#000",
  },
  dark: {
    secondary: "#fff",
    bg: "#fff",
    bgText: "#000",
  },
};

export default extendTheme({ config, colors });
