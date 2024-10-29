import { Footer, Form, Navbar } from "./components"
import { Hero, About, ServicesDescription, ServicesPricing } from "./layout"

export const App = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <ServicesDescription />
            <About />
            <ServicesPricing />
            <Form />
            <Footer />
        </>
    )
}
