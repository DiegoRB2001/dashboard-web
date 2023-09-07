//Component for the dashboard home page.

import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"], weight: ["400"] });

function Home() {
  return (
    <div className="bg-primary h-screen w-full">
      <h1 className={`text-center ${oswald.className}`}>Home</h1>
    </div>
  );
}

export default Home;
