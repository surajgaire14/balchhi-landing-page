import React, { useEffect } from "react";

function UpdateScrollPosition() {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  useEffect(() => {
    const updateYposition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updateYposition);

    updateYposition();

    return () => window.removeEventListener("scroll", updateYposition);
  }, []);

  return scrollPosition;
}

export default UpdateScrollPosition;
