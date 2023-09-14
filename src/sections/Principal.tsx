import hero from '../img/hero-principal.webp'

export const Principal = () => {


    return (
        <>

            <div className='containerHero' id='inicio'>
                <div className='containerHeroText animate__animated animate__backInLeft'>
                    <h2 className='titleHero'>Agencia de Marketing Digital potenciada con IA</h2>
                    <p className='parrafoHero'>No pierdas más tiempo con estrategias obsoletas. Da un salto hacia el futuro del marketing digital con la inteligencia artificial. ¡Contáctanos ahora y descubre cómo podemos llevar tu negocio al siguiente nivel!
                        {/* Somos una agencia de marketing digital que integra inteligencia artificial en nuestros servicios para automatizar y optimizar todos nuestros procesos junto con el anilisis de metricas para darte una solucion hecha a la medida para tu negocio digital o fisico, */}
                        {/* si quieres impulsar tus ventas junto con tu negocio al siguiente nivel con AI no dudes en contactarnos */}
                    </p>
                    <a id='text' className='buttonHero btn animate__animated animate__backInLeft' href='https://wa.me/message/X65MZULZJUFYL1' target='_blank'>Contactarnos</a>
                </div>
                <img src={hero} width='100%' height='auto' alt="Presentacion principal" className='heroPrincipal' />
            </div>
        </>
    )
}
