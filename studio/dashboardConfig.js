export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60389a8407c86b7fd2a34501',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a59fhu3s',
                  apiId: 'a0fac205-11c1-4146-a0f2-d5a896a83d07'
                },
                {
                  buildHookId: '60389a8413761d85743bf2aa',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-x41ymn9b',
                  apiId: 'da981fb1-fc0c-412a-b950-bf5292ff294e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/psielimited/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-x41ymn9b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
