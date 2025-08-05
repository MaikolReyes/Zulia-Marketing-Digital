import { projectsIT, projectsMKT } from "../resources"

export const Portfolio = () => {

    return (
        <>
            <div className="container-projects-it">

                <h2 className="title__portfolio">Portfolio</h2>
                {
                    projectsIT.map(({ id, name, img, description, deploy }) => (
                        <div key={id} className="container-projects animate__animated animate__backInLeft">
                            <div className="container-images-projects">
                                <img className="imageProject" src={img} alt={name} />
                            </div>
                            <div className="container-text-projects">
                                <h3 className="title-project">{name}</h3>
                                <p className="description-project">{description}</p>
                                <div className="containerButton">
                                    <a className="buttonPortfolio btn" target="_blank" href={deploy}><i className="fa-solid fa-arrow-up-right-from-square p-2"></i>Visitar Sitio Web</a>
                                </div>
                            </div >
                        </div>
                    )
                    )
                }
            </div>

            <h3 className="title__portfolio">Planes de Marketing</h3>
            <div className="container-card-projects-MKT ">
                {
                    projectsMKT.map(({ id, name, img, description, deploy }) => (
                        <div key={id} className="card container-projects-MKT">
                            <a target="_blank" href={deploy}>
                                <img src={img} className="card-img-top" alt="..." />
                            </a>
                            <div className="card-body">
                                <h3 className="card-title">{name}</h3>
                                <p className="card-text-MKT">{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
