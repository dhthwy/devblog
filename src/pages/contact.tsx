import Layout from "../components/Layout";
import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const FORMSPARK_URL = "https://submit-form.com/G0IB0VxZ";
const GOOGLE_RECAPTCHA_SITEKEY = "6Ld9_locAAAAAO-2OSRPp9k2KtxhEgZaQOgC0itq";

export default function Contact() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const recaptchaRef = React.useRef<ReCAPTCHA>();

  const onSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(FORMSPARK_URL, {
        name: name,
        email: email,
        message: message,
        "g-recaptcha-response": recaptchaRef.current.getValue(),
      })
      .then(function (response) {
        setSubmitMessage("Your message has been sent.");
        //  console.log(response);
      })
      .catch(function (response) {
        setSubmitMessage(
          "An error has occurred while attempting to send your message."
        );
        console.error(response);
      })
      .finally(() => {
        recaptchaRef.current.reset();
        setSubmitting(false);
      });
  };

  const onReCAPTCHAChange = (captchaCode) => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      setSubmitting(false);
      return;
    }
    setSubmitting(true);
  };

  return (
    <Layout>
      <div className="container">
        <div>
          <form name="contact" onSubmit={onSubmit}>
            <div className="fancy">
              <label id="submitMessage" htmlFor="submitMessage">
                {submitMessage}
              </label>
            </div>
            <div className="itemGrid">
              <label htmlFor="name">Name</label>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="itemGrid">
              <label htmlFor="email">Email</label>
              <div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="messageItemGrid">
              <label htmlFor="message">Message</label>
              <div className="messageArea">
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="itemGrid">
              <ReCAPTCHA
                sitekey={GOOGLE_RECAPTCHA_SITEKEY}
                ref={recaptchaRef}
                onChange={onReCAPTCHAChange}
              />
            </div>
            <div className="itemGrid">
              <input type="hidden" name="_append" value="false" />
              <button type="submit" disabled={!isSubmitting}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
        .messageArea {
          display: flex;
          flex-direction: row;
          min-height: 10em;
        }

        .messageArea > textarea {
          flex: 1;
        }
        .messageItemGrid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
          align-items: left;
          justify-content: left;
        }
        .itemGrid {
          display: grid;
          grid-template-columns: 100px auto;
          grid-template-rows: auto;
          align-items: left;
          justify-content: left;
          vertical-align: top;
          line-height: 50px;
        }
        form {
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: auto auto auto auto auto auto;
          grid-gap: 5px;
          align-items: left;
          justify-content: left;
          vertical-align: bottom;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
