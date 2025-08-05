import AboutPhoto from '/img/imagen-nosotros.webp';
import { itemsAbout } from '../resources';

export const About = () => {

    return (

        <section className='container__about' id='nosotros' data-aos="fade-up" data-aos-duration='1000'>

            <img src={AboutPhoto} alt="Imagen sobre nosotros" loading="lazy" className='imagen__about' />

            <ul className='container__items__about' data-aos="zoom-in-up">
                {itemsAbout.map(({ id, icon, title, description }) => (
                    <li className='list__about' key={id}>
                        <i className={icon} id='icon-about'></i>
                        <h4 className='text__about'>{title}</h4>
                        <p className='paragraph__about'>{description}</p>
                    </li>
                ))}
            </ul>

        </section>
    )
}
