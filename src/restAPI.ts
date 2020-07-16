import express from "express";
import bodyParser from "body-parser";
import { Videos } from "./database";
import { promises as fileSystem } from "fs";
import dotenv from "dotenv";
import path from "path";

class RestApi {
    public express: express.Application;
    private docuDB: Videos;
    constructor() {
        dotenv.config();
        this.express = express();
        this.middleware();
        this.routes();
        this.docuDB = new Videos();


    }
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    private routes(): void {
        this.express.get("/templates",(req,res)=>{
            let template;
            if(req.query.template){
                template=req.query.template;
            }else{
                template="videoTable";
            }
            fileSystem.readFile(path.normalize(__dirname+"/../com/views/partials/"+template+".ejs"))
                .then((html)=>{
                    res.send(html);
                }).catch((reject)=>{
                    console.log(reject);
                    res.send("Template nicht vorhanden: "+req.query.template);
                });
        });
    }
}
export default new RestApi().express;