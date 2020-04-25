dbPassword = 'mongodb://ali:developers22@cluster0-shard-00-00-y7l6l.mongodb.net:27017,cluster0-shard-00-01-y7l6l.mongodb.net:27017,cluster0-shard-00-02-y7l6l.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};
