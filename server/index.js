const dotenv = require('dotenv');
const app = require('./src/app');

require('./src/mongoDB');

dotenv.config();

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running in port ${process.env.PORT}`)
})