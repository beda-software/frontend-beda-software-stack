const path = require('path');
const fs = require('fs-extra');
const Generator = require('yeoman-generator');
const { validateNonEmpty } = require('../../lib/validators');

module.exports = class extends Generator {
    async prompting() {
        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'monorepoGitPath',
                message: 'Path to monorepo git repository',
                default: 'https://github.com/beda-software/frontend-beda-software-stack.git',
            },
            {
                type: 'input',
                name: 'mobileAppName',
                message: 'Your mobile project name',
                validate: validateNonEmpty.bind(this),
            },
        ]);
    }

    install() {
        const { monorepoGitPath, mobileAppName } = this.answers;
        const projectName = 'frontend';
        const cwd = path.resolve(projectName);

        const pathTemplateWeb = path.resolve(path.join(projectName, 'template-web'));
        const pathTemplateMobile = path.resolve(path.join(projectName, 'template-mobile'));
        const pathTemplateMonorepo = path.resolve(path.join(projectName, 'template-monorepo'));

        const templateCRA = 'file://' + pathTemplateWeb;
        const templateCRNA = 'file://' + pathTemplateMobile;

        this.spawnCommandSync('git', ['clone', monorepoGitPath, projectName]);

        fs.readdirSync(pathTemplateMonorepo).forEach((file) =>
            fs.moveSync(
                `${pathTemplateMonorepo}/${file}`,
                `${path.dirname(pathTemplateMonorepo)}/${file}`,
                {
                    overwrite: true,
                },
            ),
        );
        fs.removeSync(pathTemplateMonorepo);

        this.spawnCommandSync('npx', ['create-react-app', 'web', '--template', templateCRA], {
            cwd,
        });

        this.spawnCommandSync(
            'npx',
            [
                'react-native',
                'init',
                mobileAppName,
                '--template',
                templateCRNA,
                '--directory',
                'mobile',
            ],
            { cwd },
        );

        this.spawnCommandSync('rm', ['-rf', './template-web'], { cwd });
        this.spawnCommandSync('rm', ['-rf', './template-mobile'], { cwd });
        this.spawnCommandSync('rm', ['-rf', './template-monorepo'], { cwd });
        this.spawnCommandSync('rm', ['-rf', './generator-beda'], { cwd });
        this.spawnCommandSync('rm', ['-rf', './.git'], { cwd });

        this.spawnCommandSync('git', ['init'], { cwd });
        this.spawnCommandSync('git', ['checkout', '-b', 'develop'], { cwd });

        this.spawnCommandSync('yarn', ['workspace', 'web', 'add', 'shared@0.0.1'], {
            cwd,
        });
        this.spawnCommandSync('yarn', ['workspace', 'mobile', 'add', 'shared@0.0.1'], { cwd });
        this.spawnCommandSync('rm', ['web/yarn.lock'], { cwd });
        this.spawnCommandSync('cp', ['shared/src/config.local.ts', 'shared/src/config.ts'], {
            cwd,
        });
        this.spawnCommandSync(
            'yarn',
            ['exec', 'node', './node_modules/husky/husky.js', 'install'],
            { cwd },
        );

        // Delete eslint config added by CRA from web because we use common eslint config in the root
        const webPackagePath = `${cwd}/web/package.json`;
        const webPackage = require(webPackagePath);
        delete webPackage['eslintConfig'];
        fs.writeFileSync(webPackagePath, JSON.stringify(webPackage, null, 4), 'utf8');
    }
};
