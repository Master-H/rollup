import dev from './config/rollup.dev'
import prod from './config/rollup.prod'

const env = process.env.ENV || 'dev'

console.log('env',env);
const rollup = {
    dev,
    prod
}
export default rollup[env] || 'dev'