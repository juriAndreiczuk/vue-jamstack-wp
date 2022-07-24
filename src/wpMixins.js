export default {
  methods: {
    postDate(date) {
      const clearDate = date.slice(0, date.indexOf('T'))
      return clearDate.split('-').reverse().join('.')
    },
    getWpImageSize(imgObject, sizeName) {
      if (!imgObject.mediaDetails.sizes[sizeName]) {
        return imgObject.guid
      }
      return imgObject.mediaDetails.sizes[sizeName].sourceUrl
    }
  }
}
