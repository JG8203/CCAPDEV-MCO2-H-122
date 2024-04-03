import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src="/images/loading/sad_hamster.jpg" alt="Loading" width={200} height={200} />
      <p className="mt-4 text-xl font-medium text-pink-600">I&#39;m stiww woading... uwu</p>
    </div>
  )
}
