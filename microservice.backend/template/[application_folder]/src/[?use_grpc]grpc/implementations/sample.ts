export const sampleImplementation = {
    Sample: {
        doStuff: async (call: any) => {
            const {
                request: { counter },
            } = call;

            console.log(counter);

            return {};
        },
    },
};
