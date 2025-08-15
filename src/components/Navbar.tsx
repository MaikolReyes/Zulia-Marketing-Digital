import logo from '/img/logo-zulia.webp';

export const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg flex w-full h-16 bg-white justify-between fixed z-50 top-0 shadow-xl">

                <div className="container-fluid">
                    <a className="navbar-brand" href="#inicio"><img src={logo} alt="Logo-empresa" className='max-h-20' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-nav font-myCustomFontSecondary text-lg gap-3 mr-14">
                        <a className='nav-link text-customViolet hover:text-violet-700' href="#inicio">Inicio</a>
                        <a className='nav-link text-customViolet hover:text-violet-700' href="#servicios">Servicios</a>
                        <a className='nav-link text-customViolet hover:text-violet-700' href="#nosotros">Nosotros</a>
                        <a className='nav-link text-customViolet hover:text-violet-700' href="#precios">Precios</a>
                        <a className='nav-link text-customViolet hover:text-violet-700' href="#contacto">Contacto</a>
                    </div>
                </div>
            </nav >
        </>
    )
}
