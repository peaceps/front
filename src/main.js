import 'ie-shim'; // Internet Explorer 9 support
import 'babel-polyfill';

import {runGen} from './test';

document.write('<button id="test">TEST</button>');
document.getElementById('test').onclick=runGen;
