import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "client", "src"),
			"@shared": path.resolve(__dirname, "shared"),
			"@assets": path.resolve(__dirname, "attached_assets"),
		},
	},
	root: path.resolve(__dirname, "client"),
	build: {
		outDir: path.resolve(__dirname, "dist/public"),
		emptyOutDir: true,
	},
	server: {
		port: parseInt(process.env.FRONTEND_PORT || "3000"),
		host: "0.0.0.0",
		hmr: {
			overlay: true,
		},
		watch: {
			usePolling: true,
			interval: 100,
		},
		fs: {
			strict: false,
			allow: [".."],
		},
	},
	preview: {
		port: parseInt(process.env.FRONTEND_PORT || "3000"),
		host: "0.0.0.0",
	},
});
