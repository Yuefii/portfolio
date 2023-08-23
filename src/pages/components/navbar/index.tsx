import json from '@/pages/json/navbar.json'
import Link from 'next/link'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const isLinkActive = (path: string) => {
        return pathname === path && "text-red-700";
    };
    return (
        <main>
            <div className="container mx-auto py-5 px-10">
                <div className='flex justify-center items-center'>
                    <div className="">
                        <ul className="shadow-xl flex gap-4 lg:gap-8 rounded  py-3 px-4 font-semibold border text-slate-900">
                            {json.map((data, index) => (
                                <li key={index}><Link className={`${isLinkActive(
                                    data.link
                                )} hover:text-red-700 transition duration-300`} href={data.link}>{data.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </main>
    )
}
export default Navbar