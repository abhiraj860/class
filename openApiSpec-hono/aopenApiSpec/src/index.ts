import { createRoute, OpenAPIHono } from '@hono/zod-openapi'
import { ParamsSchema } from './outputs';
import { UserSchema } from './inputs';

const app = new OpenAPIHono();

const getUserRoute = createRoute({
    method: 'get',
    path: '/user/{id}',
    request: {
        params: ParamsSchema
    },
    responses: {
        200: {
            content: {
                'application/json' : {
                    schema: UserSchema
                }
            },
            description: "Get the users details"
        }
    }
});

app.openapi(getUserRoute, (c)=>{
    const { id }  = c.req.valid('param'); 
    return c.json({
        id,
        age: 20, 
        name: 'Ultra-man'
    });
})

const postUserRoute = createRoute({
    method: 'post',
    path: '/user/{id}',
    request: {
        params: ParamsSchema
    },
    responses: {
        200: {
            content: {
                'application/json' : {
                    schema: UserSchema
                }
            },
            description: "Get the users details"
        }
    }
});

app.openapi(postUserRoute, (c)=>{
    const { id }  = c.req.valid('param'); 
    return c.json({
        id,
        age: 20, 
        name: 'Ultra-man'
    });
})


app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})

export default app
