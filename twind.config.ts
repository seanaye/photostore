import { Options } from "$fresh/plugins/twind.ts";
import { forms, withForms } from "https://esm.sh/@twind/forms@0.1.4?deps=twind@0.16.18"

export default {
  selfURL: import.meta.url,
  plugins: {
    forms
  },
  preflight: withForms()
} as Options;
// import { defineConfig } from "https://esm.sh/@twind/core@1.1.1";
// import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.0.1";
// import presetTailwindForms from "https://esm.sh/@twind/preset-tailwind-forms@1.0.1";

// export default {
//   ...defineConfig({
//     presets: [presetTailwind(), presetTailwindForms()],
//   }),
//   selfURL: import.meta.url,
// };
