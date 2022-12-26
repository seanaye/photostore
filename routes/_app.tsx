import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/src/server/types.ts";
import { colours } from "../utils/colors.ts"

export default function App({ Component }: AppProps) {
  return (
    <html>
      <body style={{ backgroundColor: colours[0] }}>
        <main>
          <Component />
        </main>
      </body>
    </html>
  );
}
