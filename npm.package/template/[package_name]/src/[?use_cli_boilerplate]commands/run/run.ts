import { Command as CommanderCommand } from 'commander';
import {
    ActionCallback,
    CommandActionArguments,
    CommandProcessor,
    Implements,
} from '../type';
import {Application} from '../../lib/application';

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
        console.log('Executing command "run"');
    }
}
