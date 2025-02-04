import { cloneElement } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";
import { useModal } from "../contexts/ModalContext";

function Modal({ children }) {
  return children;
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useModal();

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close, show, transitionClass, handleTransitionEnd } =
    useModal();
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 h-screen w-full bg-black/50 backdrop-blur-[2px] ${show ? "block" : "hidden"} ${transitionClass}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 max-h-[90%] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-background px-16 py-10"
      >
        <button
          onClick={close}
          className="btn btn-circle btn-ghost btn-xs absolute right-4 top-4 hover:bg-neutral-200"
        >
          ✕
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
