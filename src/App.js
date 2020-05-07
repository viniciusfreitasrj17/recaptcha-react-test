import React, { useState, useEffect } from 'react';
import './App.css';
import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const DELAY = 1500;

function App() {
/*   constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      callback: "not fired",
      value: "[empty]",
      load: false,
      expired: "false"
    };
    this._reCaptchaRef = React.createRef();
  }*/

  const [callback, setCallback] = useState('not fired');
  const [value, setValue] = useState('[empty]');
  const [load, setLoad] = useState(false);
  const [expired, setExpired] = useState('false');

/*  componentDidMount() {
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
    console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }*/

  useEffect(() => {
   setTimeout(() => {
     setLoad(true);
   }, DELAY)
  }, [])

  const handleChange = value => {
    console.log("Captcha value:", value);
    setValue(value);
    // if value is null recaptcha expired
    if (value === null) setExpired('true');
  };

  const asyncScriptOnLoad = () => {
    setCallback("called!");
    // console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };
  
  return (
    <div className="App">
        <h1>
          <a
            href="https://github.com/dozoisch/react-google-recaptcha"
            target="_blank"
          >
            react-google-recaptcha
          </a>
          : 1.0.5
        </h1>
        <h2>
          NOTE: initial load delayed <em>{DELAY / 1000}sec</em> to demonstrate
          callback
        </h2>
        <h3>Recaptcha loaded callback: {callback}</h3>
        <h5>Recaptcha value: {value}</h5>
        <h5>Expired: {expired}</h5>
        {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="dark"
            //ref={this._reCaptchaRef}
            sitekey={TEST_SITE_KEY}
            onChange={handleChange}
            asyncScriptOnLoad={asyncScriptOnLoad}
          />
        )}
      </div>
  );
}

export default App;
