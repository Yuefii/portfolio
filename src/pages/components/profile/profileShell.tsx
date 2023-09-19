import { useRouter } from "next/router"
import Profile from "."

type AppShellProps = {
    children: React.ReactNode
}

const disableProfile = ["/feature/certificates"]

const ProfileShell = (props: AppShellProps) => {
    const { children } = props
    const { pathname } = useRouter()

    return (
        <main>
            {!disableProfile.includes(pathname) && < Profile />}
            {children}
        </main>
    )
}

export default ProfileShell