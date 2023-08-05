import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../img/logo-principal.png'


export const Footer = () => {


    return (
        <>

            <div className='newsLetter'>

                <form action='' className='formNewsLetter'>

                    <div className='containerInput'>
                        <label className='textNewsLetter p-3'>
                            ¡Newsletter para no perderte nuestras ofertas!
                        </label>
                        <input type="email" placeholder='  Ingresa tu email' className='inputForm' />
                        <button className='buttonEnviar btn bg-light'><i className="fa-regular fa-paper-plane"></i></button>
                    </div>
                </form >

            </div >


            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <img src={logo} alt="" className='logo' />
                            </h6>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <ul className='containerSections'>
                                <h6 className='text-uppercase  fw-bold'>secciones</h6>
                                <li><a className='footer-link' href="">Inicio</a></li>
                                <li><a className='footer-link' href="">Servicios</a></li>
                                <li><a className='footer-link' href="">Nosotros</a></li>
                                <li><a className='footer-link' href="">Precios</a></li>
                                <li><a className='footer-link' href="">Contacto</a></li>
                            </ul>
                        </MDBCol>


                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 d-flex flex-column'>
                            <h6 className='text-uppercase fw-bold mb-4'>Redes Sociales</h6>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="facebook-f" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="twitter" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="google" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="instagram" />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <MDBIcon fab icon="linkedin" />
                            </a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <MDBFooter className='text-center text-lg-left containerCopyright'>
                <div className='text-center p-3' style={{ backgroundColor: '' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' Zulia Marketing Digital'}
                </div>
            </MDBFooter>
        </>
    );
}