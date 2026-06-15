import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/', (request, response) => {
    return response.json({
        message: 'Hello from the Server'
    });
});

app.get("/home", (request, response)=>{
    return response.json({
        message: "You hve entered the home page now"
    })
});

app.listen(PORT, () => {
    console.log('App is listening at PORT: ', PORT);
});