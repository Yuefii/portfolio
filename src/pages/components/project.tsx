/* eslint-disable @next/next/no-img-element */
const Project = () => {
    return (
        <main className="container mx-auto lg:-my-16">
            <h1 className="text-center text-2xl py-8 font-bold">Latest Projects</h1>
            <div className="justify-center mx-5 flex">
                <img src="/project1.png" alt="1" className="lg:w-1/3" />
            </div>
            <div className="justify-center flex">
                <ul className="flex gap-3 my-4 mx-4">
                    <li className="font-bold">fake-ecommerce: </li>
                    <li className="border px-2 lg:px-6 shadow-xl text-red-700 text-sm  rounded">Next JS</li>
                    <li className="border px-2 lg:px-6 shadow-xl text-sm text-red-700 rounded">Postgresql</li>
                </ul>
            </div>
        </main>
    )
}
export default Project