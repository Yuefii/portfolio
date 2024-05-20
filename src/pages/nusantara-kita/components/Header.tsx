import Link from "next/link";
import { PiGithubLogo } from "react-icons/pi";

const Header = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-semibold">API DOKUMENTASI</h1>
      <h1 className="text-md mt-5">
        Api ini berisi data seluruh wilayah indonesia mulai dari:
      </h1>
      <li>Provinsi</li>
      <li>Kabupaten/Kota</li>
      <li>Kecamatan</li>
      <li>Desa</li>
      <div className="my-5 flex items-center">
        <Link
          href="https://github.com/Yuefii/api-nusantara-kita"
          className="flex items-center gap-x-2 p-2 bg-neutral-200 hover:bg-neutral-400 rounded-md cursor-pointer duration-300 ease-in-out transition-all"
        >
          <div className="bg-black p-1.5 rounded-full">
            <PiGithubLogo className="text-xl text-white" />
          </div>
          <p className="font-semibold text-base text-black">Source Code</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
