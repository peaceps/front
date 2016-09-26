import 'ie-shim'; // Internet Explorer 9 support
import 'babel-polyfill';

import {test} from 'app/js/test';

document.write('<button id="test">TEST</button>');
document.getElementById('test').onclick=test;
