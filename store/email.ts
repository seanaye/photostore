import { signal, computed } from "@preact/signals";
import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";

const validate = z.string().email();
export function createEmailStore() {
  const email = signal("");
  const validEmail = computed(() => validate.safeParse(email.value).success);

  return { email, validEmail };
}
