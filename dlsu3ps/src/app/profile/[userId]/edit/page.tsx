import ProfileUsername from "@/components/Profile/Edit/ProfileUsername";
import Fields from "@/components/Profile/Edit/Fields";
import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";

export default async function page({params}: {params: {userId: string}}) {
    const currentUser = await prisma.user.findUnique({
        where: {
            id: params.userId,
        },
    });
    console.log(currentUser)
    async function formAction(formData: FormData) {
        "use server"
        const username = formData.get('username');
        const email = formData.get('email');
        const bio = formData.get('bio');
        const favoriteCat = formData.get('favoriteCatto');

        try {
            const user = await prisma.user.findUnique({
                where: {
                    id: params.userId,
                },
            });
            const updatedUser = await prisma.user.update({
                where: {
                    id: user?.id!,
                },
                data: {
                    username: username as string,
                    email: email as string,
                    bio: bio as string,
                    favoriteCat: favoriteCat as string,
                },
            });
        } catch (error) {
            console.error('Failed to update user:', error);
        } finally {
            redirect(`/profile/${params.userId}`);
        }
    }
    return (
        <>
          <form className="max-w-4xl mx-auto p-5" action={formAction}>
            <h1 className="text-2xl font-bold text-dim-gray mb-6">Edit Profile</h1>
            <ProfileUsername username={currentUser?.username || ""} bio={currentUser?.bio || ""} profileLink={currentUser?.profileImage || ""}/>
            <Fields username={currentUser?.username || ""} email={currentUser?.email || ""} favoriteCatto={currentUser?.favoriteCat || ""} bio={currentUser?.bio || ""} />
            <div className="flex items-center justify-between mt-8">
              <button type="submit" className="bg-burnt-sienna hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save Changes
              </button>
            </div>
          </form>
        </>
      );
    }