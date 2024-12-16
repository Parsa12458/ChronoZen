function Modal({ content, id }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-5/12 max-w-3xl bg-background px-16 pb-12 pt-10">
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
