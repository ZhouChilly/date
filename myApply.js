const myApply = function(context) {
  const context = context || window;
  context.fn = this;
  const args = [...arguments][1];
  const result = Array.isArray(args) ? context.fn(...args) : context.fn();
  delete context.fn;
  return result;
};
