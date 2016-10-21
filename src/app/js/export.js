import {rxMain} from './rx';
import {runGen} from './generator';

class ButtonWrapper{
    constructor(func, name) {
        this.func = func;
        this.name = name;
    }
}
let buttons = [];
buttons.push(new ButtonWrapper(runGen,"Generator"));
buttons.push(new ButtonWrapper(rxMain,"RX"));

export {buttons};
