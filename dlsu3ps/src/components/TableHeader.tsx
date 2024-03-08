export default function TableHeader({ topicName }:{topicName: string}) {
  return (
    <div className="mb-5 flex flex-row items-center justify-between">
      <span className="text-5xl font-bold text-burnt-sienna">{topicName}</span>
      <div className="flex">
        <form action="search.html" method="GET">
          <button type="submit"
            className="mx-2 bg-burnt-sienna p-3 rounded-md font-semibold text-white">Search</button>
        </form>
      </div>
    </div>
  )
}