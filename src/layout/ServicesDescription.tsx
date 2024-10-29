import { itemsServicesDescription } from "../resources"

export const ServicesDescription = () => {
    return (
        <>
            <div data-aos="fade-up">
                <h2 className='pt-10 pb-10 font-myCustomFont flex justify-center text-customViolet font-semibold text-6xl xl:text-5xl xl:mb-10 xl:mt-20 2xl:mt-40' id="servicios" >¿Qué Ofrecemos?</h2>
            </div>

            <div className="grid grid-cols-3 xl:w-5/6 xl:mx-auto xl:gap-14" data-aos="fade-up" data-aos-duration="500">
                {itemsServicesDescription.map(({ id, icon, title, description }) => (
                    <div className="card flex justify-center text-center rounded-lg border-customViolet text-xl 2xl:w-11/12 2xl:mt-16 mx-auto 2xl:h-full" key={id}>
                        <p><i className={icon}></i></p>
                        <div className="flex flex-col" >
                            <h3 className="text-3xl font-myCustomFont text-customViolet font-bold m-2">{title}</h3>
                            <p className="font-myCustomFontSecondary m-4 xl:text-base ">{description}</p>
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
}
