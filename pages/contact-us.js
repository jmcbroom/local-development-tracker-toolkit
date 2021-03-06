import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { city, state, siteTitle } from "../toolkit.config";

const handleClick = (queryString, setResponse) => {
  fetch(`/api/submitFeedback?${new URLSearchParams(queryString).toString()}`)
    .then((r) => r.json())
    .then((d) => setResponse(d));
};

export default function ContactPage() {
  const [response, setResponse] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let record = {
    Name: name,
    Email: email,
    Message: message,
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{`${siteTitle}: Contact us`}</title>
        <meta
          name="description"
          content={`"Tracking development in ${city}, ${state}."`}
          key="description"
        />
        <meta property="og:title" content={siteTitle} key="title" />
        <meta
          property="og:description"
          content={`Use the ${siteTitle} to look up information about real estate development in the city.`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-xl mx-auto submit-form">
        <h2 className="pb-6">Contact us</h2>

        <p>
          Use this form to get in touch with the creators of this site if you have questions or are interested in partnering.
        </p>

        <p>
          If you want to share information about a development not currently
          included in the tracker,{" "}
          <Link href="/submit-a-tip">submit a tip</Link>.
        </p>

        <div>
          <label htmlFor="textarea">Name</label>
          <input
            type="text"
            value={name}
            placeholder=""
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="textarea">Email address</label>
          <input
            type="text"
            value={email}
            placeholder=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="textarea">Message</label>
          <textarea
            cols={80}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <article className="flex items-end">
          {!response ? (
            <button
              onClick={() => handleClick(record, setResponse)}
              disabled={response !== null}
            >
              {"Send"}
            </button>
          ) : (
            <span
              className="w-full flex justify-around items-center py-8 text-lg leading-6"
              style={{
                background: `rgba(215, 226, 255, 0.4)`,
                fontFamily: "DM Sans",
              }}
            >
              Thanks! We received your message.
            </span>
          )}
        </article>
      </div>
    </>
  );
}
