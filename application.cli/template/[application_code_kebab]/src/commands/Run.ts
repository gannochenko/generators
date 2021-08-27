import debug from 'debug';
import inquirer from 'inquirer';
import execa from 'execa';
import { Application } from '../lib/application';
import {
    CommandInstance,
    Command,
    Implements,
    CommandArgumentsType,
} from './type';

const d = debug('run');

@Implements<Command>()
export class Run implements CommandInstance {
    static command = 'run [something] [cool]';
    static alias = 'r';
    static description = 'Run the thing';
    static options: Command['options'] = [
        ['-o, --output <path>', 'Output file'],
        ['-y, --yes', 'Use the default'],
    ];

    constructor(
        private application: Application,
        private args: CommandArgumentsType,
        private options: CommandArgumentsType,
    ) {}

    async execute() {
        const answers = await inquirer.prompt([
            {
                message: 'Execute?',
                name: 'confirm',
                type: 'confirm',
                default: false,
            },
        ]);

        if (!answers.confirm) {
            console.log('Aborted');
            return;
        }

        console.log('Executing command "run"');

        const result = await execa('ls', ['-l'], {
            cwd: process.cwd(),
            stdio: ['inherit', 'inherit', 'inherit'],
        });

        console.log(result);

        d('Executed successfully');
    }
}
