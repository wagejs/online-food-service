import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@root/tailwind.config";

const fullTailwindConfig = resolveConfig(tailwindConfig);

const { theme: tailwindTheme } = fullTailwindConfig;

export { tailwindTheme };
