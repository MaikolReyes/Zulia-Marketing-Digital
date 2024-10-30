import hero from '../assets/img/hero-principal.webp'

export const Hero = () => {

    return (
        <>
            <div className='hero' id='inicio'>
                <div className='hero__content animate__animated animate__backInLeft'>
                    <h2 className='hero__text'>Impulsamos tu negocio al siguiente nivel🚀</h2>
                    <p className='font-myCustomFontSecondary desktop:text-lg text-black'>Te ayudamos a incrementar la presencia de tu negocio o empresa en internet con nuestros servicios de Publicidad en Redes, Email Marketing y Desarrollo Web. Contáctanos.</p>
                    <a id='text' className='hero__button rounded-2xl font-myCustomFontSecondary xl:w-40 xl:h-12 2xl:text-xl btn animate__animated animate__backInLeft' href='https://wa.me/message/X65MZULZJUFYL1' target='_blank'>Contactarse</a>
                </div>
                <img src={hero} width="100%" height="100%" loading="lazy" alt="Presentacion principal" className='mt-16' />
            </div>
        </>
    )
}
