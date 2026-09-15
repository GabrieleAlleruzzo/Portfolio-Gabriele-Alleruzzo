import { useEffect, useState } from "react";

export default function Rotator({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const safeIndex = index % words.length;

  return (
    <span className="rotator">
      <span key={safeIndex}>{words[safeIndex]}</span>
    </span>
  );
}
