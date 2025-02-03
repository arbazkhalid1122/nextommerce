import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { useGlobalContext } from "../../Contexts/globalContext/context";

export default function Intro() {

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2500,
    });
  }, []);

  return (
    <div className="text-secondary curier">
      <div className="h-[100vh]">
        <div className="relative h-screen top-10 left-0 right-0">
          <div className="relative w-screen h-screen">
            <Image
              data-aos="fade"
              layout="fill"
              priority
              src="/black-hat.png"
              className="object-contain bg-transparent"
            />
          </div>
          <p
            data-aos="fade-up"
            className="absolute left-0 right-0 text-center top-[65%] sm:top-[75%] text-lg"
          >
            {('moto1')}
          </p>
        </div>
      </div>
      <style jsx>{`
        .animation div {
          width: 300px;
          display: inline-block;
          white-space: nowrap;
        }
        /*keyframe animations*/
        .first {
          -webkit-animation: bannermove 25s linear infinite;
          -moz-animation: bannermove 25s linear infinite;
          -ms-animation: bannermove 25s linear infinite;
          animation: bannermove 25s linear infinite;
        }
        @keyframes "bannermove" {
          0% {
            margin-left: 0px;
          }
          100% {
            margin-left: -2100px;
          }
        }

        @-moz-keyframes bannermove {
          0% {
            margin-left: 0px;
          }
          100% {
            margin-left: -2100px;
          }
        }

        @-webkit-keyframes "bannermove" {
          0% {
            margin-left: 0px;
          }
          100% {
            margin-left: -2100px;
          }
        }

        @-ms-keyframes "bannermove" {
          0% {
            margin-left: 0px;
          }
          100% {
            margin-left: -2100px;
          }
        }
      `}</style>
    </div>
  );
}