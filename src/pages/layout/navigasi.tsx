import json from '@/pages/json/navigasi.json'
import Link from 'next/link'

const Navigasi = () => {
    return (
        <main>
            <div className="container mx-auto py-5 px-10">
                <div className='flex justify-center items-center'>
                    <div className="">
                        <h1 className='text-2xl font-bold text-center my-3'>Social Media</h1>
                        <ul className="shadow-xl flex gap-4 lg:gap-8 rounded  py-3 px-4 font-semibold border text-slate-900">
                            {json.map((data, index) => (
                                <li key={index}><Link className="hover:text-red-700" href={data.link}>{data.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div >
        </main>
    )
}
export default Navigasi