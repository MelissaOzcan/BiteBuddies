import route from './route.js';

const constructorMethod = (app) => {
    app.use('/', route);
    app.use('*', (req, res) => {
        res.sendStatus(404).json({ error: 'Route Not found' });
    });
}

export default constructorMethod;