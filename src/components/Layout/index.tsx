import { FC } from "react";
import { LayoutProps } from "./@types";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Github Repositories Explorer</title>
        <meta name="description" content="Created by Randi Faturrrakhman" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>{children}</main>
    </>
  );
};
export default Layout;
