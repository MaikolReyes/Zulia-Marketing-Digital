
export const Servicios = () => {
    return (
        <>
            <div data-aos="fade-up">
                <h2 className='titleServices' id="servicios" >¿Qué Ofrecemos?</h2>
            </div>

            <div className="containerServices" data-aos="fade-up" data-aos-duration="500">

                <div className="services card">

                    <p >
                        <i className="fa-solid fa-code icono"></i>
                    </p>
                    <div className="containerTextServices" >
                        <h3 className="titleService">Desarrollo Web</h3>
                        <p className="parrafoServices">Con nuestro equipo de profesionales especializados en el área del <span className="spanText">Desarrollo Web</span>,
                            creamos sitios web atractivos y funcionales que te ayudaran a facilitar la interacción con tus clientes y potenciales clientes.
                            Ya sea que necesites una <span className="spanText">Landing Page,</span> <span className="spanText">Sitio web corporativo</span> o un <span className="spanText">tienda en línea, </span>
                            contamos con las habilidades y la experiencia para superar tus expectativas.</p>
                    </div>
                </div>

                <div className="services card">
                    <p>
                        <i className="icon fa-solid fa-globe icono"></i>
                    </p>

                    <div className="containerTextServices" >
                        <h3 className="titleService">Publicidad en Redes</h3>
                        <p className="parrafoServices">Con nuestros servicios de <span className="spanText">Publicidad en Redes</span>,
                            no solo creamos anuncios, creamos oportunidades.
                            Te ayudamos a maximizar tu alcance y aumentar tus conversiones con una estrategia publicitaria personalizada y diseñada para destacar
                            en plataformas como <span className="spanText">Meta Ads,</span> y <span className="spanText">Google Ads.</span> No esperes mas y convierte tu marca en un nombre reconocible y confiable.
                        </p>
                    </div>
                </div>

                <div className="services card">
                    <p>
                        <i className="fa-regular fa-envelope icono"></i>
                    </p>

                    <div className="containerTextServices" >
                        <h3 className="titleService">Email Marketing</h3>
                        <p className="parrafoServices">Con nuestros servicio de <span className="spanText">Email Marketing</span> podremos ayudarte a aprovechar uno de los metodos mas antiguos pero mas efectivos para alcanzar una <span className="spanText">mayor conversion de tus ventas.</span> Convierte correos electronicos en oportunidades con nuestras estrategias personalizadas que te ayudaran a llegar a muchas mas personas de manera efectiva.</p>
                    </div>
                </div>


            </div >
        </>
    )
}
