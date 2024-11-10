import { Hero, About, ServicesDescription, ServicesPricing, Portfolio } from "./layout"
import { Footer, Form, Navbar } from "./components"

export const App = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <ServicesDescription />
            <ServicesPricing />
            <Portfolio />
            <About />
            <Form />
            <Footer />
        </>
    )
}
