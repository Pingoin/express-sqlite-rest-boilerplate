export class Video{
    public index=0;
    public filename: string;
    public path: string;
    public date: Date;
    public description="";
    public ageRating=0;
    public year=0;
    public source="";
    public extension="";
    public title: string;
    constructor(filename: string, path: string,date: Date){
        this.filename=filename;
        this.title=filename.replace(".mkv","").replace(".mp4","");
        this.extension=filename.replace(this.title,"");
        this.path=path.replace("\\","/");
        this.date=date;
    }

    static fromJSON(json: string): Video{
        const tmp=JSON.parse(json);
        const tmpDoku: Video=new Video(tmp.filename,tmp.path,new Date(tmp.date));

        return tmpDoku;
    }
    static fromInterface(idoc:iVideo):Video{
        const tmpDoku=new Video(idoc.title+idoc.extension,idoc.path,new Date(idoc.date));

        tmpDoku.index=idoc.index;
        tmpDoku.description=idoc.description;
        tmpDoku.ageRating=idoc.ageRating;
        tmpDoku.year=idoc.year;
        tmpDoku.source=idoc.source;
        return tmpDoku;
    }
}
export interface iVideo{
    index:number,
    path: string,
    date: number,
    description:string,
    ageRating:number,
    year:number,
    source:string,
    extension:string,
    title: string,
  }