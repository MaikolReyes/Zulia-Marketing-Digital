import hero from '../img/hero-principal.webp'

export const Principal = () => {


    return (
        <>

            <div className='containerHero' id='inicio'>
                <div className='containerHeroText animate__animated animate__backInLeft'>
                    <h2 className='titleHero'>Agencia de Marketing Digital potenciada con IA</h2>
                    <p className='parrafoHero'>¡Potencia tu presencia en línea con nuestros servicios de marketing digital! Aumenta tus ventas, optimiza procesos y conquista nuevos mercados para destacar en la era digital. ¡Descubre el éxito con nosotros hoy mismo!
                    </p>
                    <a id='text' className='buttonHero btn animate__animated animate__backInLeft' href='https://wa.me/message/X65MZULZJUFYL1' target='_blank'>Contactarnos</a>
                </div>
                <img src={hero} width='100%' height='auto' alt="Presentacion principal" className='heroPrincipal' />
            </div>
        </>
    )
}
