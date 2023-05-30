import type { GetServerSideProps } from "next";
import { initializeStore } from "../lib/store";
import { ssrConfig } from './../lib';

export default function Home() {
  return <div>test</div>;
}

export const getServerSideProps = ssrConfig;