import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(
        require.resolve("./shiki-themes/dracula-soft.json")
      ),
      light: await loadTheme(
        require.resolve("./shiki-themes/github-light.json")
      ),
    },
  };
});
