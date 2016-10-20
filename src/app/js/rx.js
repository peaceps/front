import Rx from "rxjs";

function get(url) {
    return Rx.Observable.create(observer => {
        var req = new XMLHttpRequest();
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

export var rxMain = () => {
    console.log('before');
    get('/app/js/rx.js').subscribe(x => console.log(x));
    console.log('after');
}