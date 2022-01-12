import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";

interface AboutInfo {
  title: string;
  body: string;
  button: string;
}

interface AboutProps {
  aboutInfo: AboutInfo
}

export default function About({ aboutInfo }: AboutProps) {
  const router = useRouter();
  const historyBack = () => {
    router.push("/");
  };

  const [about, setAbout] = useState<AboutInfo>(aboutInfo);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/about`);
      const data = await response.json();
      setAbout(data);
    }
    if (!aboutInfo) load();
  }, []);

  if (!about) {
    return (
      <MainLayout title="About">
        <p className="center">Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="About">
      <div className="about center">
        <h1 className="about__title">{about.title}</h1>
        <p className="about__text">{about.body}</p>
        <button className="waves-effect lighten-2 btn" onClick={historyBack}>
          {about.button}
        </button>
      </div>
    </MainLayout>
  );
}

About.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) return { aboutInfo: null };
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();

  return {
    aboutInfo: data,
  };
};