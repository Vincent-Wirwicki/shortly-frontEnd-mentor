"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import getShortUrl from "@/server/actions";
import { useState } from "react";
import { Input } from "../ui/input";
import useLocalStorage from "@/hooks/useLocalStorage";

const initialState = {
  error: "",
  data: { original: "", shorten: "" },
};

export default function Form() {
  const [state, formAction] = useFormState(getShortUrl, initialState);
  const [copiedUrl, setCopiedUrl] = useState("");
  const urls = useLocalStorage(state.data);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedUrl(text);
      setTimeout(() => setCopiedUrl(""), 1000);
    });
  };
  return (
    <>
      <form
        action={formAction}
        className="absolute top-0 translate-y-[-50%] rounded-lg
    w-4/5 py-12 px-10 md:p-6
    flex md:flex-col justify-between items-center gap-5   
    bg-primary-dark-violet bg-cover bg-center bg-no-repeat
    bg-form-desk md:bg-form-mobile 
    "
      >
        {/* for this demo I used input type="text" but you can use type="url" with a required */}
        <Input
          id="shorten"
          name="shorten"
          type="text"
          style={{
            border:
              state.error.length > 0
                ? "2px solid hsl(var(--secondary-red))"
                : "unset",
          }}
          placeholder="Shorten a link here..."
          className="bg-neutral-200"
        />
        {state.error.length > 0 && (
          <p className="absolute text-xs bottom-5 md:bottom-14 md:left-6 text-secondary-red">
            {state.error}
          </p>
        )}
        <Button
          type="submit"
          className="bg-primary-cyan hover:bg-primary-cyan-light w-60 rounded-md md:w-full"
        >
          shorten it!
        </Button>
      </form>
      {urls.length > 0 &&
        urls.map(({ original, shorten }, i) => (
          <ResultCard
            key={`${shorten}-${i}`}
            original={original}
            shorten={shorten}
            copyToClipboard={copyToClipboard}
            copiedUrl={copiedUrl}
          />
        ))}
    </>
  );
}

function ResultCard({
  original,
  shorten,
  copyToClipboard,
  copiedUrl,
}: {
  original: string;
  shorten: string;
  copyToClipboard: (text: string) => void;
  copiedUrl: string;
}) {
  return (
    <div className="bg-neutral-50 w-4/5 flex md:flex-col justify-between items-center p-8 rounded-md md:p-6 md:gap-2">
      <div className="w-11/12 flex justify-between p-4 md:flex-col md:gap-2 md:p-0 md:w-full">
        <p className="truncate w-1/3 md:w-full md:border-b-neutral-500 md:border-b-2">
          {original}
        </p>
        <p className="text-primary-cyan-light">{shorten}</p>
      </div>
      <Button
        className="bg-primary-cyan hover:bg-primary-cyan-light rounded-md w-40 md:w-full md:p-4 "
        style={{
          backgroundColor:
            copiedUrl === shorten
              ? "hsl(var(--neutral-dark-violet))"
              : "hsl(var(--primary-cyan))",
        }}
        onClick={() => copyToClipboard(shorten)}
      >
        {copiedUrl === shorten ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
