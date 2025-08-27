import hero from '/img/hero-principal.webp';

export const Hero = () => {

    return (
        <>
            <div className='grid grid-cols-1 tablet:grid-cols-2 align-items-stretch mt-14' id='inicio'>
                <div className='hero__content flex flex-col items-center w-full laptop:w-3/5 m-auto absolute gap-3 animate__animated animate__backInLeft'>

                    <h2 className='text-customViolet font-myCustomFont text-sm uppercase font-bold text-center tablet:text-3xl'>Impulsamos tu negocio al siguiente nivel🚀</h2>

                    <p className='hero__description text-sm font-myCustomFontSecondary text-gray-800 text-center tablet:text-base'>Te ayudamos a incrementar la presencia de tu negocio o empresa en internet con nuestros servicios de Publicidad en Redes, Email Marketing y Desarrollo Web.</p>

                    <a id='text' className='btn bg-indigo-800 text-white text-lg font-myCustomFontSecondary hover:bg-violet-500 hero__button animate__animated animate__backInLeft' href='https://wa.me/message/X65MZULZJUFYL1' target='_blank'>Contactarse</a>

                </div>
                <img src={hero} alt="Presentacion principal" className='w-full' loading='eager' />
            </div>
        </>
    )
}
