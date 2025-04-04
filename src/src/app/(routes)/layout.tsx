// difference between template is that it only renders once on load
// template rerenders every time

export default async function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="mx-auto w-full max-w-7xl min-h-svh">
            <div className="px-4 py-2">
                {children}
            </div>
        </div>
    )
}