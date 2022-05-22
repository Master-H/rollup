import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import { name } from '../package.json';

export default {
  input:'src/index',
  output: [
	// umd development version with sourcemap
	{
	  file: `dist/${name}.umd.js`,
	  format: 'umd',
	  name,
	  sourcemap: true
	},
	// cjs and esm version
	{
	  file: `dist/${name}.cjs.js`,
	  format: 'cjs',
	},
	// cjs and esm version
	{
	  file: `dist/${name}.esm.js`,
	  format: 'es',
	}
  ],
  plugins:[
	resolve(), 
	commonjs(), 
	replace({
		'process.env.ENV': JSON.stringify(process.env.NODE_ENV || 'development')
	}),
	// babel({
	// 	runtimeHelpers: true,
    //   	exclude: 'node_modules/**' // only transpile our source code
	// })
  ]
}