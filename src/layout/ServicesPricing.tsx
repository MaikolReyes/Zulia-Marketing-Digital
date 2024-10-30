import { itemsServicesIT, itemsServicesMkt } from "../resources"


export const ServicesPricing = () => {
    return (
        <>
            <section data-aos='fade-up' id="precios">
                <h2 className="title__services__pricing" id="precios">Nuestros Servicios:</h2>

                <div>
                    <h3 className="services__pricing__subtitle">Desarrollo Web</h3>
                    <div className="container__card__services__pricing">
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
                </div>

                <div>
                    <h3 className="services__pricing__subtitle text-center font-myCustomFont text-4xl text-customViolet font-semibold mt-8 xl:text-3xl">Publicidad en Redes</h3>

                    <div className="container__card__services__pricing">
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
                </div>
            </section>
        </>
    )
}
