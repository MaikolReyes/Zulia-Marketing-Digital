interface itemAbout {
    id: number,
    icon: string,
    title: string,
    description: string
}


export const itemsAbout: itemAbout[] = [
    {
        id: 1,
        icon: 'fa-solid fa-chart-line text-customViolet text-6xl mb-3',
        title: 'Nuestra Mision',
        description: 'Nuestra misión es ayudar a las empresas a desbloquear todo su potencial en línea. Creemos en el poder de la IA para automatizar y optimizar procesos, brindando a nuestros clientes una ventaja competitiva sin precedentes.',
    },
    {
        id: 2,
        icon: 'fa-solid fa-shop text-customViolet text-6xl mb-3',
        title: 'Nuestra Vision',
        description: 'Nuestro enfoque único y visionario combina la creatividad humana con la precisión y eficiencia de la IA. Trabajamos en estrecha colaboración contigo para comprender tus objetivos y necesidades comerciales.',
    },
    {
        id: 3,
        icon: 'fa-solid fa-lightbulb text-customViolet text-6xl mb-3',
        title: 'Nuestro Diferencial',
        description: 'Nuestro diferencial radica en la combinación de creatividad humana, experiencia en IA y enfoque centrado en el cliente. Estamos listos para llevar tu estrategia de marketing digital al siguiente nivel y ayudarte a destacar en el mercado.',
    },
]