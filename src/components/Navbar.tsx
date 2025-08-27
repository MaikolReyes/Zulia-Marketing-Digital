import logo from '/img/logo-zulia.webp';

export const Navbar = () => {
    const styleLink = 'nav-link text-indigo-800 hover:text-violet-700'

    return (
        <>
            <nav className="navbar navbar-expand-lg flex w-full laptop:h-16 bg-white justify-between fixed z-50 top-0 shadow-xl">

                <div className="container-fluid">

                    <a className="navbar-brand" href="#inicio">
                        <img src={logo} alt="Logo-empresa" className='max-h-10 tablet:max-h-20' />
                    </a>

                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <div className="navbar-nav font-myCustomFontSecondary text-lg gap-3 mr-14">
                            <a className={styleLink} href="#inicio">Inicio</a>
                            <a className={styleLink} href="#servicios">Servicios</a>
                            <a className={styleLink} href="#nosotros">Nosotros</a>
                            <a className={styleLink} href="#precios">Precios</a>
                            <a className={styleLink} href="#contacto">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
