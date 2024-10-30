import { Hero, About, ServicesDescription, ServicesPricing } from "./layout"
import { Footer, Form, Navbar } from "./components"

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
