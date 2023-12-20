import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

const create = {
  handler: `${handlerPath(__dirname)}/create.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'employee',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};

export {
  create
}
// const fetch =  {
//   handler: `${handlerPath(__dirname)}/fetch.main`,
//   events: [
//     {
//       http: {
//         method: 'get',
//         path: 'employee/{empId}',
//       },
//     },
//   ],
// };



//  export {
//   create,
//   fetch
// }

// export default {
//   create
// }