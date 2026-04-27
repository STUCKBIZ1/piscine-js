const is = {

  num: function(value) {
    return typeof value === "number" && !Number.isNaN(value);
  },

  nan: function(value) {
    return Number.isNaN(value);
  },

  str: function(value) {
    return typeof value === "string";
  },

  bool: function(value) {
    return typeof value === "boolean";
  },

  undef: function(value) {
    return typeof value === "undefined";
  },

  def: function(value) {
    return value !== undefined;
  },

  arr: function(value) {
    return Array.isArray(value);
  },

  obj: function(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  },

  fun: function(value) {
    return typeof value === "function";
  },

  truthy: function(value) {
    return Boolean(value);
  },

  falsy: function(value) {
    return !value;
  }

};