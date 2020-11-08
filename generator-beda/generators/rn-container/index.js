const Generator = require('yeoman-generator');
const { validateNonEmpty, validateFirstUppercase } = require('../../lib/validators');

module.exports = class extends Generator {
    async prompting() {
        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'destinationPath',
                message: 'Destination path',
                default: '.',
            },
            {
                type: 'input',
                name: 'ComponentName',
                message: 'Your component name',
                validate: async (input) =>
                    (await validateNonEmpty.call(this, input)) && (await validateFirstUppercase.call(this, input)),
            },
            {
                type: 'confirm',
                name: 'isRootScreen',
                message: 'Use component as root screen',
            },
            {
                type: 'confirm',
                name: 'useHook',
                message: 'Create hook stub',
            },
        ]);
    }

    writing() {
        const { destinationPath, useHook, ComponentName } = this.answers;

        this.fs.copyTpl(
            this.templatePath('**/*'),
            this.destinationPath(destinationPath + '/' + ComponentName),
            this.answers,
        );

        if (!useHook) {
            this.fs.delete(this.destinationPath(destinationPath + '/' + ComponentName + '/__tests__/hooks.ts'));
            this.fs.delete(this.destinationPath(destinationPath + '/' + ComponentName + '/hooks.ts'));
        }
    }
};
