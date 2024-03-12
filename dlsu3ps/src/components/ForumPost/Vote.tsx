
//export default function Vote({votesAmt}:{votesAmt:Number}) {
//{votesAmt.toString()}
export default function Vote() {

    return (
        <div className='flex flex-col gap-4 sm:gap-0 pr-2 sm:w-12 mt-16 ml-10 pb-4 sm:pb-0 mb-0'>
            <button className='sm'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-up bg-transparent text-zinc-800 hover:text-emerald-500 hover:fill-emerald-500"><path d="M9 18v-6H5l7-7 7 7h-4v6H9z"/></svg>
            </button>

            <p className='text-center py-2 font-medium text-sm text-zinc-900'>
                2
            </p>

            <button className='sm'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-down bg-transparent text-zinc-800 hover:text-red-500 hover:fill-red-500"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>
            </button>
        </div>
    
    );
  }