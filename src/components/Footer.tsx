import logo from '/img/logo-zulia.webp';

export const Footer = () => {

    return (
        <>

            <form className='formNewsLetter' action="https://formsubmit.co/zuliamarketingdigital@gmail.com" method="POST" data-aos="fade-up">
                <p className='textNewsLetter'>¡Newsletter para no perderte nuestras ofertas!</p>
                <div className='containerInput'>
                    <input className='inputFormNewsLetter text-center' required type="email" placeholder='Ingresar Email' name='Email' id='email-newsLetter' />
                    <button aria-label="News letter" type='submit' className='buttonEnviar btn bg-light'><i className="fa-regular fa-paper-plane"></i></button>
                    <input type="hidden" name="_next" value="https://zuliamarketingdigital.com/" />
                    <input type="hidden" name="_captcha" value='false' />
                </div>
            </form >

            <div className='containerFooter' data-aos="fade-up">

                <img src={logo} alt="Logo de la empresa Zulia" className='logoFooter' />


                {/* <div className="footer-link">
                    <a href="#servicios" className="footer-item">Servicios</a>
                    <a href="#nosotros" className="footer-item">Nosotros</a>
                    <a href="#precios" className="footer-item">Precios</a>
                    <a href="#contacto" className="footer-item">Contacto</a>
                </div> */}

                <div className='containerIconRedes'>
                    <a href='https://www.facebook.com/profile.php?id=61550461065145' target='_blank' aria-label='Ingresar a facebook' className='icon-redes'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href='https://www.instagram.com/zuliamarketingdigital/' target='_blank' aria-label='Ingresar a Instagram' className='icon-redes'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href='https://www.linkedin.com/company/zulia-marketing-digital/?viewAsMember=true' target='_blank' aria-label='Ingresar a Linkedin' className='icon-redes'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>

            </div >

            <div className='containerCopyright' >
                <p className='textCopyright'>© 2024 Copyright Zulia Marketing Digital</p>
            </div>

        </>
    );
}