// tsup.config.ts
import { defineConfig } from "tsup";
var tsup_config_default = defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"]
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2x1Y2Ffcy1hL0RvY3VtZW50cy9HaXRIdWIgTG9jYWwvb3BlbnRpY2tldC9wYWNrYWdlcy91aS90c3VwLmNvbmZpZy50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCIvVXNlcnMvbHVjYV9zLWEvRG9jdW1lbnRzL0dpdEh1YiBMb2NhbC9vcGVudGlja2V0L3BhY2thZ2VzL3VpXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9Vc2Vycy9sdWNhX3MtYS9Eb2N1bWVudHMvR2l0SHViJTIwTG9jYWwvb3BlbnRpY2tldC9wYWNrYWdlcy91aS90c3VwLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3RzdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlbnRyeTogWydzcmMvaW5kZXgudHMnXSxcbiAgZm9ybWF0OiBbJ2NqcycsICdlc20nXSxcbiAgZHRzOiB0cnVlLFxuICBzcGxpdHRpbmc6IGZhbHNlLFxuICBzb3VyY2VtYXA6IHRydWUsXG4gIGNsZWFuOiB0cnVlLFxuICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbn0pOyAiXSwKICAibWFwcGluZ3MiOiAiO0FBQXVVLFNBQVMsb0JBQW9CO0FBRXBXLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU8sQ0FBQyxjQUFjO0FBQUEsRUFDdEIsUUFBUSxDQUFDLE9BQU8sS0FBSztBQUFBLEVBQ3JCLEtBQUs7QUFBQSxFQUNMLFdBQVc7QUFBQSxFQUNYLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxFQUNQLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFDakMsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
