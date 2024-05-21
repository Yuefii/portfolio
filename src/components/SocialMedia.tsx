import Link from "next/link";

import { links } from "@/constants/icons";

const SocialMedia = () => {
  return (
    <>
      {links.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className="flex items-center justify-between text-neutral-300 hover:bg-neutral-800 duration-300 ease-in-out transition-all p-2 mt-1 rounded-md cursor-pointer"
        >
          <div className="flex items-center gap-x-2 ">
            {item.iconFirst}
            <p key={index} className="font-Intermedium text-base">
              {item.name}
            </p>
          </div>
          <div>{item.lastIcon}</div>
        </Link>
      ))}
    </>
  );
};

export default SocialMedia;
