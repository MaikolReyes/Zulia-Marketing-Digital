import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import logo from '../img/logo-principal.png'


export const Footer = () => {


    return (
        <>

            <div className='newsLetter'>
                <form action='' >
                    <MDBRow className='d-flex flex-nowrap align-items-center justify-content-center'>
                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <p className='pt-2'>
                                <strong>Suscribete para no perderte de nuestras ofertas</strong>
                            </p>
                        </MDBCol>

                        <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                            <MDBInput type='text' id='form5Example2' placeholder='Ingresa tu Email' />
                        </MDBCol>

                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <MDBBtn>Subscribe</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
                {/* <form action="" className='formNewsLetter'>
                    <label >Suscribete para no perderte de nuestras ofertas</label>
                    <input className='rounded' type="text" placeholder='Ingresa tu Email' />
                    <button className='btn bg-primary'>Suscribirse</button>
                </form> */}
            </div>


            {/* <MDBContainer className='newsLetter'>
                <form action='' >
                    <MDBRow className='d-flex justify-content-center'>
                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <p className='pt-2'>
                                <strong>Suscribete para no perderte de nuestras ofertas</strong>
                            </p>
                        </MDBCol>

                        <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                            <MDBInput type='text' id='form5Example2' placeholder='Ingresa tu Email' />
                        </MDBCol>

                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                            <MDBBtn>Subscribe</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </form>
            </MDBContainer> */}

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center p-4 border-bottom'>


                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <img src={logo} alt="" className='logo' />
                                </h6>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Paginas</h6>
                                <p>
                                    <a href='inicio' className='text-reset'>
                                        Inicio
                                    </a>
                                </p>
                                <p>
                                    <a href='servicios' className='text-reset'>
                                        Servicios
                                    </a>
                                </p>
                                <p>
                                    <a href='nosotros' className='text-reset'>
                                        Nosotros
                                    </a>
                                </p>
                                <p>
                                    <a href='precios' className='text-reset'>
                                        Precios
                                    </a>
                                </p>
                                <p>
                                    <a href='contacto' className='text-reset'>
                                        Contacto
                                    </a>
                                </p>
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
                                <a href='' className='me-4 text-reset'>
                                    <MDBIcon fab icon="github" />
                                </a>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <MDBFooter bgColor='light' className='text-center text-lg-left'>

                    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        &copy; {new Date().getFullYear()} Copyright:{' Zulia Marketing Digital'}
                    </div>
                </MDBFooter>
            </MDBFooter>
        </>
    );
}