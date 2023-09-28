import Image from "next/image"
import json from "@/pages/json/certificate.json"
import Link from "next/link"

const CertificatesLayout = () => {
    return (
        <main>
            <div className="flex justify-center mx-auto lg:-my-16">
                <div className="grid gap-4 py-10 lg:w-1/3">
                    <h1 className="text-center text-2xl font-bold">CERTIFICATE</h1>
                    <p className='text-slate-400 text-center mx-5'>This is a certificate that I got while learning coding in courses and bootcamps.</p>
                    {json.map((data, index) => (
                        <div className="-mt-10 mx-5" key={index}>
                            {data.banner && (
                                <Link href={data.banner}>
                                    <Image className="h-auto max-w-full rounded-lg" src={data.banner} width={694} height={591} alt="" />
                                </Link>
                            )}
                        </div>
                    ))}
                    <div className="grid grid-cols-5 gap-4 mx-5">
                        {json.map((data, index) => (
                            <div key={index}>
                                {data.img && (
                                    <Link href={data.img}>
                                        <Image className="h-auto max-w-full rounded-lg" src={data.img} alt="" height={100} width={100} />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <button>
                        <Link className="text-red-700 text-sm  border rounded shadow-xl py-2 px-4" href="/feature/certificates">More Page...</Link>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default CertificatesLayout