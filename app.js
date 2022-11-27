const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const authRouter = require('./routes/api/auth');
const contactsRouter = require('./routes/api/contacts');
const filesRouter = require('./routes/api/files')
const { errorHandler, errorRoute } = require('./helpers/APIHelpers');

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/contacts', contactsRouter)
app.use('/api/users', authRouter)
app.use('/api/avatars', filesRouter)
app.use(errorRoute);

app.use(errorHandler);

module.exports = app
