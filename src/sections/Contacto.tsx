
export const Contacto = () => {

    // const sendForm = () => {
    //     swal({
    //         title: 'Tu consulta fue enviada',
    //         text: "Gracias por Contactarte",
    //         icon: "success"
    //     })
    // }

    const cols = 50
    const rows = 3


    return (
        <>
            <div className="content" id="contacto" data-aos="fade-right" data-aos-duration="2000">
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <h3 className="titleContactanos">Contacto</h3>
                        <form action="https://formsubmit.co/zuliamarketingdigital@gmail.com" method="POST">
                            <p>
                                <label htmlFor='name' className="labelForm">Nombre</label>
                                <input required className="inputForm" type="text" name="Nombre" id="name" />
                            </p>
                            <p>
                                <label htmlFor="email" className="labelForm">Correo Electrónico</label>
                                <input required className="inputForm" type="email" name="Email" id="email" />
                            </p>
                            <p className="block">
                                <label htmlFor="mensajes" className="labelForm">Mensaje</label>
                                <textarea className="textareaForm" required name="mensajes" id="mensajes" cols={cols} rows={rows}></textarea>
                            </p>
                            <p className="block" >
                                <button type="submit">
                                    Enviar
                                </button>
                                <input type="hidden" name="_next" value="https://zuliamarketingdigital.com/" />
                                <input type="hidden" name="_captcha" value='false' />
                            </p>
                        </form>
                    </div>

                    <ul className="contact-info">
                        <li className="location card"><i className="fa-solid fa-location-dot iconForm"></i>Villa Devoto</li>
                        <li className="location card"><i className="fa-solid fa-phone iconForm"></i>+58 1123901746</li>
                        <li className="location card"><i className="fa-solid fa-envelope iconForm"></i>Zuliamarketingdigital@gmail.com</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
