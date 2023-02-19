function Services(){
  return (
        <div>
            <div className="flex flex-col my-20 text-center">
                <h1 className="text-3xl text-white font-extrabold mb-4">Demandez un service</h1>
                <p className="text-sm text-gray-200 font-semibold">Nous vous répondrons dans les plus bref délai afin de vous faire un devis.</p>
                <p className="mt-1 text-xs text-gray-200 font-semibold">Vous pouvez demandez absolument n'importe quoi on vous dira par la suite si c'est possible.</p>
            </div>
            <div>
        <form className="mx-96 mb-16 border-gray-200 border-2 rounded-lg">
        <div className="m-8">
            <div className="mb-6">
                <h2 className="text-white font-bold text-2xl mb-10 "><span className="underline">Remplissez ce formulaire</span> :</h2>
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
            <div className="mb-8">
                <label for="email" className="block mb-2 text-sm text-white font-extrabold dark:text-white">Email <span className="text-gray-400">*</span></label>
                <input type="email" id="email" className=" bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lafrime@gmail.com" required/>
            </div>
            <div className="mb-3">
                <label for="subject" className="block mb-2 text-sm text-white font-extrabold dark:text-white">Sujet <span className="text-gray-400">*</span></label>
                <input type="text" id="subject" className="mb-6 bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Titre de votre projet" required/>
                <label for="message" className="block mb-2 text-sm text-white font-extrabold dark:text-white">Message <span className="text-gray-400">*</span></label>
                <textarea id="message" className="p-2.5 pb-32 bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Demandez-nous de faire votre site web e-commerce, faites une courte description de ce que vous voulez faire." required/>
            </div>
            <p className="text-gray-400 mb-6">Les champs marqués d'un astérisque * sont obligatoires.</p>
            <button type="submit" className="flex mx-auto justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-200 dark:focus:ring-blue-800">Demander un devis</button>
            </div>
            </form>

        </div>
            </div>
        
  )
}
export default Services;