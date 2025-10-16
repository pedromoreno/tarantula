type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'WEA Scout Pro',
    description:
      'Aplicación integral de gestión y análisis futbolístico, diseñada para clubes, entrenadores y ojeadores. Combina herramientas de scouting, control de rendimiento, estadísticas avanzadas e inteligencia artificial en una experiencia multidispositivo, intuitiva y visual. Su objetivo es ofrecer una visión completa del juego, desde la detección de talento hasta el seguimiento táctico y físico de los jugadores, centralizando toda la información deportiva en un solo entorno digital.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Futplay 360',
    description: 'Plataforma multidispositivo de formación online especializada en fútbol, que reúne cursos profesionales de scouting, dirección deportiva y análisis de juego impartidos por referentes del sector. Combina una experiencia de aprendizaje moderna con contenidos multimedia, evaluaciones interactivas e inteligencia artificial aplicada al estudio, ofreciendo una forma práctica y accesible de formarse en el ámbito futbolístico desde cualquier lugar.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Tarantula Studio',
    title: 'CEO, Desarrollador, Técnico Informático y fotógrafo',
    start: '2020',
    end: 'Presente',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Empresalia Online',
    title: 'Técnico Informático y Desarrollador Web',
    start: '2005',
    end: '2007',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Adarve Systems',
    title: 'Técnico Informático y Desarrollador Web',
    start: '2001',
    end: '2005',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Mundopan, impresión de tickets en tiempo real',
    description:
      'Automatización para una panadería: App web con impresión de tickets en tiempo real',
    link: '/blog/mundopan-solucion-problema-dificil',
    uid: 'blog-mundopan',
  },
  {
    title: 'Asociación Cultural Impresiones, un espacio digital para la cultura',
    description:
      'Creando un espacio digital para la cultura: Blog de la Asociación Cultural Impresiones',
    link: '/blog/asociacion-cultural-impresiones',
    uid: 'blog-impresiones',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Fotografías',
    link: 'https://pedromoreno.pixieset.com',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/pedromoreno',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ppmoreno1/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/pedromoreno',
  },
]

export const EMAIL = 'ppmoreno@gmail.com'
