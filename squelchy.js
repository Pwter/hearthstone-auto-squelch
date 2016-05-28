var LogWatcher = require('./hearthstone-log-watcher');
var exec = require('child_process').exec;
const WindowsBalloon = require('node-notifier').WindowsBalloon;

var notifier = new WindowsBalloon({
  withFallback: false, // Try Windows Toast and Growl first?
  customPath: void 0 // Relative path if you want to use your fork of notifu
});

var lw = new LogWatcher();

lw.on('mulligan-end', function() {
    console.log('Mulligan ended. Time to squelch!');
    exec('"squelcher.ahk"', function callback(error, stdout, stderr){});
    notifier.notify({
      title: "Squelchy",
      message: "SMOrcer silenced!",
      sound: false, // true | false.
      time: 5000, // How long to show balloon in ms
      wait: false, // Wait for User Action against Notification
    }, function(error, response) {
      console.log(response);
    });
});

lw.start();
console.log('Emote protection on!');

notifier.notify({
  title: "Squelchy",
  message: "Emotes shields up!",
  sound: false, // true | false.
  time: 5000, // How long to show balloon in ms
  wait: false, // Wait for User Action against Notification
}, function(error, response) {
  console.log(response);
});
