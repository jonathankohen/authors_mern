const express = require('express'),
    cors = require('cors'),
    app = express(),
    port = 8000;

require('./config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/author.routes')(app);

app.listen(port, () => console.log(`Listening to port ${port}...`));
