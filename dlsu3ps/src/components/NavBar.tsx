import Link from "next/link";

export default function NavBar() {
    return (
        <header className="flex h-20 justify-between items-center bg-wow-yellow p-0 px-10 sticky top-0 left-0">
            <div className="logo">
                <Link href="/" className="text-beige no-underline hover:text-gray-800">
                    <h1 className="m-0 text-3xl font-bold">DLSU3PS</h1>
                </Link>
            </div>

            <nav className="flex">
                <Link href="/userpage" className="text-beige no-underline mx-5 hover:text-gray-800">Profile</Link>
                <a href="#" className="text-beige no-underline mx-5 hover:text-gray-800">Logout</a>
                <Link href="/about" className="text-beige no-underline mx-5 hover:text-gray-800">About</Link>
                <Link href="/forum" className="text-beige no-underline mx-5 hover:text-gray-800">Forums</Link>
            </nav>
        </header>
    );
}




