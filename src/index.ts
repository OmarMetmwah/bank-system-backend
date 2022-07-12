import express, { Request, Response, Application } from 'express';
import routes from './routes';
import config from './config';
import cors from 'cors';
const app: Application = express();
const port = config.port || 3000;


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });
  app.use(express.json());
app.use('/', routes);

const corsOption = {
	optionsSuccessStatus: 200, // for some lagacy browsers
	origin:true,
	credentials:true,
	methods:'POST,GET,PUT,OPTIONS,DELETE'
};

app.use(cors(corsOption));

//Error handling for strange request from unkown endpoit
app.use((_req: Request, res: Response) => {
	res.status(404).json({
		message: 'Your are using wrong API. Please, read the API documentaion.',
	});
});

app.listen(port, function () {
	console.log(`starting app on: localhost:${port}`);
});

export default app;
