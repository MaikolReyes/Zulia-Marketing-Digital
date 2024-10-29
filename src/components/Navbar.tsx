
import logo from '../assets/img/logo-zulia.webp'
import { navItems } from '../resources'

export const Navbar = () => {

    return (


        <nav className="navbar navbar-expand-lg fixed shadow-xl z-50 bg-white w-full h-12">
            <img src={logo} alt="Logo-de-la-empresa" className='navbar-brand w-40 m-10' />

            <div className="container-fluid h-12">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav gap-4 mr-10">
                        {navItems.map(({ id, title, src }) => (
                            <li key={id} className="nav-item">
                                <a className="nav-link text-customViolet font-navbarFont desktop:text-lg font-semibold hover:text-violet-600 laptop:text-base" href={src}>{title}</a>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </nav>
    )
}
