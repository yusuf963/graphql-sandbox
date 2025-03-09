
import graphqlHTTP from 'express-graphql'

import { laptopSchema } from './laptopQuery.js';
import { allSchema } from './allQuery.js';
import { Router } from 'express';

const router = Router();

router.use('/laptop', graphqlHTTP({
    schema: laptopSchema,
    graphiql: true
}));

router.use('/all', graphqlHTTP({
    schema: allSchema,
    graphiql: true
}));

export default router;
