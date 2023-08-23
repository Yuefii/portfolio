import Footer from "."

type FooterShellProps = {
    children: React.ReactNode
}

const FooterShell = (props: FooterShellProps) => {
    const { children } = props
    return (
        <main>
            < Footer />
            {children}
        </main>
    )
}

export default FooterShell