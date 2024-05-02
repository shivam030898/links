import Image from "next/image";
import ProfilePic from "../public/main.jpg";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPortrait,
  FaSpotify,
  FaTwitter,
  FaXbox,
} from "react-icons/fa";
import Link from "next/link";
import { ModeToggle } from "./components/ModeToggle";
import { FaXTwitter } from "react-icons/fa6";

const linksData = [
  {
    href: "https://twitter.com/Shivam04407650",
    icon: FaXTwitter,
    text: "Twitter",
  },
  {
    href: "https://www.linkedin.com/in/shivam-singh-2aa978231/",
    icon: FaLinkedin,
    text: "Linkedin",
  },
  {
    href: "https://portfoliov3-zeta.vercel.app/",
    icon: FaPortrait,
    text: "Portfolio",
  },
  { href: "https://github.com/shivam030898", icon: FaGithub, text: "Github" },
  {
    href: "https://open.spotify.com/playlist/4MwWbabaESrSDlnEYA6lpO?si=503ec961a0544c60",
    icon: FaSpotify,
    text: "Playlist",
  },
];

export default function Home() {
  return (
    <>
      <div className=" top-0 left-0 p-4">
        <ModeToggle />
      </div>
      <div className="flex flex-col gap-y-5 items-center justify-center mt-20">
        <Image
          src={ProfilePic}
          alt=""
          width={150}
          height={150}
          objectFit="contain"
          className="rounded-custom"
        />
        <h1 className="font-bold text-2xl">@shivamsingh</h1>
        <br />
        {linksData.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shadow-sm border border-l-stone-900 flex-row gap-2 px-3 w-1/4 py-3 rounded-md justify-center items-center duration-300 cursor-pointer overflow-hidden transition-transform hover:scale-125"
          >
            <link.icon className="text-2xl" />
            <p className="text-xl font-semibold">{link.text}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
