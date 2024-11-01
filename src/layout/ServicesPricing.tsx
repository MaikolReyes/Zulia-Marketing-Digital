import { itemsServicesIT, itemsServicesMkt } from "../resources"


export const ServicesPricing = () => {
    return (
        <>
            <section data-aos='fade-up' id="precios">
                <h2 className="title__services__pricing" id="precios">Nuestros Servicios:</h2>

                <h3 className="services__pricing__subtitle">Desarrollo Web</h3>

                <div className="container__card__services__pricing">
                    {itemsServicesIT.map(({ id, icon, title, src }) => (
                        <div className="card card__services__pricing" data-aos="zoom-in-up" key={id}>
                            <i className={icon}></i>
                            <p className="card__title__pricing">{title}</p>
                            <a href={src} target="_blank" className="btn card__button__pricing">Precios</a>
                        </div>
                    ))}
                </div>

                <h3 className="services__pricing__subtitle">Publicidad en Redes</h3>

                <div className="container__card__services__pricing">
                    {itemsServicesMkt.map(({ id, icon, title, src }) => (
                        <div className="card card__services__pricing" data-aos="zoom-in-up" key={id}>
                            <i className={icon}></i>
                            <p className="card__title__pricing">{title}</p>
                            <a href={src} target="_blank" className="btn card__button__pricing">Precios</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
