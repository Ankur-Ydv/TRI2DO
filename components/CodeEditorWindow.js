/* eslint-disable react/prop-types */

import Editor from '@monaco-editor/react';
import { useState } from 'react';

const CodeEditorWindow = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || '');
  const handleEditorChange = (value) => {
    setValue(value);
    onChange('code', value); // this is the prop
  };
  console.log(language);
  return (
    <div>
      <Editor
        height="70vh"
        width="50vw"
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
