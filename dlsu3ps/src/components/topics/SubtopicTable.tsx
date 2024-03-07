export default function SubtopicTable({subtopics}) {
  return (
    <>
    <table
            className="w-full text-sm text-left text-gray-500 table-auto overflow-ellipsis border-solid border-2 border-olive mb-20">
            <thead className="text-xs uppercase bg-olive text-beige">
              <tr>
                <th scope="col" className="pt-5 pb-3 px-6">
                  Forum
                </th>
                <th scope="col" className="pt-5 pb-3 px-6">
                  Latest Post
                </th>
                <th scope="col" className="pt-5 pb-3 px-6">
                  Threads
                </th>
                <th scope="col" className="pt-5 pb-3 px-6">
                  Posts
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-olive">
                <td scope="row" className="p-3 font-medium text-gray-900 flex">
                  <a href="SnowflakeList.html" className="flex items-center no-underline text-gray-900">
                    <div className="text-3xl p-5">
                      🐈
                    </div>
                    <div className="flex-col">
                      <div className="font-medium text-olive">
                        Snowflake
                      </div>
                      <div className="font-small text-dim-gray font-normal">
                        Discussions about the most notorious cat in the campus.
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
                  <a href="View-Post-Snowflake.html" className="flex items-center no-underline text-gray-900">
                    <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
                      <img src="../public/images/catuser0.png" />
                    </div>
                    <div className="flex-col">
                      <div className="font-semibold text-olive">
                        [ADMIN] NO POSTING OF NANGANGALMOT INCIDENCES
                      </div>
                      <div className="font-semi text-burnt-sienna">
                        by ADMIN#1
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6">
                  1
                </td>
                <td className="py-4 px-6">
                  2
                </td>
              </tr>

              <tr className="border-b-2 border-olive ">
                <td scope="row" className="p-3 font-medium text-gray-900 flex">
                  <a href="WhiskersList.html" className="flex items-center no-underline text-gray-900">
                    <div className="text-3xl p-5">
                      🐈
                    </div>
                    <div className="flex-col">
                      <div className="font-medium text-olive">
                        Whiskers
                      </div>
                      <div className="font-small text-dim-gray font-normal">
                        Celebrating the sassy and independent spirit of Whiskers.
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
                  <a href="View-Post-Whiskers.html" className="flex items-center no-underline text-gray-900">
                    <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
                      <img src="../public/images/catuser1.png" />
                    </div>
                    <div className="flex-col">
                      <div className="font-semibold text-olive">
                        A Sunny Afternoon with Whiskers
                      </div>
                      <div className="font-semi text-burnt-sienna">
                        by StrayWhispererJosh
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6">
                  1
                </td>
                <td className="py-4 px-6">
                  2
                </td>
              </tr>

              <tr className="border-b-2 border-olive ">
                <td scope="row" className="p-3 font-medium text-gray-900 flex">
                  <a href="LunaList.html" className="flex items-center no-underline text-gray-900">
                    <div className="text-3xl p-5">
                      🐈
                    </div>
                    <div className="flex-col">
                      <div className="font-medium text-olive">
                        Luna
                      </div>
                      <div className="font-small text-dim-gray font-normal">
                        Chronicles of Luna's bold adventures and mischievous acts.
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
                  <a href="View-Post-Luna.html" className="flex items-center no-underline text-gray-900">
                    <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
                      <img src="../public/images/catuser2.png" />
                    </div>
                    <div className="flex-col">
                      <div className="font-semibold text-olive">
                        Luna's Midnight Adventures
                      </div>
                      <div className="font-semi text-burnt-sienna">
                        by SammiePaws
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6">
                  1
                </td>
                <td className="py-4 px-6">
                  2
                </td>
              </tr>
              <tr className="border-b-2 border-olive ">
                <td scope="row" className="p-3 font-medium text-gray-900 flex">
                  <a href="GingerList.html" className="flex items-center no-underline text-gray-900">
                    <div className="text-3xl p-5">
                      🐈
                    </div>
                    <div className="flex-col">
                      <div className="font-medium text-olive">
                        Ginger
                      </div>
                      <div className="font-small text-dim-gray font-normal">
                        In-depth discussions and admiration for Ginger's majestic fluff.
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
                  <a href="View-Post-Ginger.html" className="flex items-center no-underline text-gray-900">
                    <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
                      <img src="../public/images/catuser1.png" />
                    </div>
                    <div className="flex-col">
                      <div className="font-semibold text-olive">
                        Ginger's New Trick!
                      </div>
                      <div className="font-semi text-burnt-sienna">
                        by PeterParkerTheCatGuy
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6">
                  1
                </td>
                <td className="py-4 px-6">
                  2
                </td>
              </tr>
              <tr className="border-b-2 border-olive ">
                <td scope="row" className="p-3 font-medium text-gray-900 flex">
                  <a href="SocksList.html" className="flex items-center no-underline text-gray-900">
                    <div className="text-3xl p-5">
                      🐈
                    </div>
                    <div className="flex-col">
                      <div className="font-medium text-olive">
                        Socks
                      </div>
                      <div className="font-small text-dim-gray font-normal">
                        Discussions about the stinky cat, Socks.
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6 overflow-hidden overflow-ellipsis">
                  <a href="View-Post-Socks.html" className="flex items-center no-underline text-gray-900">
                    <div className="w-10 h-10 bg-whitesmoke rounded-full border border-transparent mx-4 flex-shrink-0 overflow-hidden">
                      <img src="../public/images/catuser3.png" />
                    </div>
                    <div className="flex-col">
                      <div className="font-semibold text-olive">
                        Socks Found a New Cozy Spot
                      </div>
                      <div className="font-semi text-burnt-sienna">
                        by AudreyHeartsCats
                      </div>
                    </div>
                  </a>
                </td>
                <td className="py-4 px-6">
                  1
                </td>
                <td className="py-4 px-6">
                  2
                </td>
              </tr>
            </tbody>
          </table>
    </>
  )
}
