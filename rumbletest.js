const Gamecontroller = require('./gamecontroller');
const ctrl = new Gamecontroller('rumblepad2');
 
ctrl.connect(function() {
    console.log('Game On!');
});

ctrl.on('error', function(err) {
    console.error(err);
});
  
ctrl.on('1:press', function() {
    console.log('1 pressed');
});
 
ctrl.on('1:release', function() {
    console.log('1 released');
});

ctrl.on('N:press', function() {
    console.log('N pressed');
});

ctrl.on('JOYR:move', function(pos) {
    console.log('JOYR moved', pos);
});

ctrl.on('JOYL:move', function(pos) {
    console.log('JOYL moved', pos);
});

// ctrl.on('data', function(data) {
//     console.log(data);
// });