
import Input from './components/Input'
import Textarea from './components/Textarea'
export default function form() {






  return (
    <div className='w-full h-screen bg-blue-50'>
        <div className="  px-3 pt-10">
            <form className="flex flex-col items-center w-1/3 mx-auto" action="/api/form" method="post">
              <Input id="name" name="name" placeholder="Write Your Name" label=" Name" />
              <Input id="email" name="email" placeholder="Write Your Email" label=" Email" />
              
              <Textarea id="message" name="message" placeholder="Hi there" label="Your Message" />
              <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button</button>
              <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>



              <button className='w-full py-2 mt-6 text-lg text-white bg-purple-500 rounded-md active:bg-purple-600 disabled:bg-opacity-50 disabled:cursor-not-allowed' type="submit">Submit</button>


            </form>
      
    </div>
    </div>
  );
}
