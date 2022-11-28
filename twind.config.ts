import { Options } from "$fresh/plugins/twind.ts";
import { forms, withForms } from "https://esm.sh/@twind/forms@0.1.4?deps=twind@0.16.18"

export default {
  selfURL: import.meta.url,
  plugins: {
    forms
  },
  preflight: withForms()
} as Options;
