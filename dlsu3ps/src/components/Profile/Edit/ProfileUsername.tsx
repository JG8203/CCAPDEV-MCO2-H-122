import Image from "next/image";

export default function ProfileUsername({ username, profileLink, bio }: { username: string; profileLink: string; bio: string }) {
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center rounded-lg overflow-hidden mb-6">
                <div className="md:flex-shrink-0">
                    <div className="h-48 w-full md:w-48 bg-dim-gray">
                        <Image src={profileLink} alt="Profile Picture" width={200} height={200} />
                    </div>
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-olive font-semibold">{username}</div>
                    <p className="mt-2 text-gray-500">{bio}</p>
                    <input
                        id="profileImage"
                        name="profileImage"
                        className="mt-2 p-1 rounded-md font-semibold text-black" 
                        type="file"
                        accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                    />
                </div>
            </div>
        </>
    );
}
