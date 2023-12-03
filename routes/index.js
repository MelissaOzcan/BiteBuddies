import landingRoute from './landingPage.js';
import suggestionsRoute from './suggestions.js';

const constructorMethod = (app) => {
    app.use('/', landingRoute);
    app.use('/suggestions', suggestionsRoute);
    app.use('*', (req, res) => {
        //res.json("Route not found.");
        res.render("layouts/suggestions");
    });
}

export default constructorMethod;