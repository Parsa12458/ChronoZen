import { useEffect, useRef } from "react";
import Button from "../../ui/Button";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const options = {
  theme: "snow",
  modules: {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [
        { color: [] },
        {
          background: [
            "#FF6F61",
            "#FFB347",
            "#FDD835",
            "#81C784",
            "#64B5F6",
            "#4DB6AC",
            "#BA68C8",
            "#FF94C2",
            "#998279",
            "#cacaca",
            "#D4E157",
            "#4DD0E1",
            "#F06292",
            "#646464",
            "#ffc0a8",
            "#2f7c7c",
          ],
        },
      ],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ align: [] }],
      ["clean"],
    ],
  },
};

function TextEditor() {
  const textEditorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (textEditorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(textEditorRef.current, options);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!quillInstance.current) return;
    const textEditorContent = quillInstance.current.getContents();
    console.log(textEditorContent);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div ref={textEditorRef}></div>
      <Button
        variation="primary"
        additionalStyles="px-4 text-sm mt-6 ml-auto"
        type="submit"
      >
        <img src="/icons/add-white.svg" alt="add icon" className="mr-1.5 w-5" />
        <span>Add Note</span>
      </Button>
    </form>
  );
}

export default TextEditor;
