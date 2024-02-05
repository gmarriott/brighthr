"use client";
import { Header } from "@/components/Header/Header";
import { Body } from "@/components/Body/Body";
import { FileProvider } from "@/contexts/FileContext";

export default function Home() {
  return (
    <>
     <FileProvider>
        <Header />
        <Body />
      </FileProvider>
    </>
  );
}
