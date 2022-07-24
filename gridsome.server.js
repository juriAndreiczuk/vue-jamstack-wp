const axios = require('axios')

module.exports = function(api) {
  // WP ACF Options
  api.loadSource(async (actions) => {
    const {data} = await axios.get('https://jamstack-wp.follow.vision/wordpress/wp-json/acf/v3/options/options')
    const acfOptions = actions.addCollection('AcfOptions')
    acfOptions.addNode({
      ...data
    })
  })
}
