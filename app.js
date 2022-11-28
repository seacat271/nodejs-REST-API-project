const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const {downloadPath} = require('./helpers/pathHelper')
const authRouter = require('./routes/api/auth');
const contactsRouter = require('./routes/api/contacts');
const { errorHandler, errorRoute } = require('./helpers/APIHelpers');

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)
app.use('/api/users', authRouter)
app.use('/api/avatars', express.static(downloadPath));
app.use(errorRoute);

app.use(errorHandler);

module.exports = app
