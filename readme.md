## Steps to run

`./bin/setup`
This will install pm2 and create-react-app


_Please note you must have docker already installed._

`./bin/build`

`./bin/start`

now open your browser and navigate to localhost/trades

You'll see the typical template created by create-react-app.
Take a look at docker/nginx/nginx.conf to see the api routes.
You can easily add more api microservices and add their routes
to the configuration file.


