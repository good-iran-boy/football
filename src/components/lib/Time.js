 function timeToMins(time) {
    var b = time.split(':');
    return b[0]*60 + +b[1];
  }
  

  function timeFromMins(mins) {
    function z(n){return (n<10? '0':'') + n;}
    var h = (mins/60 |0) % 24;
    var m = mins % 60;
    return z(h) + ':' + z(m);
  }
  

 export function addTimes(t0, t1) {
    return timeFromMins(timeToMins(t0) + timeToMins(t1));
  }