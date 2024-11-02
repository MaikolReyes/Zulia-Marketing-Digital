
export const Form = () => {

    // const sendForm = () => {
    //     swal({
    //         title: 'Tu consulta fue enviada',
    //         text: "Gracias por Contactarte",
    //         icon: "success"
    //     })
    // }

    return (
        <div className="content__form" id="contacto" data-aos="fade-right" data-aos-duration="2000" >
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
                            <textarea className="textareaForm" required name="mensajes" id="mensajes" cols={50} rows={3}></textarea>
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
            </div>
        </div>
    )
}
