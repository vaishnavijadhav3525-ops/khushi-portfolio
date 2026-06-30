import { useState, useEffect } from "react";

export function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setCurrentText(
            isDeleting
              ? word.substring(0, currentText.length - 1)
              : word.substring(0, currentText.length + 1)
          );
        },
        isDeleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, pause]);

  return currentText;
}
