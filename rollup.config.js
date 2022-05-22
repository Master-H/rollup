import dev from './config/rollup.dev'
import prod from './config/rollup.prod'

const env = process.env.ENV || 'dev'

const rollup = {
    dev,
    prod
}
export default rollup[env] || 'dev'