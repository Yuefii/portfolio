import Skill from '../json/skill.json'

const SkillsLayout = () => {
    return (
        <main className='-my-16'>
            <div className="py-16">
                <h1 className="text-center text-2xl mb-8 font-bold">Myskill & Tech</h1>
                <div className="lg:w-1/3 mx-5 bg-transparent justify-center lg:mx-auto overflow-x-auto shadow-xl sm:rounded">
                    <table className="w-full text-sm text-left">
                        <thead className="text-md text-slate-900">
                            <tr className="border">
                                <th scope="row" className="px-6 py-4 font-bold text-red-700 whitespace-nowrap border-r">
                                    Frontend
                                </th>
                                <th className="px-6 py-4 font-bold text-red-700 whitespace-nowrap">
                                    Backend
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Skill.map((skill, index) => (
                                <tr key={index} className="border">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap border-r">
                                        {skill.frontend}
                                    </th>
                                    <th className="px-6 py-4 font-medium whitespace-nowrap">
                                        {skill.backend}
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div >
            </div>
        </main>
    )
}

export default SkillsLayout