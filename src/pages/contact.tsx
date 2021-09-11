import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Contact() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <form
            name="contact"
            method="POST"
            action="https://submit-form.com/G0IB0VxZ"
          >
            <div className="itemGrid">
              <label htmlFor="name">Name</label>
              <div>
                <input type="text" id="name" name="name" />
              </div>
            </div>
            <div className="itemGrid">
              <label htmlFor="email">Email</label>
              <div>
                <input type="text" id="email" name="email" />
              </div>
            </div>
            <div className="messageItemGrid">
              <label htmlFor="message">Message</label>
              <div className="messageArea">
                <textarea id="message" name="message"></textarea>
              </div>
            </div>
            <div className="itemGrid">
              <input
                type="hidden"
                name="_redirect"
                value="https://donhathaway.com/"
              />
              <input type="hidden" name="_append" value="false" />
              <button type="submit">Send</button>
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
          grid-template-rows: auto auto auto auto;
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
