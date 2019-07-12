const defaultRoutes = ('./default');
const itemRoutes = require('./items');

module.exports = {
    init: function(app){
        app.use('/', defaultRoutes);
        app.use('/items', itemRoutes);
    }
}