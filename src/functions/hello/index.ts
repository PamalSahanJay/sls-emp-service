import schema from './schema';
import { handlerPath } from '@libs/handler-resolver';

const hello = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'hello',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};

const greet = {
  handler: `${handlerPath(__dirname)}/greeting.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'greet',
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};

export  {
  hello,
  greet
}
