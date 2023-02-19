function Card({title,desc,price}) {

    return (
        
        <div class="h-80 w-72 rounded-xl bg-gray-600 flex flex-col justify-center items-center">
            <div class="m-8 flex flex-col justify-between h-full">
                <div>
                    <h3 class="mb-4 text-2xl font-semibold text-white text-center">{title}</h3>
                    <p class="font-semibold text-gray-100">{desc}</p>
                </div>
                <div class="flex justify-between items-center">
                    <p class="font-semibold text-gray-100">{price}</p>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3.5 rounded-xl">Nos services</button>
                </div>
            </div>
        </div>
    )
}

export default Card;