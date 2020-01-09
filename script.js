const assert = require("assert");

const dog = {
  name: "Wel",
  bark: function() {
    return "woof, I am " + this.name;
  }
};

module.exports = dog;
