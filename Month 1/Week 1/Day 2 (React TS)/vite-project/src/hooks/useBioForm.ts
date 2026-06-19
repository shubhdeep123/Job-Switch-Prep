import { useState, useRef } from "react";

export function useBioForm() {
  const [bio, setBio] = useState<string>("");
  const [name, setName] = useState<string>("");
  const bioLength = bio.length;
  const textAreaElement = useRef<HTMLTextAreaElement>(null);

  const preview =
    !name && !bio
      ? ""
      : `Hi, I'am ${name || "Anonymous"}. ${bio ? `My Bio: ${bio}` : ""}`;

  function handleReset(): void {
    setBio("");
    setName("");
    textAreaElement.current?.focus();
  }
  return {
    bio,
    setBio,
    name,
    setName,
    bioLength,
    textAreaElement,
    preview,
    handleReset,
  };
}
