import Head from "next/head";
import Link from "next/link";
import Navbar from "./Navbar";

type MainLayoutProps = {
  children: any;
  title: string;
};

export default function MainLayout({ children, title }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} | Next.ts</title>
        <meta name="keywords" content="next, typescript, next.js, react" />
        <meta name="description" content="Todo-app on Next.ts" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
};