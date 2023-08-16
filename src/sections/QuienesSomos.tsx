import AboutPhoto from '../img/imagen-nosotros.webp'

export const QuienesSomos = () => {
    return (
        <div className='containerAbout' id='nosotros'>

            <div className='containerImagenAbout'>
                <img src={AboutPhoto} alt="Imagen sobre nosotros" className='imagenAbout' />
            </div>

            <div className='containerTextAbout'>

                <div className='about'>
                    <div>
                        <i className="fa-solid fa-chart-line iconoAbout"></i>
                    </div>

                    <h4 className='textAbout'>Nuestra Mision</h4>
                    <p className='parrafoAbout'>Nuestra misión es ayudar a las empresas a desbloquear todo su potencial en línea. Creemos en el poder de la IA para automatizar y optimizar procesos, brindando a nuestros clientes una ventaja competitiva sin precedentes.</p>
                    {/* Al combinar la creatividad humana con la precisión de la IA, desarrollamos estrategias personalizadas que generan resultados excepcionales. */}

                </div>

                <div className='about'>
                    <div>
                        <i className="fa-solid fa-shop iconoAbout"></i>
                    </div>

                    <h4 className='textAbout'>Nuestra Vision</h4>
                    <p className='parrafoAbout'>Nuestro enfoque único y visionario combina la creatividad humana con la precisión y eficiencia de la IA. Trabajamos en estrecha colaboración contigo para comprender tus objetivos y necesidades comerciales.</p>
                    {/* y luego utilizamos las capacidades de la inteligencia artificial para desarrollar estrategias personalizadas y rentables que maximicen tu impacto en el mercado. */}

                </div>

                <div className='about'>
                    <div>
                        <i className="fa-solid fa-lightbulb iconoAbout"></i>
                    </div>

                    <h4 className='textAbout'>Nuestro Diferencial</h4>
                    <p className='parrafoAbout'>Nuestro diferencial radica en la combinación de creatividad humana, experiencia en IA y enfoque centrado en el cliente. Estamos listos para llevar tu estrategia de marketing digital al siguiente nivel y ayudarte a destacar en el mercado.</p>
                    {/* Únete a nosotros y descubre por qué somos la elección preferida de aquellos que buscan un enfoque de marketing digital potenciado por IA que marca la diferencia. */}

                </div>

            </div>
        </div>
    )
}
