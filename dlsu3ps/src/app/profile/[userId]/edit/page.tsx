import ProfileUsername from "@/components/Profile/Edit/ProfileUsername";
import Fields from "@/components/Profile/Edit/Fields";
import prisma from "@/app/lib/prisma";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

interface CloudinaryResource {
  context?: {
    alt?: string;
    caption?: string;
  };
  public_id: string;
  secure_url: string;
}

async function uploadFiles(file: File) {
  "use server"
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const response = await new Promise<CloudinaryResource>((resolve, reject) => {
    cloudinary.uploader.upload_stream({
      tags: ['profile-image'],
      upload_preset: 'eeij9vkt'
    }, function (error, result) {
      if (error) {
        reject(error);
        return;
      }
      resolve(result as CloudinaryResource);
    })
    .end(buffer);
  });

  console.log(response.secure_url)
  return response;

}

export default async function page({ params }: { params: { userId: string } }) {
  const currentUser = await prisma.user.findUnique({
    where: {
      id: params.userId,
    },
  });

  async function formAction(formData: FormData) {
    "use server";
    const user = await prisma.user.findUnique({
      where: {
        id: params.userId,
      },
    });
    const username = formData.get('username');
    const email = formData.get('email');
    const bio = formData.get('bio');
    const favoriteCat = formData.get('favoriteCatto');
    const profileImageData = formData.get('profileImage') as File | undefined;

    let profileImageUrl = "";

    if (profileImageData?.name == "undefined") {
      profileImageUrl = user?.profileImage || "";
    } else {
      const response = await uploadFiles(profileImageData as File);
      profileImageUrl = response.secure_url;
    }

    try {
      await prisma.user.update({
        where: {
          id: user?.id!,
        },
        data: {
          username: username as string,
          email: email as string,
          bio: bio as string,
          favoriteCat: favoriteCat as string,
          profileImage: profileImageUrl as string | undefined || user?.profileImage,
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
        <Fields username={currentUser?.username || ""} email={currentUser?.email || ""} favoriteCatto={currentUser?.favoriteCat || ""} bio={currentUser?.bio || ""} profileImageUrl={currentUser?.profileImage || ""} />
        <div className="flex items-center justify-between mt-8">
          <button type="submit" className="bg-burnt-sienna hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}