const BoardMember = function (name, homestate, training) {
  this.name = name;
  this.homeState = homestate;
  this.training = training;
  this.veto = function () {
    return `No, I must disagree`;
  };
  this.approve = function () {
    return `You can do that!`
  };
}
