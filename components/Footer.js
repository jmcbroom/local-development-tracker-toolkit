import { sections } from "./Header";
import Link from "next/link";
import { organization, siteTitle } from "../toolkit.config";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="w-full md:w-1/2 pt-8 md:pt-0">
          <h1>{siteTitle}</h1>
          <Link href="/contact-us">
            <button>Contact us</button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 footer-nav">
          {sections.map((s) => (
            <Link href={s.href} key={s.href}>
              <span className="hover:cursor-pointer">{s.text}</span>
            </Link>
          ))}
        </div>
      </div>
      <p className="container text-xs leading-10">
        &copy; {new Date().getFullYear()} {organization}
      </p>
    </footer>
  );
};

export default Footer;
