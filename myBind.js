const myBind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    return this instanceof F
      ? new _this(...args, ...arguments)
      : _this.apply(context, args.concat(...arguments));
  };
};
