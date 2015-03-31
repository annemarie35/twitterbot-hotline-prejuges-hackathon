# HOTLINE PREJUGES
Ce bot twitter a été développé lors du hackaton **Hack la misère**.

## Hackathon "Hack La Misère"
À l’invitation de **Spintank**, **Simplon.co** et **ATD Quart Monde**, une quarantaine de blogueurs, graphistes, développeurs, designers, vidéastes… venus de toute la France se sont retrouvés samedi 7 mars 2015 dans les locaux de Simplon.co à Montreuil afin de mettre en commun leur énergie et leur créativité pour « *En finir avec les idées fausses sur les pauvres et la pauvreté* ».

Projets, vidéos et compte-rendu : [https://www.atd-quartmonde.fr/succes-de-la-journee-hack-la-misere-2015/](https://www.atd-quartmonde.fr/succes-de-la-journee-hack-la-misere-2015/)

## Le projet

Techniquement le projet se compose de deux parties :

- le twitter bot pour lequel nous avons utilisé l'[api twitter](https://dev.twitter.com/rest/public)
- un publicateur de contenu en php, sur lequel on été ajouté des articles issus du livre cité ci-dessus

Le principe étant de soumettre un préjugés à l'application un préjugés, par exemple, "*On peut gagner plus au RSA qu'avec le smic*" et de recevoir une réponse argumentée pour démonter l'idée reçue tout en renvoyant vers du contenu sourcé et chiffré, comme [cet article](https://www.atd-quartmonde.fr/n19-on-peut-gagner-plus-avec-le-rsa-quavec-le-smic/) par exemple.

Merci à **Colas Courjal** & **Victor Blavignac** (développement de l'appli php) avec qui j'ai travaillé sur le projet.

## To be continued

deploy an a new heroku account (hacklamisere.test on gmail) --> il a été crée (voir compte gmail) / mdp & login idem que pour l'accès à gmail
source : https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app


--> les token sont disponibles dans le fichier .env ou  en se connectant sur https://apps.twitter.com/ via le compte twitter @hotlineprejuges
--> ils ont été configurés pour être directement utilisable sur heroku


# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application support the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)


