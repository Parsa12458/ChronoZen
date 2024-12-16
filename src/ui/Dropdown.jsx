function Dropdown({ button, content }) {
  return (
    <div className="dropdown dropdown-end">
      {button}
      <ul className="menu dropdown-content z-10 mr-4 w-max rounded bg-mintGreen p-1 drop-shadow-sm">
        {content}
      </ul>
    </div>
  );
}

export default Dropdown;
