import prisma from "@/app/lib/prisma"

export default function Fields({username, email, bio, favoriteCatto} : {username: string, email: string, bio: string, favoriteCatto: string}) {

    return (
        <>
            <div className="mt-8">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    defaultValue={username}
                />
            </div>
            <div className="mt-8">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    defaultValue={email}
                />
            </div>

            <div className="mt-4">
                <label htmlFor="bio" className="block text-gray-700 text-sm font-bold mb-2">About Me</label>
                <textarea
                    id="bio"
                    name="bio"
                    placeholder="Tell us about yourself"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    defaultValue={bio}
                ></textarea>
            </div>

            <div className="mt-4 mb-8">
                <label htmlFor="catto" className="block text-gray-700 text-sm font-bold mb-2">Favorite Catto</label>
                <input
                    type="text"
                    id="favoriteCatto"
                    name="favoriteCatto"
                    placeholder="Your favorite catto"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    defaultValue={favoriteCatto}
                />
            </div>
        </>
    )
}
