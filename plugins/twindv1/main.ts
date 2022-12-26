import { getSheet, TwindConfig, setup } from "https://esm.sh/@twind/core@1.1.1"

export default function hydrate(options: TwindConfig) {
  setup(options, getSheet());
}
