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

const javascriptDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

// Time: O(log n)
const binarySearch = (arr, target) => {
 return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
 if (start > end) {
   return false;
 }
 let mid = Math.floor((start + end) / 2);
 if (arr[mid] === target) {
   return mid;
 }
 if (arr[mid] < target) {
   return binarySearchHelper(arr, target, mid + 1, end);
 }
 if (arr[mid] > target) {
   return binarySearchHelper(arr, target, start, mid - 1);
 }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
`;

const CompilerLanding = () => {
  const [code, setCode] = useState(javascriptDefault);
  // const [customInput, setCustomInput] = useState('');
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
      console.log('enterPress', enterPress);
      console.log('ctrlPress', ctrlPress);
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
    });
  };

  const handleCompile = () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      // stdin: btoa(customInput),
    };
    console.log(process.env.NEXT_PUBLIC_RAPID_API_URL);
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
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div style={{ display: 'flex', gap: '1.5rem', margin: '1rem 0' }}>
        <LanguagesDropdown onSelectChange={onSelectChange} />
        <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        <button
          onClick={handleCompile}
          disabled={!code}
          style={{
            cursor: 'pointer',
            boxShadow: '5px 5px 0px 0px rgba(0,0,0)',
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '4px',
          }}
        >
          {processing ? 'Processing...' : 'Compile and Execute'}
        </button>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div>
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme?.value}
          />
        </div>
        <div>
          <OutputWindow outputDetails={outputDetails} />
          <div>
            {/* <CustomInput
          customInput={customInput}
          setCustomInput={setCustomInput}
        /> */}
          </div>
          <div>
            {outputDetails && <OutputDetails outputDetails={outputDetails} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompilerLanding;
