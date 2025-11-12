import Link from "next/link";

const links: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    {
        name: "Assistence",
        href: "/assistence",
    },
];

export default function Menu() {
    return (
        <div className="navbar bg-[#161616] shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={1}
                        role="button"
                        className="btn btn-ghost btn-circle"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-white"> {/* Aggiunto text-white per visibilità */}
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 hover:shadow-lg  focus:outline-none  focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all cursor-pointer">
                    Contatti
                </button>
            </div>
        </div>
    );
}