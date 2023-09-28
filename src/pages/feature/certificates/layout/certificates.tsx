import jsonDicoding from "@/pages/json/dicoding.json"
import jsonCodepolitan from "@/pages/json/codepolitan.json"
import Link from "next/link"
import Image from "next/image"

const CertificateLayout = () => {
    return (
        <main>
            <div className="flex justify-center mx-auto">
                <div className="py-10 lg:w-1/3">
                    <h1 className="text-center text-2xl font-bold">CERTIFICATE</h1>
                    <p className='text-slate-400 text-center mx-5'>This is a certificate that I got while learning coding in courses and bootcamps.</p>
                </div>
            </div>
            <h2 className="text-center text-lg text-red-700 text-bold py-5">Dicoding</h2>
            <div className="flex justify-center mx-auto lg:w-1/3">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mx-5">
                    {jsonDicoding.map((data, index) => (
                        <Link href={data.dicoding} key={index}>
                            <Image src={data.dicoding} alt="h-auto max-w-full rounded-lg" width={500} height={500} />
                        </Link>
                    ))}
                </div>
            </div>
            <h2 className="text-center text-red-700 text-lg mt-5 text-bold py-5">Codepolitan</h2>
            <div className="flex justify-center mx-auto lg:w-1/3">
                <div className="grid grid-cols-2 gap-2 mx-5">
                    {jsonCodepolitan.map((data, index) => (
                        <Link href={data.codepolitan} key={index}>
                            <Image src={data.codepolitan} alt="h-auto max-w-full rounded-lg" width={500} height={500} />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
export default CertificateLayout