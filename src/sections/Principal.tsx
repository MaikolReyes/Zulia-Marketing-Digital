import hero from '../img/hero-principal.webp'

export const Principal = () => {


    return (
        <>

            <div className='containerHero' id='inicio'>
                <div className='containerHeroText animate__animated animate__backInLeft'>
                    <h2 className='titleHero'>Impulsamos tu negocio al siguiente nivel🚀</h2>
                    <p className='parrafoHero'>Te ayudamos a incrementar la presencia de tu negocio o empresa en internet con nuestros servicios de Publicidad en Redes, Email Marketing y Desarrollo Web, podras aumentar tus ventas y alcanzar a mas clientes potenciales.
                    </p>
                    <a id='text' className='buttonHero btn animate__animated animate__backInLeft' href='https://wa.me/message/X65MZULZJUFYL1' target='_blank'>Contactarse</a>
                </div>
                <img src={hero} width='100%' height='auto' alt="Presentacion principal" className='heroPrincipal' />
            </div>
        </>
    )
}
