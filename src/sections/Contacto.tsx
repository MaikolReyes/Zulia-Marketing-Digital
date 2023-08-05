
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
            <div className="content" id="contacto">
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <h3 className="titleContactanos">Contacto</h3>
                        <form action="#">
                            <p>
                                <label className="labelForm">Nombre</label>
                                <input required type="text" name="nombre-completo" id="name" />
                            </p>
                            <p>
                                <label className="labelForm">Correo Electrónico</label>
                                <input required type="email" name="email" id="email" />
                            </p>
                            <p className="block">
                                <label className="labelForm">Mensaje</label>
                                <textarea required name="mensajes" id="mensajes" cols={cols} rows={rows}></textarea>
                            </p>
                            <p className="block" >
                                <button type="submit">
                                    Enviar
                                </button>
                            </p>
                        </form>
                    </div>

                    <div className="contact-info">
                        <a className="location card"><i className="fa-solid fa-location-dot iconForm"></i>Villa Devoto</a>
                        <a className="location card"><i className="fa-solid fa-phone iconForm"></i>+58 1123901746</a>
                        <a className="location card"><i className="fa-solid fa-envelope iconForm"></i>Zuliamarketingdigital@gmail.com</a>

                    </div>
                </div>
            </div>
        </>
    )
}
