process.env.VUE_ENV = 'server'

module.exports = function(params) {
  return new Promise(function(resolve, reject) {
    resolve({
      html: 'Your message: ' + params.data.message
    })
  })
}
