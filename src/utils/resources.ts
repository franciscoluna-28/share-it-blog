interface Resource {
  title: string
  description: string
  slug: string
  date: Date
  tag: string
}

export const resources: Resource[] = [
  {
    title: 'Java',
    description:
      'Guías, tutoriales, libros y todo recurso para aprender y mejorar con Java',
    slug: 'https://github.com/eliasvelazquezdev/share-it-resources/tree/main/lenguajes/java',
    date: new Date('2025-01-14'),
    tag: 'java',
  },
  {
    title: 'CSS',
    description:
      'Guías, tutoriales, libros y todo recurso para aprender y mejorar en CSS.',
    slug: 'https://github.com/eliasvelazquezdev/share-it-resources/tree/main/lenguajes/css',
    date: new Date('2025-01-15'),
    tag: 'css',
  },
  {
    title: 'JavaScript',
    description:
      'Descubre proyectos, tutoriales y recursos para aprender JavaScript.',
    slug: 'https://github.com/eliasvelazquezdev/share-it-resources/tree/main/lenguajes/javascript',
    date: new Date('2024-12-12'),
    tag: 'js',
  },
  {
    title: 'Python',
    description:
      'Descubre proyectos, tutoriales y recursos para aprender Python.',
    slug: 'https://github.com/eliasvelazquezdev/share-it-resources/tree/main/lenguajes/python',
    date: new Date('2024-12-10'),
    tag: 'py',
  },
]
