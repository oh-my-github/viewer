'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'oh-my-github template: ' + chalk.red('omg-basic')
    ));

    // TODO: theme
    var prompts = [
    //{
    //  type: 'confirm',
    //  name: 'someOption',
    //  message: 'Would you like to enable this option?',
    //  default: true
    //}
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    this.directory(
      this.templatePath(),
      this.destinationPath()
    );
  }
});
