
export const Planes = () => {
    return (
        <>
            <div data-aos='fade-up'>
                <h2 className="titlePlanes" id="precios">Nuestros Servicios:</h2>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide mt-5">

                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <h3 className="textDesarrollo">Desarrollo Web</h3>

                        <div className="containerPlanes">

                            <div className="card planes"
                                data-aos="zoom-in-up">
                                <div className="iconPlanes">
                                    <i className="fa-solid fa-bullhorn"></i>
                                </div>
                                <p className="card-title">Landing Page</p>
                                <a href="Landing-Page.pdf" target="_blank" className="btn buttonPlanes">Precios</a>

                            </div>

                            <div className="card planes" data-aos="zoom-in-up">
                                <div className="iconPlanes"><i className="fa-solid fa-user-tie"></i></div>
                                <p className="card-title">Web Corporativa</p>
                                <a href="Web-Corporativa.pdf" target="_blank" className="btn buttonPlanes">Precios</a>

                            </div>

                            <div className="card planes" data-aos="zoom-in-up">
                                <div className="iconPlanes"><i className="fa-solid fa-store"></i></div>
                                <p className="card-title">Ecommerce</p>
                                <a href="Ecommerce.pdf" target="_blank" className="btn buttonPlanes">Precios</a>
                            </div>
                        </div>

                        <h3 className="textPublicidad">Publicidad en Redes</h3>

                        <div className="containerPlanes">
                            <div className="card planes"
                                data-aos="zoom-in-up">
                                <div className="iconPlanes"><i className="fa-brands fa-meta"></i></div>
                                <p className="card-title">Publicidad en Meta Ads</p>
                                <a href='Publicidad-Meta-Ads.pdf' target="_blank" className="btn buttonPlanes">Precios</a>

                            </div>

                            <div className="card planes"
                                data-aos="zoom-in-up">
                                <div className="iconPlanes">
                                    <i className="fa-brands fa-google-plus-g"></i>
                                </div>
                                <p className="card-title">Publicidad en Google Ads</p>
                                <a href="Publicidad-Google-Ads.pdf" target="_blank" className="btn buttonPlanes">Precios</a>
                            </div>

                            <div className="card planes"
                                data-aos="zoom-in-up">
                                <div className="iconPlanes">
                                    <i className="fa-solid fa-square-envelope"></i>
                                </div>
                                <p className="card-title">Email Marketing</p>
                                <a href="Email-Marketing.pdf" target="_blank" className="btn buttonPlanes">Precios</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
