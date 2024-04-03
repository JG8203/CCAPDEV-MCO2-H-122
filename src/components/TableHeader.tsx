import Link from "../../node_modules/next/link";

export default function TableHeader({ topicName }:{topicName: string}) {
  return (
    <div className="mb-5 flex flex-row items-center justify-between">
      <span className="text-5xl font-bold text-burnt-sienna">{topicName}</span>
    </div>
  )
}