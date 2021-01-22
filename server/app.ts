import * as express from 'express';
import * as bodyparser from 'body-parser';

import database from './db';
import controller from './controller';

class app {

public app:express.Application;
    controller: any;

constructor () {
    this.app = express();
    this.routes();
}

routes(){
    this.app.route('/').get( (req,res) => res.status(200).json({"result": "Hello World"}) );
   this.app.route('/api/crushs').get( (req,res)=> this.controller.select(req, res))
    this.app.route('/api/crushs/:id').get( (req,res)=> this.controller.selectOne(req, res))
   this.app.route('/api/crushs/:id').delete( (req,res)=> this.controller.delete(req, res))
   this.app.route('/api/crushs/:id').put( (req,res)=> this.controller.update(req, res))
    this.app.route('/api/crushs').post( (req,res)=> this.controller.insert(req, res))
}

}
export default new app();