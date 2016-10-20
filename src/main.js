import 'ie-shim'; // Internet Explorer 9 support
import 'babel-polyfill';

import {rxMain} from 'app/js/rx';

document.write('<button style="width:800px;height:400px" id="button">CLICK</button>');
document.getElementById('button').onclick=rxMain;
