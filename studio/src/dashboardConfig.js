export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e7d43260caa3990823669e5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iwy2pzcd',
                  apiId: 'f67fc69e-4c01-4294-b9c8-9285a259d57c'
                },
                {
                  buildHookId: '5e7d432626408e0cb179e5d7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tpf4yk65',
                  apiId: 'd157ac05-5ce9-462a-bddf-c3570395f9cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TheH21/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tpf4yk65.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
