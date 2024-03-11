import {PrismaClient} from "@prisma/client";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {NextResponse} from "next/server";
import { generateFromEmail, generateUsername } from "unique-username-generator";

const prisma = new PrismaClient();

export async function GET() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user || user == null || !user.id)
        throw new Error("something went wrong with authentication" + user);

    let dbUser = await prisma.user.findUnique({
        where: {kindeId: user.id}
    });

    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                kindeId: user.id,
                firstName: user.given_name ?? "",
                lastName: user.family_name ?? "",
                email: user.email ?? "",
                username: generateFromEmail(user.email ?? ""),
                profileImage: "@/public/images/users/catuser0.png",
            }
        });
    }
    return NextResponse.redirect("http://localhost:3000/forum");
}

export const dynamic = "force-dynamic"; //oh my god i hate myself