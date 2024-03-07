import Link from "next/link";

export default function NavBar() {
    return (
        <header className="flex h-20 justify-between items-center bg-wow-yellow p-0 px-10">
            <div className="logo">
                <Link href="/" className="text-beige no-underline">
                    <h1 className="m-0 text-3xl font-bold">DLSU3PS</h1>
                </Link>
            </div>

            <nav className="flex">
                <Link href="/userpage" className="text-beige no-underline mx-5 hover:text-beige">Profile</Link>
                <a href="#" className="text-beige no-underline mx-5 hover:text-beige">Logout</a>
                <Link href="/about" className="text-beige no-underline mx-5 hover:text-beige">About</Link>
                <Link href="/forum" className="text-beige no-underline mx-5 hover:text-beige">Forums</Link>
            </nav>
        </header>
    );
}




