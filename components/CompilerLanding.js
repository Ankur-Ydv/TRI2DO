import React, { useEffect, useState } from 'react';
import CodeEditorWindow from './CodeEditorWindow';
import { languageOptions } from '../constants/languageOptions';
import useKeyPress from '../hooks/useKey';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LanguagesDropdown from './LanguagesDropdown';
import ThemeDropdown from './ThemeDropdown';
import { defineTheme } from '../lib/defineTheme';
import axios from 'axios';
import OutputWindow from './OutputWindow';
import OutputDetails from './OutputDetails';
import CustomInput from './CustomInput';
import styled from '@emotion/styled';

const javascriptDefault = `// Write Your Code Here`;

const CompilerLanding = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState('amy');
  const [language, setLanguage] = useState(languageOptions[0]);
  const enterPress = useKeyPress('Enter');
  const ctrlPress = useKeyPress('Control');

  const onChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };

  const onSelectChange = (sl) => {
    console.log('selected Option...', sl);
    setLanguage(sl);
  };

  useEffect(() => {
    if (enterPress && ctrlPress) {
      handleCompile();
    }
  }, [ctrlPress, enterPress]);

  function handleThemeChange(th) {
    // console.log(th);
    const theme = th;

    if (['light', 'vs-dark'].includes(theme.value)) {
      setTheme(theme);
    } else {
      console.log('theme...', theme);
      defineTheme(theme.value).then(() => {
        console.log(theme);
        setTheme(theme);
      });
    }
  }

  useEffect(() => {
    defineTheme('amy').then(() => setTheme({ value: 'amy', label: 'Amy' }));
  }, []);

  // Toast
  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: localStorage.getItem('theme').slice(0, -6),
    });
  };

  const showErrorToast = (msg) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: localStorage.getItem('theme').slice(0, -6),
    });
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };
    // console.log(process.env.NEXT_PUBLIC_RAPID_API_URL);
    const options = {
      method: 'POST',
      url: process.env.NEXT_PUBLIC_RAPID_API_URL,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
      data: formData,
    };
    console.log(options);

    axios
      .request(options)
      .then(function (response) {
        console.log('res.data', response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        setProcessing(false);
        console.log(error);
      });
  };

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: process.env.NEXT_PUBLIC_RAPID_API_URL + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log('response.data', response.data);
        return;
      }
    } catch (err) {
      console.log('err', err);
      setProcessing(false);
      showErrorToast();
    }
  };

  return (
    <Container>
      <div className="button">
      <div className="dropdown">
        <LanguagesDropdown onSelectChange={onSelectChange} />
        <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
        <button className="run" onClick={handleCompile} disabled={!code}>
          {processing ? 'Processing...' : 'Compile and Execute'}
        </button>
      </div>
      <div className="compiler">
        <div className="code-here">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme?.value}
          />
        </div>
        <div className="input-output">
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
          <OutputWindow outputDetails={outputDetails} />
          {outputDetails && <OutputDetails outputDetails={outputDetails} />}
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  background: var(--box);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .button {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    .dropdown{
      display: flex;
      gap: 1rem;
      @media (max-width: 575px)
      {
        display: flex;
        flex-direction: column;
      }
    }
    .run {
      cursor: pointer;
      background-color: #0bdf0b;
      color: white;
      border-radius: 4px;
      padding: 2px;
      width: 10rem;
      font-weight: bold;
      :hover{
        background-color: #09d409;
      }
    }
  }
  .compiler {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    .code-here {
      width: 65%;
      z-index: 0;
    }
    .input-output {
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    @media (max-width: 680px) {
      .code-here{
        width: 100%;
      }
      .input-output{
        width: 100%;
      }
      display: flex;
      flex-direction: column;
      /* background-color: red; */
    }
  }
  @media (max-width: 680px)
  {
    width: 100%;
    .button{
      display: flex;
      flex-direction: column;
    }
  }
`;

export default CompilerLanding;
