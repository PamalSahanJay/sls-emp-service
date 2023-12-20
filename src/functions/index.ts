// export { default as hello } from './hello';
// import hello from './hello'
// import {create, fetch} from './employee'

// const func = {
//     create,
//     fetch,
// }

// export default func

import {hello, greet} from './hello'
import {create} from './employee'

const methods = {
    hello,
    greet,
    create
}

export default methods
