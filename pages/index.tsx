import Head from "next/head";
import styles from "../styles/Home.module.css";
import animations from "../styles/Animations.module.css";
import { Exo } from "@next/font/google";
import { useEffect, useState } from "react";
const exoScript = Exo({ subsets: ["latin"] });

/*
Oxford Blue
#334451

Ziggurat
#BDD4E0

Half Baked
#82B4CF

Hippie Blue
#618EB6
*/

export default function Home() {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div className={`${styles.container}`}>
      <Head>
        <title>Marc Bodmer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1
          className={`${styles.title} ${styles.futuretitle} ${
            exoScript.className
          } ${animations.delay1} ${animations.textHidden} ${
            playAnimation ? animations.textShow : ""
          }`}
        >
          Coming soon!
        </h1>

        <h2
          className={`${styles.subtitle} ${exoScript.className} ${
            animations.delay2
          } ${animations.textHidden} ${
            playAnimation ? animations.textShow : ""
          }`}
        >
          About
        </h2>

        <p
          className={`${styles.description} ${animations.delay2} ${
            animations.textHidden
          } ${playAnimation ? animations.textShow : ""} `}
        >
          👋 I am a web engineer currently looking for my next role.
          <br />
          <br />
          Previously, I worked at Cloudflare, the leading Internet security and
          performance company.
          <br />
          <br />
          Before that, I worked at companies such as Teehan+Lax, a highly
          influential digital agency during its time, and 500px, the premier
          photography community on the internet.
        </p>

        <h2
          className={`${styles.subtitle} ${exoScript.className} ${
            animations.delay3
          } ${animations.textHidden} ${
            playAnimation ? animations.textShow : ""
          }`}
        >
          Contact
        </h2>

        <a
          className={`${styles.contactlink} ${animations.delay3} ${
            animations.textHidden
          } ${playAnimation ? animations.textShow : ""}`}
          href="https://www.linkedin.com/in/marc-bodmer-dev/"
        >
          💼 LinkedIn
        </a>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2023
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
