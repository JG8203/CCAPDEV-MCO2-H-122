import NavBar from "@/components/NavBar";
import EmailInput from "@/components/Login/EmailInput";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginPage() {
  return (
    <div className="flex justify-evenly items-center h-screen px-10">
      <div className="flex-grow">
        <h1 className="text-8xl text-olive font-black">Welcome To DLSU3PS</h1>
      </div>
      <div className="w-6/12">
        <div className="flex flex-col bg-burnt-sienna rounded-lg p-6 gap-4 items-center ">
          <div className="flex ">
            <LoginLink
              authUrlParams={{
                connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || ""
              }}
              className="py-2.5 px-3.5 rounded-lg text-white font-bold bg-olive text-center w-full"
            >
              Sign In With Google
            </LoginLink>
          </div>
          <EmailInput />
        </div>
      </div>
    </div>
  );
}