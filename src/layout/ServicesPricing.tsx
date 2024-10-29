import { itemsServicesIT, itemsServicesMkt } from "../resources"


export const ServicesPricing = () => {
    return (
        <>
            <div data-aos='fade-up'>
                <h2 className="flex justify-center font-myCustomFont text-customViolet text-6xl mb-24 mt-48 font-bold xl:text-5xl xl:mb-10" id="precios">Nuestros Servicios:</h2>
                <h3 className="font-myCustomFont text-center text-4xl text-customViolet font-semibold xl:text-3xl">Desarrollo Web</h3>
            </div>

            <div className="flex justify-center items-center gap-12 p-5">
                {itemsServicesIT.map(({ id, icon, title, src }) => (

                    <div className="card flex items-center justify-center bg-customViolet text-white rounded-3xl 2xl:h-96 2xl:w-96 xl:h-80 xl:w-80 shadow-2xl" data-aos="zoom-in-up" key={id}>
                        <div className="text-5xl xl:text-4xl">
                            <i className={icon}></i>
                        </div>
                        <p className="flex justify-center mt-8 font-myCustomFont text-3xl xl:text-2xl">{title}</p>
                        <a href={src} target="_blank" className="btn flex items-center justify-center w-52 h-16 2xl:mt-5 xl:mt-5 rounded-2xl text-xl font-myCustomFontSecondary font-bold text-customViolet bg-white hover:text-gray-600">Precios</a>
                    </div>
                ))}
            </div>

            <h3 className="text-center font-myCustomFont text-4xl text-customViolet font-semibold mt-8 xl:text-3xl">Publicidad en Redes</h3>

            <div className="flex justify-center items-center gap-12 p-5">
                {itemsServicesMkt.map(({ id, icon, title, src }) => (

                    <div className="card flex items-center justify-center bg-customViolet text-white rounded-3xl 2xl:h-96 2xl:w-96 xl:h-80 xl:w-80 shadow-2xl" data-aos="zoom-in-up" key={id}>
                        <div className="text-5xl xl:text-4xl">
                            <i className={icon}></i>
                        </div>
                        <p className="flex justify-center mt-8 font-myCustomFont text-3xl xl:text-2xl">{title}</p>
                        <a href={src} target="_blank" className="btn flex items-center justify-center w-52 h-16 bg-white rounded-2xl text-xl font-myCustomFontSecondary font-bold text-customViolet 2xl:mt-5 xl:mt-5 hover:text-gray-600">Precios</a>
                    </div>
                ))}
            </div>
        </>
    )
}
