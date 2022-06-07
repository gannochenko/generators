import { FooType } from './type';

type WorkerEventDataType = {
    name: string;
    result: string;
};

const run = async (actionName: string, ...args: string[]) => {
    return new Promise<string>((resolve) => {
        const worker = new Worker(`${process.env.PUBLIC_URL}/worker.js`);
        worker.onmessage = ({ data }: MessageEvent<WorkerEventDataType>) => {
            const { name, result } = data;
            if (name === actionName) {
                resolve(result);
            }
            worker.terminate();
        };
        worker.postMessage({
            name: actionName,
            args,
        });
    });
};

export const doStuff = async (code: string) => {
    const result = await run('doStuff', code);
    const resultParsed = JSON.parse(result) as { data: FooType[] };

    return resultParsed.data;
};
