import { projectsIT, projectsMKT } from "../resources"

export const Portfolio = () => {

    return (
        <>
            <div className="flex flex-col justify-center gap-5 mt-10 mb-10 items-center">

                <h2 className="font-myCustomFont font-semibold text-5xl flex justify-center text-customViolet mt-10">Portfolio</h2>
                {
                    projectsIT.map(({ id, name, img, description, deploy }) => (
                        <div key={id} data-aos="zoom-in-up" className="flex justify-center text-white mb-10 w-2/4 ">
                            <div className="flex justify-center items-center bg-customViolet w-96 h-72 rounded-lg">
                                <img className="w-4/5" src={img} alt={name} />
                            </div>

                            <div className="flex flex-col justify-center items-center rounded-lg w-3/4 h-72 bg-indigo-600 text-center gap-2">
                                <h3 className="text-2xl font-myCustomFont font-bold rounded-lg">{name}</h3>
                                <p className="text-base font-myCustomFontSecondary w-8/12">{description}</p>

                                <div className="flex justify-center gap-5 mt-3">
                                    <a className="buttonPortfolio btn text-base bg-white w-full font-myCustomFontSecondary font-bold hover:text-customViolet" target="_blank" href={deploy}><i className="fa-solid fa-arrow-up-right-from-square p-2"></i>Visitar Sitio Web</a>
                                </div>
                            </div >


                        </div>
                    )
                    )
                }
            </div>

            <h3 className="font-myCustomFont font-semibold text-5xl flex justify-center text-customViolet mt-10 mb-16">Planes de Marketing</h3>
            <div className="flex justify-center gap-10 m-4">
                {
                    projectsMKT.map(({ id, name, img, description, deploy }) => (
                        <div data-aos="zoom-in-up" key={id} className="card bg-customViolet w-96 text-white text-center">
                            <a target="_blank" href={deploy}>
                                <img src={img} className="card-img-top" alt="project marketing" />
                            </a>
                            <div className="card-body">
                                <h3 className="card-title text-2xl">{name}</h3>
                                <p className="text-base">{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
