import tailwindcss from "@tailwindcss/vite"; // ဒီလိုင်းအသစ် ထည့်တာပါ
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ဒီနေရာမှာ Plugin အဖြစ် ထည့်ပေးရပါတယ်
  ],
});
