"use client";

import useLocalStorageState from "@/hooks/useLocalStorageState";

export default function ContactUsPage() {
  const key = "fx";
  const [state, setState] = useLocalStorageState(key);
  return (
    <main>
      <span>{state}</span>
      <input onChange={(e) => setState(e.target.value)} />
    </main>
  );
}
