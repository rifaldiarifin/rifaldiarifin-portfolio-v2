export function rawExplorer() {
  const rawExplorer = {
    name: 'root',
    type: 'folder',
    directory: null,
    to: null,
    children: [
      {
        name: 'src',
        type: 'folder',
        directory: null,
        to: null,
        children: [
          {
            name: 'pages',
            type: 'folder',
            directory: null,
            to: null,
            children: [
              {
                name: 'welcome.jsx',
                type: 'paginated file',
                directory: null,
                to: '/welcome',
                children: [
                  {
                    name: 'About',
                    type: 'paginated',
                    directory: null,
                    to: '/welcome/#about'
                  },
                  {
                    name: 'My Skills',
                    type: 'paginated',
                    directory: null,
                    to: '/welcome/#myskills'
                  },
                  {
                    name: 'Projects',
                    type: 'paginated',
                    directory: null,
                    to: '/welcome/#projects'
                  },
                  {
                    name: 'Contact',
                    type: 'paginated',
                    directory: null,
                    to: '/welcome/#contact'
                  }
                ]
              },
              {
                name: 'blog.jsx',
                type: 'file',
                directory: null,
                to: '/blog',
                children: null
              }
            ]
          },
          {
            name: 'main.jsx',
            type: 'file',
            directory: null,
            to: '/',
            children: null
          }
        ]
      },
      {
        name: 'README.md',
        type: 'file',
        directory: null,
        to: '/readme',
        children: null
      }
    ]
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(rawExplorer)
    }, 1000)
  })
}
