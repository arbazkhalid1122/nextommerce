import { socialLinks } from "../shared/json";
import Link from "next/link";
import LangSelector from "./LangSelector";

function Footer() {
  return (
    <>
      
      <footer className="text-white bg-gray-900 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between mb-6 sm:mb-12 space-y-6 sm:space-y-0">
            {/* Language Selector */}
            <div className="flex justify-center sm:justify-start">
              <LangSelector />
            </div>

            {/* Quick Links */}
            <div className="flex-1">
              <h5 className="font-semibold mb-4 text-lg">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/about">
                    <a className="hover:text-[#00C6FF] transition">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shop">
                    <a className="hover:text-[#00C6FF] transition">Shop</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-[#00C6FF] transition">Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a className="hover:text-[#00C6FF] transition">Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="flex-1">
              <h5 className="font-semibold mb-4 text-lg">Customer Service</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq">
                    <a className="hover:text-[#00C6FF] transition">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/returns">
                    <a className="hover:text-[#00C6FF] transition">Returns & Exchanges</a>
                  </Link>
                </li>
                <li>
                  <Link href="/shipping">
                    <a className="hover:text-[#00C6FF] transition">Shipping Info</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service">
                    <a className="hover:text-[#00C6FF] transition">Terms of Service</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex-1">
              <h5 className="font-semibold mb-4 text-lg">Follow Us</h5>
              <ul className="flex justify-center sm:justify-start space-x-4">
                {socialLinks.map((item, i) => (
                  <li
                    className="p-1 rounded-full glob-trans hover:scale-125 hover:text-[#00C6FF] hover:bg-gray-800"
                    key={i}
                  >
                    <Link href={item.url}>
                      <a target="_blank">
                        <item.icon className="w-6 h-6" />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Your Store Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
