var throttle = function(func, delay){
  var last = 0
  return function(){
    var curr = +new Date()
    if (curr - last > delay){
      func.apply(this, this.arguments)
      last = curr
    }
  }
}