
import logo from '../assets/img/logo-zulia.webp'
import { navItems } from '../resources'

export const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-lg">

            <img src={logo} alt="Logo-empresa" className='navbar-brand w-40 m-10' />

            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map(({ id, title, src }) => (
                            <li key={id} className="nav-item">
                                <a className="nav-link text-customViolet font-navbarFont font-semibold hover:text-violet-600" href={src}>{title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </nav>
    )
}
