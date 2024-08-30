"use server";

import { z } from "zod";

const schema = z.object({
  shorten: z
    .string()
    .trim()
    .min(1, { message: "Your field is empty" })
    .max(255, { message: "Your url is too long" })
    .url({ message: "Invalid url" }),
});

interface CleanUriResponse {
  result_url: string;
}

export default async function getShortUrl(prevState: any, formData: FormData) {
  const isValidField = schema.safeParse({
    shorten: formData.get("shorten"),
  });

  if (!isValidField.success) {
    const { code, message } = isValidField.error.issues[0];
    if (code === "too_small") return { error: message };
    if (code === "invalid_string") return { error: message };
    if (code === "too_big") return { error: message };
    return { error: "something went wrong" };
  }

  const originalUrl = isValidField.data.shorten;

  try {
    const urlApi = "https://cleanuri.com/api/v1/shorten";
    const res = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${originalUrl}`,
    });
    const data = (await res.json()) as CleanUriResponse;
    return {
      error: "",
      data: {
        original: originalUrl,
        shorten: data.result_url,
      },
    };
  } catch (error) {
    return {
      error: "Something went wrong",
      data: {
        original: originalUrl,
        shorten: "",
      },
    };
  }
}
