import { Video} from "./video";
export class VideoResponse{
public dokus:Video[]=[];
public count:number;
public page:number;
public limit:number;
public template:string;
}