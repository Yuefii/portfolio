import Link from "next/link";
import { FaGithub, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-semibold">API DOKUMENTASI</h1>
      <div className="text-md text-white space-y-3 mt-5">
        <p>
          API Nusantara Kita menyediakan data lengkap mengenai wilayah
          Indonesia, termasuk provinsi, kabupaten/kota, kecamatan dan desa.
        </p>
        <Link href="https://nusantara-kita.yuefii.my.id">
          URL :{" "}
          <span className="text-blue-500 underline">
            nusantara-kita.yuefii.my.id
          </span>
        </Link>
        <h1>Api ini berisi data seluruh wilayah indonesia mulai dari:</h1>
        <div>
          <li>Provinsi</li>
          <li>Kabupaten/Kota</li>
          <li>Kecamatan</li>
          <li>Desa</li>
        </div>
      </div>
      <div className="my-5 flex gap-2 items-center">
        <Link
          href="https://github.com/Yuefii"
          className="flex items-center gap-2 border border-white bg-black p-1.5 rounded-md text-white hover:opacity-65"
        >
          <FaUser size="15" />
          <p className="text-sm">Author</p>
        </Link>
        <Link
          href="https://github.com/Yuefii/api-nusantara-kita"
          className="flex items-center gap-2 border bg-black p-1.5 rounded-md text-white hover:opacity-65"
        >
          <FaGithub size="20" />
          <p className="text-sm">Source Code</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
