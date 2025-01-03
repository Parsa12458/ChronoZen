import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const [show, setShow] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

  useEffect(() => {
    if (openName) {
      document.body.style.overflow = "hidden";
      setShow(true);
      setTimeout(() => {
        setTransitionClass(
          "opacity-100 transition-opacity duration-200 ease-[cubic-bezier(0,0,0.2,1)]",
        );
      }, 10);
    } else {
      setTransitionClass(
        "opacity-0 transition-opacity duration-200 ease-[cubic-bezier(0,0,0.2,1)]",
      );
    }
  }, [openName]);

  const handleTransitionEnd = () => {
    if (!openName) {
      setShow(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        openName,
        close,
        open,
        show,
        transitionClass,
        handleTransitionEnd,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close, show, transitionClass, handleTransitionEnd } =
    useContext(ModalContext);
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
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
