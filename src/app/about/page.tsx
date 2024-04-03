
export default function About() {
    return (
        <div className="bg-beige font-roboto min-h-screen flex flex-col items-center justify-center">
            <div className="about-container max-w-4xl p-8 bg-olive rounded-lg shadow-md">
                <h1 className="text-4xl text-white font-bold mb-6">ABOUT</h1>
                <p className="text-lg text-white mb-8">
                    This web application is built using a modern tech stack to ensure efficiency, scalability, and
                    maintainability. Here's a breakdown of the technologies that we utilized:
                </p>
                <div className="grid gap-6">
                    <div>
                        <h2 className="text-2xl text-white font-semibold mb-2">Frontend:</h2>
                        <ul className="list-disc text-lg text-white ml-6">
                            <li>React (React.js): A JavaScript library for building user interfaces.</li>
                            <li>Next.js: A React framework for server-side rendering and static website generation.</li>
                            <li>@mdxeditor/editor: MDX editor component for React applications.</li>
                            <li>react-mentions: React component for @mentions functionality.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl text-white font-semibold mb-2">Backend:</h2>
                        <ul className="list-disc text-lg text-white ml-6">
                            <li>Prisma: ORM tool for Node.js and TypeScript.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl text-white font-semibold mb-2">Image and File Management:</h2>
                        <ul className="list-disc text-lg text-white ml-6">
                            <li>Cloudinary: Cloud-based image and video management service.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl text-white font-semibold mb-2">Authentication:</h2>
                        <ul className="list-disc text-lg text-white ml-6">
                            <li>@kinde-oss/kinde-auth-nextjs: Package for authentication in Next.js using Kinde
                                authentication service.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl text-white font-semibold mb-2">Miscellaneous:</h2>
                        <ul className="list-disc text-lg text-white ml-6">
                            <li>gray-matter: Package for parsing front-matter from Markdown files.</li>
                            <li>unique-username-generator: Package for generating unique usernames.</li>
                            <li>zod: TypeScript-first schema declaration and validation library.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
