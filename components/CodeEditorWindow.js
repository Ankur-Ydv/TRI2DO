import Editor from "@monaco-editor/react";
import { useState } from "react";

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || "");
  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value); // this is the prop
  };
  return (
    <div>
      <Editor
        height="500px"
        width="100%"
        language={language}
        value={value}
        theme={theme}
        defaultValue="// some comment"
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CodeEditorWindow;
