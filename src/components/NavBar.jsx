function NavBar(){
  
  return (
    <header>
      <nav className="flex navbg border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Full Stack Logo" />
              <span className="self-center text-2xl font-bold whitespace-nowrap text-white hover:underline decoration-blue-700 dark:text-white">FullStack</span>
          </a>
        <div class="flex md:order-2">
        <button type="button" class="text-md text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Nos services</button>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">ouvrir menu de navigation</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        </div>
        <div className="flex justify-center mx-auto ">
          <div className="flex justify-center">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg navbg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-xl hover:underline decoration-blue-700 text-white font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Accueil</a>     
              </li>
              <li>
                <a href="services" className="block py-2 pl-3 pr-4 text-xl hover:underline decoration-blue-700 text-white font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
              </li>
              <li>
                <a href="tarif" className="block py-2 pl-3 pr-4 text-xl hover:underline decoration-blue-700 text-white font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tarif</a>
              </li>
              <li>
                <a href="contact" className="block py-2 pl-3 pr-4 hover:underline decoration-blue-700 text-xl text-white font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </nav>
      <div class="h-px bg-gray-200 border-0 dark:bg-gray-700"></div>
    </header>
  )
}

export default NavBar;