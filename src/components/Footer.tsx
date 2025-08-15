import logo from '/img/logo-zulia.webp';

export const Footer = () => {

    return (
        <>

            <form className='formNewsLetter flex justify-center items-center p-3 w-full text-white bg-customViolet gap-3' action="https://formsubmit.co/zuliamarketingdigital@gmail.com" method="POST" data-aos="fade-up">
                <p className='textNewsLetter text-base font-navbarFont font-bold'>¡Newsletter para no perderte nuestras ofertas!</p>
                <div className='flex items-center gap-1'>

                    <input className='rounded text-center text-black h-9 font-myCustomFontSecondary' required type="email" placeholder='Ingresar Email' name='Email' id='email-newsLetter' />

                    <button aria-label="News letter" type='submit' className='btn bg-white h-9 hover:text-customViolet'><i className="fa-regular fa-paper-plane"></i></button>
                    <input type="hidden" name="_next" value="https://zuliamarketingdigital.com/" />
                    <input type="hidden" name="_captcha" value='false' />
                </div>
            </form >

            <div className='flex flex-col items-center justify-around' data-aos="fade-up">

                <img src={logo} alt="Logo de la empresa Zulia" className='w-1/12' />

                <div className='flex items-center gap-11 mb-5'>
                    <a href='https://www.facebook.com/profile.php?id=61550461065145' target='_blank' aria-label='Ingresar a facebook' className='text-3xl text-gray-700 hover:text-customViolet'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href='https://www.instagram.com/zuliamarketingdigital/' target='_blank' aria-label='Ingresar a Instagram' className='text-3xl text-gray-700 hover:text-customViolet'>
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href='https://www.linkedin.com/company/zulia-marketing-digital/?viewAsMember=true' target='_blank' aria-label='Ingresar a Linkedin' className='text-3xl text-gray-700 hover:text-customViolet'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>

            </div >

            <div className='text-center p-3' >
                <p className='textCopyright text-gray-900 text-base font-myCustomFontSecondary'>© 2024 Copyright Zulia Marketing Digital</p>
            </div>

        </>
    );
}