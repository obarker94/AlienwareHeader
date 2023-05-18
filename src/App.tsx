import { useEffect, useState } from "react";
import { Header } from "./components/header/Header";

function App() {
  const [background, setBackground] = useState(`bg-gray-900/0`)

  const handleScroll = () => {
    const scrollAmount = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollAmount > 50) setBackground(`bg-[#323232]`)
    else setBackground(`bg-gray-900/0`)
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full min-h-screen flex flex-col p-4 items-center gap-4 overflow-x-hidden"
      style={{
        backgroundImage: `url('./public/images/AWBG.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-1/2 min-h-full grow flex flex-col gap-8">
        <Header background={background} />
        <div className="grow px-16 flex flex-col pt-24">
          <div className="bg-[#FAFAFA] grow rounded-sm shadow-md p-8 bg-white/80">
            <div className="h-96">something</div>
            <div className="h-96">something</div>
            <div className="h-96">something</div>
            <div className="h-96">something</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
