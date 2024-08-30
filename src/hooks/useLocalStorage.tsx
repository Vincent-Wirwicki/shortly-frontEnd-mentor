import { useEffect, useState } from "react";

type ShortenedURL = { original: string; shorten: string };

export default function useLocalStorage(data: ShortenedURL | undefined) {
  const [shortenedURLs, setShortenedURLs] = useState<ShortenedURL[]>([]);

  useEffect(() => {
    // Load shortened URLs from local storage on component mount
    const storedURLs = localStorage.getItem("shortenedURLs");
    if (storedURLs) {
      setShortenedURLs(JSON.parse(storedURLs));
    }
  }, []);

  useEffect(() => {
    // Save to local storage when state.data changes
    if (data?.shorten) {
      const newShortenedURL: ShortenedURL = {
        original: data.original,
        shorten: data.shorten,
      };
      const updatedURLs = [newShortenedURL, ...shortenedURLs.slice(0, 4)];
      setShortenedURLs(updatedURLs);
      localStorage.setItem("shortenedURLs", JSON.stringify(updatedURLs));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return shortenedURLs;
}
