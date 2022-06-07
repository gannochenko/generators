const doStuff = async (argument1: string) => {
    return 'something';
};

// //////////////////////
// //////////////////////
// //////////////////////

type WorkerMessageType = {
    name: string;
    args?: string[];
};

const actionMap: Record<string, (...args: string[]) => Promise<string>> = {
    doStuff,
};

onmessage = ({ data }: MessageEvent<WorkerMessageType>) => {
    const { name, args } = data;

    if (name in actionMap) {
        actionMap[name](...(args ?? [])).then((result) => {
            postMessage({
                name,
                result,
            });
        });
    }
};
