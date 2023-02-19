function Card({title,desc,price}) {

    return (
        
            <div className="h-96 w-72 rounded-xl bg-gray-600">
                <div className="m-8">
                    <h3 className="text-2xl font-extrabold tracking-tight text-white dark:text-white">{title}</h3>
                    <p className="my-6 font-semibold text-gray-100  dark:text-gray-400">{desc}</p>
                    <p className="font-semibold text-gray-100 dark:text-gray-400">{price}</p>
                </div>
            </div>
    )
}

export default Card;