function Contact(){
    return (
    <div>
        <div className="flex justify-center my-16 w-full">
            <h1 className="text-3xl text-white font-extrabold">Nous Contactez</h1>
        </div>
        <form className="mx-96 mb-32">
        <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
                <div>
                <label htmlFor="name" className="block mb-2 text-sm text-white font-extrabold dark:text-white">Nom <span className="text-gray-400">*</span></label>
                <input placeholder="LAFRIME" type="text" id="name" className="bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div>
                <label htmlFor="surname" className="block mb-2 text-sm text-white font-extrabold dark:text-white">Prénom</label>
                <input placeholder="Joe" type="text" id="surname" className="bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
            </div>
        </div>
        <div className="mb-6">
            <label for="email" className="block mb-2 text-sm text-white font-extrabold dark:text-white">Email <span className="text-gray-400">*</span></label>
            <input type="email" id="email" className=" bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lafrime@gmail.com" required/>
        </div>
        <div className="mb-3">
            <label for="message" className="block mb-2 text-sm text-white font-extrabold dark:text-white">Message <span className="text-gray-400">*</span></label>
            <textarea id="message" className="p-2.5 pb-32 bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ecrivez ce que vous avez sur le coeur..." required/>
        </div>
        <p className="text-gray-400 mb-6">Les champs marqués d'un astérisque * sont obligatoires.</p>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-200 dark:focus:ring-blue-800">Envoyer</button>
        </form>
    </div>
    )
}

export default Contact;