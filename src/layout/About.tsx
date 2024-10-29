import AboutPhoto from '../assets/img/imagen-nosotros.webp';
import { itemsAbout } from '../resources';

export const About = () => {
    return (
        <div className=' grid grid-cols-2 mt-52 justify-items-center' id='nosotros'>

            <div className='flex justify-center m-auto pl-52' data-aos="fade-up" data-aos-duration='1000'>
                <img src={AboutPhoto} alt="Imagen sobre nosotros" loading="lazy" className='imagenAbout w-full' />
            </div>

            <div className='flex flex-col gap-8 w-2/5'>
                {itemsAbout.map(({ id, icon, title, description }) => (
                    <div className='flex flex-col text-center items-center justify-center xl:w-96' data-aos="zoom-in-up" key={id}>
                        <div>
                            <i className={icon}></i>
                        </div>
                        <h4 className='textAbout font-myCustomFont text-customViolet text-3xl font-bold'>{title}</h4>
                        <p className='parrafoAbout font-myCustomFontSecondary text-base'>{description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
