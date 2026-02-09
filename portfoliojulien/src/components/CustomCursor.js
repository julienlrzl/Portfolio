import React, { useEffect, useRef } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const CustomCursor = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const isDesktop = useMediaQuery("(pointer: fine)");

  useEffect(() => {
    if (!isDesktop) return;

    const inner = innerRef.current;
    const outer = outerRef.current;
    if (!inner || !outer) return;

    const onMouseMove = (e) => {
      inner.style.left = `${e.clientX}px`;
      inner.style.top = `${e.clientY}px`;

      outer.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 500, fill: "forwards" }
      );
    };

    const interactiveSelector = "a, button, label";

    const onEnter = () => {
      inner.classList.add("hover");
      outer.classList.add("hover");
    };

    const onLeave = () => {
      inner.classList.remove("hover");
      outer.classList.remove("hover");
    };

    document.addEventListener("mousemove", onMouseMove);

    const elements = document.querySelectorAll(interactiveSelector);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div ref={innerRef} className="cursor-inner" />
      <div ref={outerRef} className="cursor-outer" />
    </>
  );
};

export default CustomCursor;
