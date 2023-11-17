export function rawExplorer() {
  const rawExplorer = {
    uuid: '510bed22-7eb6-4cf8-83c4-3587a8db9d0d',
    name: 'root',
    type: 'folder',
    directory: null,
    to: null,
    children: [
      {
        uuid: 'aad5fbc4-8a2c-4bce-8f1b-71fa26b20843',
        name: 'src',
        type: 'folder',
        directory: null,
        to: null,
        children: [
          {
            uuid: 'aa467d5c-1e45-4f1b-a032-b6cf50991245',
            name: 'pages',
            type: 'folder',
            directory: null,
            to: null,
            children: [
              {
                uuid: 'b6c7797e-7d59-485f-b92b-29c342c1204a',
                name: 'App.jsx',
                type: 'paginated file',
                directory: null,
                to: '/welcome',
                children: [
                  {
                    uuid: 'e12a5106-abc3-4cbd-b195-61b11b09890d',
                    name: 'About',
                    type: 'paginated',
                    directory: null,
                    to: '/welcome/#about'
                  },
                  {
                    uuid: 'bd67bd09-d779-470f-9eb7-9d93fce91d8b',
                    name: 'My Skills',
                    type: 'paginated',
                    directory: null,
                    to: '/welcome/#myskills'
                  },
                  {
                    uuid: 'e7ab7f1d-5151-4076-bd16-750383e323ab',
                    name: 'Projects',
                    type: 'paginated',
                    directory: null,
                    to: '/welcome/#projects'
                  },
                  {
                    uuid: 'e9aa99d7-bb97-4c0f-9bf3-388b9cc547bb',
                    name: 'Contact',
                    type: 'paginated',
                    directory: null,
                    to: '/welcome/#contact'
                  }
                ]
              }
            ]
          },
          {
            uuid: '753cf124-3bdb-4575-a882-c656b1c7bf73',
            name: 'main.jsx',
            type: 'paginated file',
            directory: null,
            to: '/',
            children: [
              {
                uuid: 'a3bc8afe-7475-4456-b66e-7dda01f98849',
                name: 'About',
                type: 'paginated',
                directory: null,
                to: '/#about'
              },
              {
                uuid: 'a1fa52dc-c5d1-4a83-b329-869c20c39e56',
                name: 'My Skills',
                type: 'paginated',
                directory: null,
                to: '/#myskills'
              },
              {
                uuid: '64525499-978c-4d0a-8e40-3a9a90c479e8',
                name: 'Projects',
                type: 'paginated',
                directory: null,
                to: '/#projects'
              },
              {
                uuid: 'fd5157cb-351d-4f09-a048-c3215ad0e412',
                name: 'Contact',
                type: 'paginated',
                directory: null,
                to: '/#contact'
              }
            ]
          }
        ]
      },
      {
        uuid: '7db9792b-a46c-4387-ace0-8fd75d93cee1',
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
