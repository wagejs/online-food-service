import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function pathResolve(src: string){
  return path.resolve(__dirname, src)
}

export default defineConfig({
  resolve: {
    alias: {
      "@root": pathResolve('./'),
      "@assets": pathResolve("./src/assets"),
      "@components": pathResolve("./src/components"),
      "@pages": pathResolve("./src/pages"),
      "@utils": pathResolve("./src/utils"),
      "@modules": pathResolve("./src/modules"),
    },
  },
  plugins: [react()],
});