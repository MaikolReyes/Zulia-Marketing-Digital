import { itemsServices, itemsAbout, itemsServicesIT, itemsServicesMkt } from "./components"
import hero from '../src/assets/img/hero-principal.webp'
import AboutPhoto from './assets/img/imagen-nosotros.webp';

export const App = () => {

    // const sendForm = () => {
    //     swal({
    //         title: 'Tu consulta fue enviada',
    //         text: "Gracias por Contactarte",
    //         icon: "success"
    //     })
    // }

    return (
        <>
            <div className='grid grid-cols-2 justify-items-stretch' id='inicio'>

                <div className='flex flex-col justify-center items-center 2xl:m-50 xl:m-48 sm:m-8 animate__animated animate__backInLeft'>
                    <h2 className='text-customViolet font-myCustomFont font-bold xl: xl:text-3xl 2xl:text-5xl 2xl:mt-24 uppercase lg:text-center'>Impulsamos tu negocio al siguiente nivel🚀</h2>
                    <p className='font-myCustomFontSecondary 2xl:text-lg text-black 2xl:mt-2'>Te ayudamos a incrementar la presencia de tu negocio o empresa en internet con nuestros servicios de Publicidad en Redes, Email Marketing y Desarrollo Web. Contáctanos.
                    </p>
                    <a id='text' className='flex justify-center items-center rounded-2xl font-myCustomFontSecondary bg-customViolet text-white hover:bg-violet-500 xl:w-40 xl:h-12 2xl:text-xl 2xl:w-60 2xl:h-14 mt-3 btn animate__animated animate__backInLeft' href='https://wa.me/message/X65MZULZJUFYL1' target='_blank'>Contactarse</a>
                </div>
                <img src={hero} width="100%" height="100%" loading="lazy" alt="Presentacion principal" className='mt-16' />
            </div>

            {/* Section Services */}
            <div data-aos="fade-up">
                <h2 className='pt-10 pb-10 font-myCustomFont flex justify-center text-customViolet font-semibold text-6xl xl:text-5xl xl:mb-10 xl:mt-20 2xl:mt-40' id="servicios" >¿Qué Ofrecemos?</h2>
            </div>

            <div className="grid grid-cols-3 xl:w-5/6 xl:mx-auto xl:gap-14" data-aos="fade-up" data-aos-duration="500">
                {itemsServices.map(({ id, icon, title, description }) => (
                    <div className="card flex justify-center text-center rounded-lg border-customViolet text-xl 2xl:w-11/12 2xl:mt-16 mx-auto 2xl:h-full" key={id}>
                        <p><i className={icon}></i></p>
                        <div className="flex flex-col" >
                            <h3 className="text-3xl font-myCustomFont text-customViolet font-bold m-2">{title}</h3>
                            <p className="font-myCustomFontSecondary m-4 xl:text-base ">{description}</p>
                        </div>
                    </div>
                ))}
            </div >

            {/* Section About */}
            <div className=' grid grid-cols-2 mt-52 justify-items-center' id='nosotros'>

                <div className='flex justify-center m-auto pl-52' data-aos="fade-up" data-aos-duration='1000'>
                    <img src={AboutPhoto} alt="Imagen sobre nosotros" loading="lazy" className='imagenAbout w-full' />
                </div>

                <div className='flex flex-col gap-8 w-2/5'>
                    {itemsAbout.map(({ id, icon, title, description }) => (
                        <div className='flex flex-col text-center items-center justify-center xl:w-96' data-aos="zoom-in-up" key={id}>
                            <div>
                                <i className={icon}></i>
                            </div>
                            <h4 className='textAbout font-myCustomFont text-customViolet text-3xl font-bold'>{title}</h4>
                            <p className='parrafoAbout font-myCustomFontSecondary text-base'>{description}</p>
                        </div>
                    ))}

                </div>
            </div>

            {/* Section of Planes */}
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

            {/* Form */}
            <div className="content mx-auto xl:mt-40 xl:mb-40 xl:w-2/3 2xl:mt-48 2xl:mb-48 2xl:w-2/5 bg-customViolet rounded-3xl p-16 shadow-2xl" id="contacto" data-aos="fade-right" data-aos-duration="2000" >
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <h3 className="titleContactanos">Contacto</h3>
                        <form action="https://formsubmit.co/zuliamarketingdigital@gmail.com" method="POST">
                            <p>
                                <label htmlFor='name' className="labelForm">Nombre</label>
                                <input required className="inputForm" type="text" name="Nombre" id="name" />
                            </p>
                            <p>
                                <label htmlFor="email" className="labelForm">Correo Electrónico</label>
                                <input required className="inputForm" type="email" name="Email" id="email" />
                            </p>
                            <p className="block">
                                <label htmlFor="mensajes" className="labelForm">Mensaje</label>
                                <textarea className="textareaForm" required name="mensajes" id="mensajes" cols={50} rows={3}></textarea>
                            </p>
                            <p className="block" >
                                <button type="submit">
                                    Enviar
                                </button>
                                <input type="hidden" name="_next" value="https://zuliamarketingdigital.com/" />
                                <input type="hidden" name="_captcha" value='false' />
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
