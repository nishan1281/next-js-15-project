// import Image from "next/image";

import Hello from "../components/hello";



export default function Home() {

  console.log("checking console");

  return (
    <>
    <h1 className="text-3xl">Wellcome to nextjs</h1>
    <Hello/>
    </>
  );
}
