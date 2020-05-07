const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'dashboard',
})
.then(() => console.log('Connected to MongoDB!'))
.catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true, },
    username: { type: String, required: true},
    password: { type: String, required: true },
    widgets: { type: Array, required: true },
});

const User = mongoose.model('user', userSchema);

module.exports = {
    User
}
