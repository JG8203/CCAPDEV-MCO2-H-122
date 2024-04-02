import Image from 'next/image';
import SearchList from "@/components/Forum/SearchList";
import {useSearchParams, usePathname, useRouter} from "next/navigation";

export default function LandingPage({searchParams} : {searchParams?: { query? : string};
}) {
    const query = searchParams?.query || "";

    return (
    <div className="bg-beige font-roboto m-0 p-0 h-screen flex flex-col">
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="flex w-full max-w-md flex-col justify-center items-center">
          <p className="text-olive text-center text-6xl font-black">DLSU PUSA FORUMS</p>
        </div>
        <div className="flex justify-center items-center mt-5 gap-4">
          {['mimiw1.png', 'mimiw2.png', 'mimiw3.png', 'mimiw4.png'].map((image, index) => (
            <div key={index} className="w-52 h-80 rounded-lg border border-black overflow-hidden relative">
              <Image
                src={`/images/carousel/${image}`}
                alt={`Forum Image ${index + 1}`}
                layout="fill"
                style={{objectFit:"cover"}}
                className="absolute"
              />
            </div>
          ))}
        </div>
          <SearchList query = {query}/>

      </div>

    </div>
  );
}
