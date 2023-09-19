import Link from 'next/link'
import Image from 'next/image'
import json from '@/pages/json/navigasi.json'

const Sosmed = () => {
    return (
        <main>
            <div className="container mx-auto py-5 px-10">
                <div className='flex justify-center items-center'>
                    <div className="">
                        <ul className=" flex gap-4 lg:gap-8 py-3 px-4 font-semibold text-slate-900">
                            {json.map((data, index) => (
                                <li key={index}><Link className="hover:text-red-700" href={data.link}><Image src={data.img} alt='sosmed' width={30} height={30} /></Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </main>
    )
}
export default Sosmed