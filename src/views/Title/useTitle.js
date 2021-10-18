import { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = title => {
    const htmlTitle = document.querySelector("title");

    htmlTitle.innerText = title;
  };

  useEffect(() => {
    updateTitle(title);

    return () => {
      updateTitle("Home");
    }
  }, [title]);

  return setTitle;
};