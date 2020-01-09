const person = {
  firstName: "Steve",
  lastName: "Kot",
  birthYear: 1980,
  name: function() {
    return this.firstName + " " + this.lastName;
  },
  ageThisYear: function() {
    var d = new Date();
    var currYear = d.getFullYear();
    return currYear - this.birthYear;
  }
};

module.exports = person;
