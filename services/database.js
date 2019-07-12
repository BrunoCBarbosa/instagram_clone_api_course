const {MongoClient} = require ('mongodb');

const dbName = 'instagram';
const mongoURL = `mongodb://localhost:27017/${dbName}`;
const connectionOptions = {useNewUrlParser: true}

module.exports = {
    connect() {
        return new Promise(function(resolve, reject){
            MongoClient.connect(mongoURL,connectionOptions, function(err, connection){
                if (err !== null){
                    return reject(err);
                }

                const database = connection.db(databaseName);
                return resolve(database);
            });
        });
    }
}