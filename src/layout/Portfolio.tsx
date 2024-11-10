import { projects } from "../resources"

export const Portfolio = () => {

    return (
        <>
            <h2 className="title__portfolio">Portfolio</h2>
            {
                projects.map(({ name, img, description, github, deploy }) => (
                    <div className="container-projects animate__animated animate__backInLeft">
                        <div className="container-images-projects">
                            <img className="imageProject" src={img} alt={name} />
                        </div>
                        <div className="container-text-projects">
                            <h3 className="title-project">{name}</h3>
                            <p className="description-project">{description}</p>
                            <div className="containerButtons">
                                <a className="buttonPortfolio btn" target="_blank" href={deploy}><i className="fa-solid fa-arrow-up-right-from-square p-2"></i>Deploy</a>
                                <a className="buttonPortfolio btn" target="_blank" href={github} ><i className=" fa-brands fa-github p-2"></i>Github</a>
                            </div>
                        </div >
                    </div>
                ))
            }
        </>
    )
}
