import Head from "next/head";
import { Exo } from "@next/font/google";
import { useEffect, useState } from "react";
const exoScript = Exo({ subsets: ["latin"] });
import styled, { css } from "styled-components";

const LoadAnimation = css`
  transition-property: opacity, filter;
  transition-duration: 2s;
`;

const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f1f0;
  color: #103240;
`;

const MainContainer = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  margin-top: 80px;
  background-color: #103240;
  color: #f2f1f0;
  padding: 5px 15px;
  border-radius: 2px;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  filter: ${(props) => (props.visible ? "blur(0)" : "blur(2px)")};
  transition-delay: ${(props) => `${props.animationDelay}ms`};
  ${LoadAnimation};
`;

const Description = styled.p`
  line-height: 1.2;
  font-size: 1.2rem;
  max-width: 650px;
  text-align: left;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  filter: ${(props) => (props.visible ? "blur(0)" : "blur(2px)")};
  transition-delay: ${(props) => `${props.animationDelay}ms`};
  ${LoadAnimation}
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactLink = styled.a`
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #103240;
  &:hover {
    text-decoration: underline;
  }
  opacity: ${(props) => (props.visible ? "1" : "0")};
  filter: ${(props) => (props.visible ? "blur(0)" : "blur(2px)")};
  transition-delay: ${(props) => `${props.animationDelay}ms`};
  ${LoadAnimation}
`;

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setIsVisible(true);
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
    <LayoutContainer>
      <Head>
        <title>Marc Bodmer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>
        <Heading
          className={`${exoScript.className}`}
          visible={isVisible}
          animationDelay={200}
        >
          About
        </Heading>

        <Description visible={isVisible} animationDelay={400}>
          👋 I am a full stack web engineer, passionate about helping companies grow.
          <br />
          <br />
          Currently helping grow a youth sports platform, <a href="https://gc.com/">Gamechanger</a>.
          <br />
          <br />
          Previously at <a href="https://www.underline.com/">Underline Infrastructure</a>, helping build software to power multi-purpose fiber networks in America.
          <br />
          <br />
          Before that, I worked at <a href="https://www.cloudflare.com/">Cloudflare</a>, the leading Internet security and
          performance company.
          <br />
          <br />
          And before that, I worked at companies such as Teehan+Lax, a highly
          influential digital agency during its time, and 500px, the premier
          photography community on the internet.
        </Description>

        <Heading
          className={`${exoScript.className}`}
          visible={isVisible}
          animationDelay={600}
        >
          Contact
        </Heading>

        <ContactLink
          visible={isVisible}
          animationDelay={800}
          href="https://www.linkedin.com/in/marc-bodmer-dev/"
        >
          💼 LinkedIn
        </ContactLink>

        <ContactLink
          visible={isVisible}
          animationDelay={800}
          href="https://github.com/m-bodmer/website-2023"
        >
          👩‍💻 Source Code
        </ContactLink>
      </MainContainer>
    </LayoutContainer>
  );
}
