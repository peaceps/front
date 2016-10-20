import Rx from "rxjs";

let log = data=>console.log(data);

let src = Rx.Observable.range(0,6);

export var rxMain = () => src.reduce((a,b)=>{return {"sum":a.sum+b,"count":a.count+1}},{"sum":0,"count":0}).subscribe(log);