const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var cors = require('cors')
const { contact } = require('./router');
const methodOverride = require('method-override');

app.use(cors())
app.listen(port, () => console.log(`listening on port ${port}!`))
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.json('Hello World!'))
app.use('/contact', contact);
