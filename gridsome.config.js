module.exports = {
  siteName: 'Jamstack',
  siteDescription: 'js/wp template',

  templates: {
    WordPressCategory: '/category/:slug',
    WordPressPost: '/:slug',
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://jamstack-wp.follow.vision/wordpress/',
        typeName: 'WordPress'
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        resources: './src/assets/styles/app.scss'
      }
    }
  ]
}
