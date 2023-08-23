/* eslint-disable @next/next/no-img-element */
const Certificate = () => {
    return (
        <main>
            <div className="flex justify-center mx-auto lg:-my-16">
                <div className="grid gap-4 py-10 lg:w-1/3">
                    <h1 className="text-center text-2xl text-slate-900 font-bold">CERTIFICATE</h1>
                    <p className='text-slate-700 text-center mx-5'>This is a certificate that I got while learning coding in courses and bootcamps.</p>
                    <div className="mx-5">
                        <img className="h-auto max-w-full rounded-lg" src="/certificate/certificate(6).jpg" alt="" />
                    </div>
                    <div className="grid grid-cols-5 gap-4 mx-5">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/certificate/certificate(2).jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/certificate/certificate(3).jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/certificate/certificate(4).jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/certificate/certificate(5).jpg" alt="" />
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="/certificate/certificate(1).jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Certificate