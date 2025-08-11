import { itemsServicesIT, itemsServicesMkt } from "../resources"


export const ServicesPricing = () => {
    return (
        <>
            <div data-aos='fade-up' id="precios">
                <h2 className="font-myCustomFont font-semibold text-5xl flex justify-center text-customViolet mt-36 mb-16" id="precios">Nuestros Servicios</h2>

                <h3 className="flex justify-center font-myCustomFontSecondary text-customViolet text-3xl text-center ">Desarrollo Web</h3>

                <div className="container__card__services__pricing">
                    {itemsServicesIT.map(({ id, icon, title, src }) => (
                        <div className="card card__services__pricing" data-aos="zoom-in-up" key={id}>
                            <i className={icon} id='icon-services-pricing'></i>
                            <p className="card__title__pricing">{title}</p>
                            <a href={src} target="_blank" className="btn card__button__pricing">Precios</a>
                        </div>
                    ))}
                </div>

                <h3 className="flex justify-center font-myCustomFontSecondary text-customViolet text-3xl text-center mt-5">Publicidad en Redes</h3>

                <div className="container__card__services__pricing">
                    {itemsServicesMkt.map(({ id, icon, title, src }) => (
                        <div className="card card__services__pricing" data-aos="zoom-in-up" key={id}>
                            <i className={icon} id='icon-services-pricing'></i>
                            <p className="card__title__pricing">{title}</p>
                            <a href={src} target="_blank" className="btn card__button__pricing">Consultar</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
