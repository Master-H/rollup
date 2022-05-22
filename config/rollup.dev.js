import filesize from 'rollup-plugin-filesize'
import serve from 'rollup-plugin-serve'
import baseConfig from './rollup.base'

export default {
  ...baseConfig,
  plugins:[
    filesize(),
    serve({
      open:true,
      openPage:'/example/index.html',
      port:3000,
      contentBase: [''],
      verbose: true,
      onListening: function (server) {
        const address = server.address()
        const host = address.address === '::' ? 'localhost' : address.address
        const protocol = this.https ? 'https' : 'http'
        console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
        }
    })
  ]
}