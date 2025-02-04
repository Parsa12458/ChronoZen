import { createContext, useContext, useEffect, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
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
      document.body.style.overflow = "visible";
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

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("ModalContext was used outside of the ModalProvider");
  return context;
}

export { ModalProvider, useModal };
