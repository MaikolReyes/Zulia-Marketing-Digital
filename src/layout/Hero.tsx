import hero from '../assets/img/hero-principal.webp'

export const Hero = () => {

    return (
        <>
            <div className='hero' id='inicio'>
                <div className='hero__content animate__animated animate__backInLeft'>
                    <h2 className='hero__text'>Impulsamos tu negocio al siguiente nivel🚀</h2>
                    <p className='hero__description'>Te ayudamos a incrementar la presencia de tu negocio o empresa en internet con nuestros servicios de Publicidad en Redes, Email Marketing y Desarrollo Web.</p>
                    <a id='text' className='btn hero__button animate__animated animate__backInLeft' href='https://wa.me/message/X65MZULZJUFYL1' target='_blank'>Contactarse</a>
                </div>
                <img src={hero} alt="Presentacion principal" className='hero__foto' />
            </div>
        </>
    )
}
