import { Command as CommanderCommand } from 'commander';
import inquirer from 'inquirer';
import execa from 'execa';
import debug from 'debug';
import {
    ActionCallback,
    CommandActionArguments,
    CommandProcessor,
    Implements,
} from './type';
import {Application} from '../lib/application';

const d = debug('run');

// todo: need to instantiate a command every time, static methods suck
@Implements<CommandProcessor>()
export class CommandRun {
    public static attach(
        program: CommanderCommand,
        actionCallback: ActionCallback,
    ) {
        program
            .command('run [something]')
            .alias('r')
            .description('Run something')
            .option('-y, --yes', 'Use the default')
            .action((something: string, command: CommanderCommand) =>
                actionCallback({
                    command: this,
                    arguments: {
                        something,
                        yes: command.yes,
                    },
                }),
            );
    }

    public static async process(
        application: Application,
        args: CommandActionArguments,
    ) {
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
