var callbacks = [
  function sloppy() {},
  function strict() { "use strict"; }
];

function dispatch() {
  for (var l = callbacks.length, i = 0; i < l; ++i) {
    callbacks[i].apply(null, arguments);
  }
}

for(var i = 0; i < 100000; ++i) {
  dispatch(1, 2, 3, 4, 5);
}
