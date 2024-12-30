function Modal({ content, id, width = "5/12", maxWidth = "3xl" }) {
  return (
    <dialog id={id} className="modal">
      <div
        className={`modal-box w-${width} max-w-${maxWidth} bg-background px-16 py-10`}
      >
        {content}
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
