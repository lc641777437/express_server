/**
 * Created by piggysticker on 2017/3/13.
 */
var log4js = require('log4js');

log4js.configure({
    "appenders": [
        {
            "type": "console",
            "category": "console"
        },
        {
            "type": "dateFile",
            "category": "dateFileLog",
            "filename": "./logs/log",
            "pattern": "-yyyy-MM-dd.log",
            "alwaysIncludePattern": true
        }
    ],
    "replaceConsole": true,
    "levels": {
        "dateFileLog": "debug"
    }
});

module.exports = log4js.getLogger('dateFileLog');
