import json from '../json/jumbotron.json'
const JumbotronLayout = () => {
    return (
        <main>
            <div className="lg:w-1/3 container mx-auto">
                {json.map((data, index) => (
                    <h1 key={index} className="text-2xl mx-3 text-slate-900 text-center font-semibold">{data.whoami}</h1>
                ))}
                {json.map((data, index) => (
                    <div key={index} className="border mx-3 shadow-xl px-5 lg:px-10 my-4">
                        <p className="text-slate-700 text-justify py-5">{data.about}</p>
                    </div>
                ))}
            </div >
        </main>
    )
}

export default JumbotronLayout