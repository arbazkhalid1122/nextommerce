import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Intro() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2500,
    });
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          data-aos="fade"
          layout="fill"
          priority
          src="/black-hat.png"
          className="object-contain w-full h-full max-w-full max-h-full"
        />
      </div>
    </div>
  );
}
