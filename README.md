# WordPress starter for Gridsome


Add your WordPress URL to the plugin options.

```js
// gridsome.config.js

module.exports = {
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'YOUR_WEBSITE_URL', // required <---------------------------------
        typeName: 'WordPress', // GraphQL schema name 
      }
    }
  ],
  // Setup template routes for any WordPress collection
  templates: {
    ...
    WordPressPost: ':slug'
    ...
  },
}

## FUNCTIONS PHP

function get_my_menu() {
    // Replace your menu name, slug or ID carefully
    return wp_get_nav_menu_items('Main Navigation');
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'wp/v2', 'menu', array(
        'methods' => 'GET',
        'callback' => 'get_my_menu',
    ) );
} );


### Wordpress PLUGINS
1. ACF to REST API
2. Advanced Custom Fields PRO
3. JAMstack Deployments (for build hook URL)