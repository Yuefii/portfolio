import Profile from "."

type AppShellProps = {
    children: React.ReactNode
}

const ProfileShell = (props: AppShellProps) => {
    const { children } = props
    return (
        <main>
            < Profile />
            {children}
        </main>
    )
}

export default ProfileShell