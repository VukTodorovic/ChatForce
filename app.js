const express = require('express');
const app = express();

const authRouter = require('./routes/auth-routes');
const messageRouter = require('./routes/message-router');
const userRouter = require('./routes/user-router');


app.use('/auth', authRouter);
app.use('/message', messageRouter);
app.use('/user', userRouter);
app.use('/', (req, res) => {
    res.send('<h1>Hello</h1>');
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
})