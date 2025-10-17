export const metadata = {
  title: 'Conecta',
  description: 'Conecta con Tarantula Studio - Desarrollo de software, web, diseño gráfico, inteligencia artificial, soporte técnico y fotografía.',
}

export default function Conecta() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Pedro Pablo Moreno Jiménez
      </h1>
      
      <div className="space-y-8">
        {/* Sección de contacto */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contacto</h2>
          <div className="space-y-3">
            <p className="text-neutral-600 dark:text-neutral-400">
              <strong>Email:</strong> ppmoreno@gmail.com
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              <strong>Teléfono:</strong> 639030297
            </p>
          </div>
        </div>

        {/* Sección de servicios */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold mb-2">Desarrollo de Software</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Aplicaciones web y móviles personalizadas
              </p>
            </div>
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold mb-2">Diseño Web</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Diseño moderno y responsive
              </p>
            </div>
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold mb-2">Diseño Gráfico</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Identidad visual y branding
              </p>
            </div>
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold mb-2">Inteligencia Artificial</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Soluciones con IA y machine learning
              </p>
            </div>
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold mb-2">Soporte Técnico</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Mantenimiento y soporte especializado
              </p>
            </div>
            <div className="p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold mb-2">Fotografía</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Fotografía profesional y creativa
              </p>
            </div>
          </div>
        </div>

        {/* Sección de tecnologías */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'JavaScript',
              'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Docker', 'AWS',
              'MongoDB', 'PostgreSQL', 'Figma', 'Adobe Creative Suite'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Sección de formación */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Formación</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
              <h3 className="font-semibold">Técnico Superior en Desarrollo de Aplicaciones Informáticas</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">I.E.S Almunia, Jerez (2002-2004)</p>
            </div>
            <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
              <h3 className="font-semibold">Diplomatura en Magisterio de Educación Primaria</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Ciencias de la Educación, Puerto Real (2006 – En curso)</p>
            </div>
          </div>
        </div>

        {/* Sección de certificaciones */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Certificaciones</h2>
          <div className="space-y-3">
            <div className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold">Introducción a la IA y Prompt Engineering</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Founderz (2025)</p>
            </div>
            <div className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold">Desarrollo con IA</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Big School (2025)</p>
            </div>
            <div className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold">Ciberseguridad Avanzada en Entornos de las Tecnologías de la Operación</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">(2025)</p>
            </div>
            <div className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold">Transformación empresarial con IA</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Microsoft (2025)</p>
            </div>
            <div className="p-3 border border-neutral-200 dark:border-neutral-800 rounded-lg">
              <h3 className="font-semibold">Adaptación de la IA a la organización</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">(2025)</p>
            </div>
          </div>
        </div>

        {/* Sección de experiencia */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Experiencia</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
              <h3 className="font-semibold">Desarrollador, Técnico Informático y fotógrafo | Tarantula Studio</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">2022 – Actualidad</p>
              <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                <li>Desarrollo de software fullstack y plataformas digitales web para clientes en distintos sectores, incluyendo instalación de equipos y dispositivos, logrando un +35% en alcance digital promedio.</li>
                <li>Implementación de inteligencia artificial en el ciclo de desarrollo y producción, optimizando procesos y aumentando la eficiencia, rapidez y seguridad en la entrega de proyectos.</li>
                <li>Diseño de identidad visual y campañas gráficas que mejoraron la visibilidad de marca de clientes en un 40%.</li>
                <li>Producción fotográfica profesional de reportajes familiares y eventos. Proyectos editoriales, publicitarios y corporativos.</li>
                <li>Gestión integral del negocio: captación de clientes, ejecución de proyectos y optimización de procesos.</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
              <h3 className="font-semibold">Inspector | Urbaser - Jerez UTE</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">2010 – Actualidad</p>
              <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                <li>Supervisión de equipos y operaciones en limpieza urbana con enfoque en cumplimiento de KPIs y calidad de servicio.</li>
                <li>Implementación de mejoras que redujeron en un 15% los tiempos de respuesta a incidencias.</li>
                <li>Gestión de comunicación con clientes y ayuntamiento, logrando +20% en satisfacción ciudadana.</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
              <h3 className="font-semibold">Técnico Informático y Desarrollador Web | Empresalia Online</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">2005 – 2007</p>
              <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                <li>Desarrollo de páginas web y aplicaciones internas que incrementaron la visibilidad online de clientes locales en un 30%.</li>
                <li>Diseño gráfico y fotografía comercial para catálogos digitales, potenciando la conversión de ventas online en un 25%.</li>
                <li>Soporte técnico y ventas: asesoramiento que generó un aumento del 40% en ventas de hardware.</li>
              </ul>
            </div>
            
            <div className="border-l-2 border-neutral-200 dark:border-neutral-700 pl-4">
              <h3 className="font-semibold">Técnico Informático y Desarrollador Web | Adarve Systems</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">2001 – 2005</p>
              <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                <li>Responsable de tienda informática, logrando un crecimiento de ingresos del 20% anual mediante estrategias de fidelización.</li>
                <li>Desarrollo de webs corporativas para PYMEs con mejora en posicionamiento SEO.</li>
                <li>Liderazgo de un equipo de técnicos, reduciendo un 20% los tiempos de reparación y entrega de equipos.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">¿Tienes un proyecto en mente?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Estoy disponible para nuevos proyectos y colaboraciones. 
            Soluciones integrales que combinan tecnología y creatividad.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="mailto:ppmoreno@gmail.com"
              className="px-6 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-lg text-center font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              Enviar Email
            </a>
            <a 
              href="tel:639030297"
              className="px-6 py-2 border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 rounded-lg text-center font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Llamar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
