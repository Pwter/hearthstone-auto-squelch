var LogWatcher = require('./hearthstone-log-watcher');
var exec = require('child_process').exec;

var lw = new LogWatcher();

lw.on('mulligan-end', function() {
    console.log('Mulligan ended. Time to squelch!');
    exec('"squelcher.exe"', function callback(error, stdout, stderr){});

});

lw.start();
console.log('Emote protection on!');
