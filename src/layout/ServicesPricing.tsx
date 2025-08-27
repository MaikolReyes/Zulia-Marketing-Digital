import { itemsServicesIT, itemsServicesMkt } from "../resources"


export const ServicesPricing = () => {
    return (
        <>
            <div data-aos='fade-up' id="precios">
                <h2 className="font-myCustomFont font-semibold text-5xl flex justify-center text-customViolet mt-36 mb-16" id="precios">Nuestros Servicios</h2>

                <h3 className="text-in-subtitles">Desarrollo Web</h3>

                <div className="flex flex-col laptop:flex-row justify-center gap-10 m-4">
                    {itemsServicesIT.map(({ id, icon, title, src }) => (
                        <div className="card card flex justify-center items-center m-4 w-72 h-72 gap-4 bg-customViolet text-white rounded-xl shadow" data-aos="zoom-in-up" key={id}>
                            <i className={`text-4xl ${icon}`}></i>
                            <p className="font-myCustomFont text-xl text-center">{title}</p>
                            <a href={src} target="_blank" className="btn bg-white rounded-xl text-lg font-myCustomFontSecondary text-customViolet font-bold w-2/4 hover:text-gray-700">Precios</a>
                        </div>
                    ))}
                </div>

                <h3 className="text-in-subtitles mt-5">Publicidad en Redes</h3>

                <div className="flex flex-col laptop:flex-row justify-center gap-10 m-4">
                    {itemsServicesMkt.map(({ id, icon, title, src }) => (
                        <div className="card flex justify-center items-center m-4 w-72 h-72 gap-4 bg-customViolet text-white rounded-xl shadow" data-aos="zoom-in-up" key={id}>
                            <i className={`text-4xl ${icon}`}></i>
                            <p className="font-myCustomFont text-xl text-center">{title}</p>
                            <a href={src} target="_blank" className="btn bg-white rounded-xl text-lg font-myCustomFontSecondary text-customViolet font-bold w-2/4 hover:text-gray-700">Consultar</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
