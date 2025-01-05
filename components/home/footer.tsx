export default function Footer() {
    return (
        <div className="flex flex-col gap-2 p-4 text-sm z-20 overflow-hidden relative bg-gray-200/20">
            <h3 className="text-sm">All right reserved, {new Date().getFullYear()} </h3>
            <a href="https://github.com/vijay-singh-coder" target="_blank">Built by Vijay Singh 🚀</a>
        </div>
    )
}