import hero from '../assets/img/hero-principal.webp'

export const Hero = () => {

    return (
        <>
            <div className='Hero' id='inicio'>
                <div className='Hero__content animate__animated animate__backInLeft'>
                    <h2 className=' text-customViolet font-myCustomFont font-bold laptop:text-3xl uppercase laptop:text-center'>Impulsamos tu negocio al siguiente nivel🚀</h2>
                    <p className='font-myCustomFontSecondary desktop:text-lg text-black'>Te ayudamos a incrementar la presencia de tu negocio o empresa en internet con nuestros servicios de Publicidad en Redes, Email Marketing y Desarrollo Web. Contáctanos.</p>
                    <a id='text' className='Hero__button flex justify-center items-center rounded-2xl font-myCustomFontSecondary bg-customViolet text-white hover:bg-violet-500 xl:w-40 xl:h-12 2xl:text-xl 2xl:w-60 2xl:h-14 mt-3 btn animate__animated animate__backInLeft' href='https://wa.me/message/X65MZULZJUFYL1' target='_blank'>Contactarse</a>
                </div>
                <img src={hero} width="100%" height="100%" loading="lazy" alt="Presentacion principal" className='mt-16' />
            </div>
        </>
    )
}
