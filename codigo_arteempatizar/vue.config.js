/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/

// vue.config.js file to be place in the root of your repository
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
  '/arteempatizar/' : '/'             //Utilizo el nombre de LA CARPETA DE EJEMPLO. TU USA EL TUYO
}
  