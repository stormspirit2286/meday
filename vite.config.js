import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({ plugins: [react(), VitePWA({ registerType: "autoUpdate", includeAssets: ["icon.svg"], manifest: { name: "Nhật ký mề đay", short_name: "Mề đay", description: "Ghi lại triệu chứng mề đay", theme_color: "#0d9488", background_color: "#f8fafc", display: "standalone", start_url: "/", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" }] } })] });
