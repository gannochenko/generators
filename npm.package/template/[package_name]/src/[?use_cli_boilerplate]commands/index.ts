import { Command as CommanderCommand } from 'commander';

import { CommandRun } from './CommandRun';
import { ActionCallback } from './type';

export class Commands {
    protected static getCommands() {
        return [CommandRun];
    }

    public static getDefaultCommand() {
        return CommandRun;
    }

    public static processCLI(program: CommanderCommand) {}

    public static attachCommands(
        program: CommanderCommand,
        actionCallback: ActionCallback,
    ) {
        this.getCommands().forEach(command =>
            command.attach(program, actionCallback),
        );
    }
}
