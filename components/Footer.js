import { socialLinks } from "../shared/json";
import Link from "next/link";
import LangSelector from "./LangSelector";
function footer() {
  return (<>
  <div className="bg-secondary w-full pt-52 border-0"></div>
    <footer className="text-primary bg-primary py-6 absolute bottom-0 left-0 right-0">
        <div className="flex justify-center sm:justify-end text-center w-full mb-6 sm:mb-3 pr-5 text-xs">
          <LangSelector/>
        </div>
      <ul className="flex justify-center pb-3 px-6 border-b-[1px] border-secondarycont w-min mx-auto">
        {socialLinks.map((item, i) => (
          <li
            className="mx-3 p-1 -mb-1 glob-trans hover:scale-150 hover:text-primary rounded-full hover:bg-hover"
            key={i}
          >
            <Link href={item.url}>
              <a target="_blank">
                <item.icon />
              </a>
            </Link>
          </li>
        ))}
      </ul>
        <div className="container mx-auto pt-3 px-5 flex justify-center">
      </div>
    </footer>
  </>
  );
}

export default footer;
