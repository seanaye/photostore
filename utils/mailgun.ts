const endpoint = "https://api.mailgun.net";
const predicate = "https://api.mailgun.net/v3/mail.seanaye.ca";
const apiKey = Deno.env.get("MAILGUN_SECRET") ?? "";

type Result<T> = [T, null] | [null, Response];

async function fetchClient<T = Record<string, any>>(
  ending: string,
  opts?: RequestInit | undefined
): Promise<Result<T>> {
  const headers = new Headers(opts?.headers);
  const upw = btoa(`api:${apiKey}`);
  headers.set("Authorization", `Basic ${upw}`);
  const url = new URL(`${predicate}${ending}`);
  const res = await fetch(
    new Request(url, {
      ...opts,
      headers,
      credentials: "include",
    })
  );

  if (!res.ok) {
    return [null, res];
  }
  const out: T = await res.json();
  return [out, null];
}

function makeFormData(props: Record<string, string | string[]>) {
  const fd = new FormData();
  for (const [key, value] of Object.entries(props)) {
    if (Array.isArray(value)) {
      value.forEach((v) => fd.append(key, v));
    } else {
      fd.append(key, value);
    }
  }
  return fd;
}

type SendMailProps = {
  to: string[];
  from: string;
  html: string;
  subject: string;
};
async function sendEMail(props: SendMailProps) {
  const body = makeFormData(props);
  return await fetchClient("/messages", { body, method: "post" });
}

type TemplateProps = { link: string; text: string };
async function template(props: TemplateProps) {
  let text = await Deno.readTextFile("./emailTemplate/template.html");
  for (const [key, value] of Object.entries(props)) {
    text = text.replace(`#${key}`, value);
  }

  return text;
}

export async function sendEMailTemplate({
  text,
  link,
  ...rest
}: Omit<SendMailProps, "html" | "from"> & TemplateProps) {
  const html = await template({ text, link });
  return sendEMail({
    ...rest,
    html,
    from: "Sean Aye <receipts@mail.seanaye.ca>",
  });
}
