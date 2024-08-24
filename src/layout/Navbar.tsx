import logo from '../assets/img/logo-zulia.webp'

export const Navbar = () => {



    return (
        <nav className="navbar navbar-expand-lg flex fixed shadow-xl z-10 bg-white w-full">
            
            <div className="container-fluid xl:h-12 lg:h-12">

                <img src={logo} alt="Logo de la empresa Zulia" className='w-40 m-10' />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className=" navbar-collapse flex justify-end" id="navbarNav">

                    <ul className="navbar-nav gap-6 m-5">
                        <li className="nav-item">
                            <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#servicios">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#precios">Precios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-customViolet font-navbarFont 2xl:text-lg font-semibold hover:text-violet-600 xl:text-base" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
