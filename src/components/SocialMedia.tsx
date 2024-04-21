import { links } from "@/constants/icons";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { TbCopy } from "react-icons/tb";

const SocialMedia = () => {
  const [copied, setCopied] = useState(false);
  const inviteUrl = `callmeyuefii@gmail.com`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <>
      {links.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className={`flex items-center justify-between  text-neutral-300 hover:bg-neutral-800 duration-300 ease-in-out transition-all p-2 mt-1 rounded-md cursor-pointer ${
            index === links.length - 1 && "bg-neutral-950 hover:bg-neutral-950"
          }`}
        >
          <div className="flex items-center gap-x-2 ">
            {item.iconFirst}
            <p
              key={index}
              className={` font-Intermedium ${
                index === links.length - 1 ? "text-base " : "text-lg"
              }  `}
            >
              {item.name}
            </p>
          </div>
          {index === links.length - 1 ? (
            <span
              onClick={onCopy}
              className="flex items-center bg-neutral-300  p-1 rounded-md px-1 gap-x-1 font-Intermedium text-neutral-600 cursor-pointer "
            >
              {copied ? "Copied" : item.stri}

              <div>
                {copied ? (
                  <span>
                    <FcCheckmark className="w-4 h-4" />
                  </span>
                ) : (
                  <span>
                    <TbCopy className="w-4 h-4" />
                  </span>
                )}
              </div>
            </span>
          ) : (
            item.lastIcon
          )}
        </a>
      ))}
    </>
  );
};

export default SocialMedia;
