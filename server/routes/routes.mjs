import Home from '../templates/home.mjs';
import Article from '../templates/article.mjs';
import Fly from '../templates/fly.mjs';
import fetch from 'node-fetch';

const port = process.env.PORT || 8000;
export default (app) => {
    app.get('/', (req, res) => {
        fetch(`http://localhost:${port}/api/home/`)
        .then( response => response.json() )
        .then( json => {
            let home = new Home(json);
            res.send(home.render());
        }).catch( err => console.log(`didn't work`, err));
    });

    app.get('/article/:id', (req,res) => {
        const {id} = req.params;
        fetch(`http://localhost:${port}/api/article/${id}`)
        .then( response => response.json() )
        .then( json => {
            const article = new Article(json);
            res.send(article.render());
        }).catch( err => console.log(`didn't work`, err));
    });

    app.get('/fly/:id', (req, res) => {
        const {id} = req.params;
        console.log('im here')
        fetch(`http://localhost:${port}/api/fly/${id}`)
        .then(response => response.json() )
        .then( json => {
            console.log(json.content)
            const fly = new Fly(json);
            res.send(fly.render());
        }).catch( err => console.log(`didn't work`, err));

    });
};
