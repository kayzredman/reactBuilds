import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kayz Portfolio</title>
      </Head>
      <h1 className="text-blue-800">Hello World</h1>
    </div>
  );
}