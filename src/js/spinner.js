import { Spinner } from "spin.js";

class Spinner {
    constructor() {
        this.option = {
            lines: 11, // The number of lines to draw
            length: 0, // The length of each line
            width: 18, // The line thickness
            radius: 45, // The radius of the inner circle
            scale: 0.55, // Scales overall size of the spinner
            corners: 1, // Corner roundness (0..1)
            speed: 1.5, // Rounds per second
            rotate: 25, // The rotation offset
            animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#FF6B01', // CSS color or array of colors
            fadeColor: 'transparent', // CSS color or array of colors
            top: '50%', // Top position relative to parent
            left: '50%', // Left position relative to parent
            shadow: '0 0 1px transparent', // Box-shadow for the lines
            zIndex: 2000000000, // The z-index (defaults to 2e9)
            className: 'spinner', // The CSS class to assign to the spinner
            position: 'absolute', // Element positioning
};
    }

    show() {
        console.log('spinner show');
    }

    hide() {
        console.log('spinner hide');
    }
}