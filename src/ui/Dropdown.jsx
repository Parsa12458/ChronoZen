import {
  useFloating,
  flip,
  shift,
  autoUpdate,
  useTransitionStyles,
  offset,
} from "@floating-ui/react";
import { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Dropdown({
  button,
  content,
  mainAxisOffset = 0,
  crossAxisOffset = 0,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, update, context } = useFloating({
    middleware: [
      offset({
        mainAxis: mainAxisOffset,
        crossAxis: crossAxisOffset,
      }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
    open: isOpen,
    placement: "bottom-end",
  });

  const { isMounted, styles } = useTransitionStyles(context);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    update();
  };

  const outsideClickRef = useOutsideClick(() => setIsOpen(false), false);

  return (
    <div className="relative" ref={outsideClickRef}>
      <div
        ref={refs.setReference}
        onClick={handleClick}
        className="h-full cursor-pointer"
      >
        {button}
      </div>
      {isMounted && (
        <ul
          ref={refs.setFloating}
          style={{
            ...styles,
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          className="menu z-10 w-max rounded bg-mintGreen p-1 shadow-md"
        >
          {content}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
