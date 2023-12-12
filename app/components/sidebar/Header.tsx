import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuToggle } from "@/components/menu-toggle";

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <div
        className={cn(
          "md:px-6 pt-16",
          isMobile && "w-full py-0 flex gap-2 items-center"
        )}
      >
        <div className="flex justify-center items-center">
          <Image
            className={cn(
              "md:w-1/2 rounded-full border border-black",
              isMobile && "w-0 border-none"
            )}
            src="/profile.jpg"
            alt="profile"
            width={100}
            height={100}
          />
        </div>
        {isMobile && (
          <main className="flex gap-2">
            <MenuToggle />
            <Avatar>
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </main>
        )}
        <div className="text-center font-semibold">
          <h1 className={cn("text-sm pt-2", isMobile && "hidden")}>
            Muhamad Mupid Ahmadiawan
          </h1>
          <p className="text-violet-600">@yuefii</p>
        </div>
      </div>
    </>
  );
};

export default Header;
