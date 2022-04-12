import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

export default function Dashboard() {
  return (
      <div className=" bg-pink-50 px-3 pt-10 flex">
        {/* sidebar */}
        <aside class="w-64" aria-label="Sidebar">
          <div class="overflow-y-auto py-12 px-8 bg-white fixed inset-y-0  left-0 w-64 rounded dark:bg-gray-800">
            <ul class="space-y-2">
              <li>
              <Link href={`/dashboard`}><a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 transation w-full hover:text-red-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3">Dashboard</span>
                </a></Link>
              </li>
              
              
    
              <li>
              <Link href={`/profile`}><a
                  href="#"
                  class="flex items-center p-2 text-base font-normal transation w-full hover:text-red-500 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                </a></Link>
              </li>
              <li>
              <Link href={`/history`}><a
                  href="#"
                  class="flex items-center p-2 text-base font-norma transation w-full hover:text-red-500 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">History</span>
                </a></Link>
              </li>
              
              <li>
              <Link href={`/setting`}><a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Setting</span>
                </a></Link>
              </li>
            </ul>
          </div>
        </aside>
        {/* main  */}
        <div className="py-1 px-8">
          <div class="grid grid-cols-3 gap-4">
            <input
              class="bg-white text-gray-900 border-0 rounded-lg"
              type="text"
              
              placeholder="Skill ,Design Companies"
            ></input>
            <input
              class=" bg-white text-gray-900  p-3 border-0 rounded-lg"
              type="text"
              placeholder="Location"
            ></input>
            <div>
              <a
                href="#"
                class="px-2 py-2 text-sm text-gray-900 bg-red-400 rounded"
              >
                Finds Job
              </a>
            </div>
          </div>

          <h1 class="font-bold text-lg">Dashboard</h1>
          <h2 class="text-orange-700 tracking-widest">
            Hello John, You applied for 8 jobs today!!
          </h2>

          <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 ... bg-white rounded-lg p-6">
              We Estimate That you will get Hired in #0 days
            </div>
          </div>
          {/* interview table */}
          {/* My application table */}

          <div class="grid grid-cols-5 gap-4">
            <div>
              <p class="p-3 text-gray-900 bg-white rounded-lg text-sm">
                <span class="text-blue-600 font-bold text-xl">80</span>Jobs
                Applied Till Date
              </p>
            </div>
            <div>
              <p class="p-3 text-gray-900 bg-white rounded-lg text-sm">
                {" "}
                <span class="text-blue-600 font-bold text-xl">40</span>New Jobs
                For your Role
              </p>
            </div>
            <div>
              <p class="p-3 text-gray-900 bg-white rounded-lg text-sm">
                {" "}
                <span class="text-blue-600 font-bold text-xl">56</span>Companies
                shortlisted
              </p>
            </div>
            <div class=" col-end-7 col-span-2 p-7 bg-white ml-0.5 rounded-lg">
                
              profile Status
            </div>
          </div>

          <div class="py-4">
            <h2>My Application</h2>
            </div>

            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-2 text-xm text-gray-500">Company</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Position</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Stage</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Date</th>
                  <th class="px-6 py-2 text-xs text-gray-500">Website</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="whitespace-nowrap px-3">
                  <td class="px-6 py-4 text-sm text-gray-900">Salesforce</td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">Account Executive</div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="px-4 py-1 text-sm text-cyan-500 bg-sky-200 rounded"
                    >
                      First Interview
                    </a>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">2 weeks ago</td>
                  <td class="px-6 py-4">
                    <a href="#" class="  text-sm text-blue-600  rounded">
                      www.salesforce.Com
                    </a>
                  </td>
                </tr>
                <tr class="whitespace-nowrap">
                  <td class="px-6 py-4 text-sm text-gray-900">FreshWorks</td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">Sales Director</div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="px-4 py-1 text-sm text-cyan-500 bg-sky-200 rounded"
                    >
                      Applied
                    </a>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">Last week</td>
                  <td class="px-6 py-4">
                    <a href="#" class="  text-sm text-blue-600  rounded">
                      www.freshwork.Com
                    </a>
                  </td>
                </tr>
                <tr class="whitespace-nowrap">
                  <td class="px-6 py-4 text-sm text-gray-900">Google</td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">
                      Senior Sales Executive
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="px-4 py-1 text-sm text-red-700 bg-sky-200 rounded"
                    >
                      Rejected
                    </a>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">a month ago</td>
                  <td class="px-6 py-4">
                    <a href="#" class="  text-sm text-blue-600  rounded">
                      www.google.Com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          
          {/* new table */}

          <div>
            <div class="py-4">
              <h2>My Interviews</h2>
            </div>

            <table class="w-full">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-xs text-gray-500">Company</th>
                  <th class="px-6 py-4 text-xs text-gray-500">Contact</th>
                  <th class="px-6 py-4 text-xs text-gray-500">Date</th>
                  <th class="px-6 py-4 text-xs text-gray-500">Time</th>
                  <th class="px-6 py-4 text-xs text-gray-500">Notes</th>
                  <th class="px-6 py-4 text-xs text-gray-500">Link</th>
                </tr>
              </thead>
              <tbody class="bg-white pb-7">
                <tr class="whitespace-nowrap">
                  <td class="px-6 py-4 text-sm text-gray-900">Salesforce</td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">Mike Hug</div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">March 2nd</td>
                  <td class="px-6 py-4 text-sm text-gray-500">13:00</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="px-4 py-1 text-sm text-blue-600  rounded"
                    >
                      add note
                    </a>
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="  text-sm text-blue-600  rounded">
                      www.salesforce.Com
                    </a>
                  </td>
                </tr>
                <tr class="whitespace-nowrap">
                  <td class="px-6 py-4 text-sm text-gray-900">FreshWorks</td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">Lara Russel</div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">March 14th</td>
                  <td class="px-6 py-4 text-sm text-gray-500">11:00</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="px-4 py-1 text-sm text-blue-600  rounded"
                    >
                      add note
                    </a>
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="  text-sm text-blue-600   rounded">
                      www.freshwork.Com
                    </a>
                  </td>
                </tr>
                <tr class="whitespace-nowrap">
                  <td class="px-6 py-4 text-sm text-gray-900">Google</td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900">James Holden</div>
                  </td>
                  <td class="px-6 py-4 text-sm text-gray-500">Feb 8th</td>
                  <td class="px-6 py-4 text-sm text-gray-500">15:00</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="px-4cmd py-1 text-sm text-blue-600  rounded"
                    >
                      add note
                    </a>
                    <span>view all</span>
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="  text-sm text-blue-600  rounded">
                      www.google.Com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}
