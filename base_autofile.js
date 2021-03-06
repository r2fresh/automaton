/*jshint es5:true*/

'use strict';

var task = {
    id: '{{name}}',
    author: 'Task author',
    name: '{{name}}',

    options: {
        opt1: {
            description: 'Opt1 description',
            default: 'foo'                   // if mandatory, remove the default
        }
    },

    setup: function (opt, ctx, next) {
        // do any validation/sanitization you need here
        next();
    },

    tasks: [
        {
            task: ''
        }
    ]
};

module.exports = task;