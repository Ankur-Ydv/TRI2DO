import { loader } from '@monaco-editor/react';
import themes from '../constants/themes';
const defineTheme = (theme) => {
  return new Promise((res) => {
    loader.init().then((monaco) => {
      const themeData = themes[theme];
      if (themeData) {
        console.log(themeData);
        monaco.editor.defineTheme(theme, themeData);
      }
      res(); // Resolve the promise even if there's no theme data
    });
  });
};

export { defineTheme };
