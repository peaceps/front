import Rx from "rxjs";

function get(url) {
    return Rx.Observable.create(observer => {
        let req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function() {
            if (req.status == 200) {
                observer.next(req.response);
                observer.complete();
            }
            else {
                observer.error(new Error(req.statusText));
            }
        };
        req.onerror = () => observer.error(new Error("Unknown Error"));
        req.send();
    });
}

export let rxMain = () => {
    get("/app/js/rx.js").subscribe(data => console.log(data));
}