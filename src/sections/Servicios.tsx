
export const Servicios = () => {
    return (
        <>
            <div data-aos="fade-up">
                <h2 className='titleServices' id="servicios" >¿Qué Ofrecemos?</h2>
            </div>

            <div className="containerServices" data-aos="fade-up" data-aos-duration="500">

                <div className="services">
                    <p className="icon-image">
                        <i className="fa-solid fa-square-poll-vertical icono"></i>
                    </p>
                    <div className="containerTextServices" >
                        <h3 className="titleService">Plan de Marketing Digital</h3>
                        <p className="parrafoServices">Imagina tener a tu disposición una solución de marketing totalmente automatizada y optimizada. Con nuestra potente IA, analizamos datos y métricas en tiempo real para identificar oportunidades ocultas y personalizar cada aspecto de tu estrategia.
                        </p>
                        {/* Desde el target de audiencia hasta la optimización de anuncios, cada paso se perfecciona para obtener los mejores resultados. */}
                    </div>
                </div>

                <div className="services">

                    <p className="icon-image" >
                        <i className="fa-solid fa-code icono"></i>
                    </p>
                    <div className="containerTextServices" >
                        <h3 className="titleService">Desarrollo Web</h3>
                        <p className="parrafoServices">Con nuestro equipo de talentosos desarrolladores, creamos sitios web personalizados que se destacan en el panorama digital. Ya sea que necesites un sitio web corporativo, una tienda en línea o una plataforma interactiva, tenemos las habilidades y la experiencia para superar tus expectativas.</p>
                    </div>
                </div>

                <div className="services">
                    <p className="icon-image">
                        <i className="fa-solid fa-robot icono"></i>
                    </p>

                    <div className="containerTextServices" >
                        <h3 className="titleService">Chatbots con IA</h3>
                        <p className="parrafoServices">Imagina tener un asistente virtual inteligente y disponible las 24 horas del día, los 7 días de la semana. Nuestros chatbots con IA no solo responden preguntas de manera instantánea, sino que también ofrecen una experiencia personalizada y contextual.</p>
                        {/* Utilizando algoritmos de aprendizaje automático, nuestros chatbots se adaptan a cada interacción, comprendiendo y anticipando las necesidades de tus clientes. */}
                    </div>
                </div>

                <div className="services">
                    <p className="icon-image">
                        <i className="icon fa-solid fa-globe icono"></i>
                    </p>

                    <div className="containerTextServices" >
                        <h3 className="titleService">Publicidad en Redes</h3>
                        <p className="parrafoServices">No dejes que tu competencia te supere en el mundo digital. Aprovecha las oportunidades de publicidad con Google Ads y Meta Ads para impulsar tu negocio hacia el éxito. Contáctanos ahora y descubre cómo podemos ayudarte a destacar y alcanzar tus objetivos de marketing de manera efectiva.</p>
                    </div>
                </div>

                <div className="services">
                    <p className="icon-image">
                        <i className="fa-regular fa-envelope icono"></i>
                    </p>

                    <div className="containerTextServices" >
                        <h3 className="titleService">Email Marketing</h3>
                        <p className="parrafoServices">Imagina tener un enfoque personalizado y altamente efectivo para tus campañas de email. Con nuestra IA avanzada, optimizamos cada aspecto de tus mensajes, desde la segmentación de audiencia hasta la personalización del contenido.</p>
                        {/* Permitiéndonos entregar mensajes relevantes y persuasivos que generan resultados sorprendentes. */}
                    </div>
                </div>

                <div className="services">
                    <p className="icon-image">
                        <i className="fa-regular fa-clipboard icono"></i>
                    </p>

                    <div className="containerTextServices" >
                        <h3 className="titleService">Estrategias de Contenido</h3>
                        <p className="parrafoServices">Ya sea que busques aumentar el tráfico, generar leads o construir una comunidad comprometida, nuestro enfoque estratégico y creativo te ayudará a alcanzar tus metas.
                            Además, utilizamos herramientas y tecnologías avanzadas para optimizar y distribuir tu contenido de manera efectiva. </p>
                        {/* Desde el SEO hasta el análisis de datos, nos aseguramos de que tu contenido llegue a las personas adecuadas en el momento adecuado. */}
                    </div>
                </div>

            </div >
        </>
    )
}
