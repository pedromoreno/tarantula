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
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
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
      'Automatización para una panadería: App web con impresión de tickets en tiempo real. Solución híbrida que integra Supabase, Node.js y impresoras térmicas.',
    link: '/blog/mundopan-solucion-problema-dificil',
    uid: 'blog-mundopan',
  },
  {
    title: 'Asociación Cultural Impresiones, un espacio digital para la cultura',
    description:
      'Creando un espacio digital para la cultura: Blog de la Asociación Cultural Impresiones. Plataforma WordPress para difusión cultural local con diseño minimalista y gestión colaborativa.',
    link: '/blog/asociacion-cultural-impresiones',
    uid: 'blog-impresiones',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ibelick',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
