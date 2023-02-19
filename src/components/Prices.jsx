import Card from "./Card";
function Prices(){
    return (
        <div>
            <div className="flex flex-col my-32 text-center">
                <h1 className="text-3xl text-white font-extrabold mb-4">Exemples de nos tarif</h1>
                <p className="text-sm text-gray-200 font-semibold">Les tarifs donnés sont uniquements des exemples des frais supplémentaires peuvent s'appliquer en fonction du projet demandé</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between mx-32 mb-16">
            <Card title = "Site Web"
            desc="Nous construisons votre site web en fonction de vos besoins"
            price = "~50€-200€"/>
            <Card title = "scraping"
            desc="Nous faisons du scraping de données du site que vous voulez dans la limite du légal"
            price = "~30€-80€"/>
            <Card title = "réparation PC"
            desc="Nous réparons votre PC dans la limite du possible"
            price = "~30€-100€"/>
                </div>
                <div className="flex flex-col md:flex-row justify-between mx-32 mb-16">
            <Card title = "Site Web"
            desc="Nous construisons votre site web en fonction de vos besoins"
            price = "~50€-200€"/>
            <Card title = "scraping"
            desc="Nous faisons du scraping de données du site que vous voulez dans la limite du légal"
            price = "~30€-80€"/>
            <Card title = "réparation PC"
            desc="Nous réparons votre PC dans la limite du possible"
            price = "~30€-100€"/>
                </div>
            </div>
    )

}   

export default Prices;