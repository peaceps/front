import 'ie-shim'; // Internet Explorer 9 support
import 'babel-polyfill';

import {buttons} from 'app/js/export';

let html = "";
for(let {name} of buttons){
    html += `<button style="width:100%;height:250px" id="${name}">${name}</button>`;
}
document.write(html);
for(let {func,name} of buttons){
    document.getElementById(name).onclick = func;
}