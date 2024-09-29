import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetGrid } from "unocss-preset-grid";

export default defineConfig({
  theme: {
    colors: {
      brand: {
        primary: "#212121",
        accent: "#9FFF40",
        secondary: "#F8F8F8",
        white: "#EBEBEB",
      },
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [
    presetUno(),
    presetIcons(),
    presetGrid(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
        mono: ["Roboto Mono"],
      },
    }),
  ],
});
