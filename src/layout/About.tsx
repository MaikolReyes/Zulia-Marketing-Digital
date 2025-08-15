import AboutPhoto from '/img/imagen-nosotros.webp';
import { itemsAbout } from '../resources';

export const About = () => {

    return (
        <>
            <h3 className="font-myCustomFont font-semibold text-5xl flex justify-center text-customViolet mt-36 mb-10">Sobre Nosotros</h3>

            <div className='grid grid-cols-2 justify-center gap-4' id='nosotros' data-aos="fade-up" data-aos-duration='1000'>

                <div className='flex justify-end'>
                    <img src={AboutPhoto} alt="Imagen sobre nosotros" loading="lazy" className='' />
                </div>

                <div className='flex flex-col items-center text-center w-2/4'>
                    {itemsAbout.map(({ id, icon, title, description }) => (
                        <div key={id}>
                            <i className={`text-4xl m-7 text-customViolet ${icon}`} ></i>
                            <h4 className='font-myCustomFont text-customViolet text-3xl font-bold'>{title}</h4>
                            <p className='paragraph__about font-myCustomFontSecondary text-lg'>{description}</p>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}
