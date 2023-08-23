/* eslint-disable @next/next/no-img-element */
const Profile = () => {
    return (
        <main className="container mx-auto">
            <div className="flex justify-center">
                <div className="w-1/2 my-10 lg:w-1/6 lg:my-20">
                    <img className="rounded-full shadow-xl border w-full" src="/profile.jpg" alt="profil" />
                </div>
            </div>
        </main>
    )
}

export default Profile