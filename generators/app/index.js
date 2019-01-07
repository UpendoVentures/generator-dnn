'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
// Const glob = require("glob");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the\n' +
          chalk.yellow('Upendo Ventures') +
          ' ' +
          chalk.bold.blue('DNN') +
          '\nproject generator! '
      )
    );

    this.log(
      chalk.white(
        'This awesome command line tool scaffolds a DNN project/solution in your current directory.\n'
      )
    );
    this.log(
      chalk.italic.white('This tool is forked, with love, from the original ') +
        chalk.bold.blue('generator-dnn') +
        chalk.italic.white(' maintained by the most honorable Matt Rutledge.\n\n')
    );

    const prompts = [
      {
        when: !this.options.projType,
        type: 'list',
        name: 'projType',
        message: 'What type of project would you like to scaffold?',
        choices: [
          { name: 'Solution Structure', value: 'solution' },
          { name: 'MVC Module', value: 'mvc' },
          { name: 'SPA Module', value: 'spa' },
          {
            name: chalk.gray('Persona Bar'),
            value: 'personabar',
            disabled: chalk.gray('Coming Soon')
          },
          {
            name: chalk.gray('Library'),
            value: 'library',
            disabled: chalk.gray('Coming Soon')
          },
          {
            name: chalk.gray('Library: Scheduled Job'),
            value: 'library-schduler',
            disabled: chalk.gray('Coming Soon')
          },
          {
            name: chalk.gray('Library: Hotcakes Commerce Workflow'),
            value: 'library-hccworkflow',
            disabled: chalk.gray('Coming Soon')
          },
          {
            name: chalk.gray('Library: Hotcakes Commerce Action Delegate'),
            value: 'library-hccdelegate',
            disabled: chalk.gray('Coming Soon')
          },
          {
            name: chalk.gray('Hotcakes Commerce Viewset'),
            value: 'viewset',
            disabled: chalk.gray('Coming Soon')
          },
          {
            name: chalk.gray('Theme'),
            value: 'theme',
            disabled: chalk.gray(
              'For the best starter DNN theme use nvQuickTheme (https://www.nvquicktheme.com)'
            )
          }
        ]
      }
    ];

    /*	
	Var error = null;
	var fileList = null;
	var gOptions = { cwd: "../" };
	var globbed = glob("*.sln", gOptions, function(err, files){
		this.log(chalk.yellow("err = " + err));
		this.log(chalk.yellow("files = " + files));
		error = err;
		fileList = files;
	});
	
	this.log(chalk.yellow("globbed = " + globbed));	
	this.log(chalk.yellow("err = " + error));
	this.log(chalk.yellow("files = " + fileList));
*/

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  composing() {
    const options = {
      projType: this.props.value
    };

    this.log(chalk.yellow('Looking for: ' + this.props.projType));

    this.composeWith(require.resolve('../' + this.props.projType), options);
  }

  writing() {}

  install() {
    // This.installDependencies({ npm: true, bower: false, yarn: false });
  }
};
