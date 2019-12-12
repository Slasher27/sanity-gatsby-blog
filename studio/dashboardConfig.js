export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5df1fb7b67ef71fdce299dd4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o9ouwtze',
                  apiId: 'f960e027-2005-43ff-9218-93bab3cfd81e'
                },
                {
                  buildHookId: '5df1fb7ba6bb7e28fffc4554',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yb68owha',
                  apiId: '51cd6d3b-bb47-48be-a9c2-4b8c74ef5240'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Slasher27/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yb68owha.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
