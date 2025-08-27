import { itemsServicesDescription } from "../resources"

export const ServicesDescription = () => {
    return (
        <>
            <div data-aos="fade-up" id="servicios">
                <h2 className='font-myCustomFont font-semibold text-5xl flex justify-center text-customViolet mt-36 mb-16'>¿Qué Ofrecemos?</h2>

                <div className="grid grid-cols-1 laptop:grid-cols-3 mx-auto tablet:w-4/5 large-desktop:w-3/5 gap-10" data-aos="fade-up" data-aos-duration="500">
                    {itemsServicesDescription.map(({ id, icon, title, description }) => (
                        <div className="card border-2 border-customViolet mx-auto text-center" key={id}>
                            <p className="text-2xl text-customViolet"><i className={icon}></i></p>
                            <h3 className="text-customViolet font-bold font-myCustomFont text-2xl">{title}</h3>
                            <p className="font-myCustomFontSecondary text-base p-3 text-gray-700">{description}</p>
                        </div>
                    ))}
                </div >

            </div>
        </>
    )
}