import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import serve from 'rollup-plugin-serve'
console.log('env1',process.env.ENV);
export default [
  {
    input: './src/index.js',
    output: {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
    },
    // plugins: [resolve(), commonjs(), typescript()],
  }, 
  {
    input: './src/index.js',
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
    },
    // plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: './src/index.js',
    output: {
      dir: 'dist', // 出口路径
      format: 'umd', // 模块规范
      name:'Util', // 打包后的全局变量名字
      entryFileNames: '[name].umd.js',
    //   sourcemap: true // es6 -》 es5，开启源码调试，可以找到源代码报错的位置
    },
    plugins: [
        // resolve(), 
        // commonjs(), 
        // typescript(),
        serve({
            open:true,
            openPage:'/example/index.html',
            port:3000,
            contentBase: [''],
            verbose: true,
            onListening: function (server) {
                const address = server.address()
                const host = address.address === '::' ? 'localhost' : address.address
                // by using a bound function, we can access options as `this`
                const protocol = this.https ? 'https' : 'http'
                console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
              }
        })
],
  },
];
