import { itemsServicesDescription } from "../resources"

export const ServicesDescription = () => {
    return (
        <>
            <section data-aos="fade-up" id="servicios">
                <h2 className='title__service__description text-red-500'>¿Qué Ofrecemos?</h2>

                <div className="container__service__description" data-aos="fade-up" data-aos-duration="500">
                    {itemsServicesDescription.map(({ id, icon, title, description }) => (
                        <div className="card card__service__description" key={id}>
                            <p><i className={icon} id="icon-services-description"></i></p>
                            <h3 className="card__service__title__description">{title}</h3>
                            <p className="card__service__subtitle_description">{description}</p>
                        </div>
                    ))}
                </div >

            </section>
        </>
    )
}