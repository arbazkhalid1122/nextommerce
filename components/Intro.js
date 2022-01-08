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
      <div className="text-secondary curier">
        <div className="h-[100vh]">
          <div className="relative h-screen -top-10 left-0 right-0">
            <div className="relative w-screen h-screen">
            <Image
              data-aos="fade"
              layout="fill"
              priority={true}
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F489%2FHat-front-black__72990.1603748583.png&w=640&q=85"
              className="object-contain bg-transparent"
              />
              </div>
            <p
              data-aos="fade-up"
              className="absolute  left-0 right-0 text-center top-[65%] sm:top-[75%] text-lg"
            >
              _a minimal store.
            </p>
          </div>
        </div>
        <div className="h-[50vh]">
          <div className="relative h-[50vh] left-0 right-0">
            <p
              data-aos="fade"
              className="absolute  left-0 right-0 text-center top-1/2 text-4xl"
            >
              but diverce.
            </p>
          </div>
        </div>
        {/* banner */}

        <div className="bg-third animation w-full whitespace-nowrap overflow-scroll scrollbar-hide">
          <div className="first">
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F491%2FHat-front-white__31525.1602591510.png&w=640&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F116%2F512%2FMen-Jacket-Front-Black__15466.1603283963.png&w=1920&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F117%2F532%2FMen-TShirt-White-Front__99616.1603284781.png&w=640&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F118%2F508%2FSurgical-Mask-Black__89554.1603756821.png&w=750&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F124%2F415%2Fmockup-c2bbbaf4__00019.1601229493.png&w=1920&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F127%2F431%2Fmockup-9fc4c1cf__88683.1601229845.png&w=1920&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F136%2F459%2Fmockup-ae9a83b0__49881.1603746586.png&w=1920&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F491%2FHat-front-white__31525.1602591510.png&w=640&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F116%2F512%2FMen-Jacket-Front-Black__15466.1603283963.png&w=1920&q=85"
            />
          </div>
          <div>
            <img
              className="w-full object-contain"
              src="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F117%2F532%2FMen-TShirt-White-Front__99616.1603284781.png&w=640&q=85"
            />
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
