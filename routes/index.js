import landingRoute from './landingPage.js';
import suggestionsRoute from './suggestions.js';

const constructorMethod = (app) => {
    app.use('/', landingRoute);
    app.use('/suggestions', suggestionsRoute);
    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
}

export default constructorMethod;