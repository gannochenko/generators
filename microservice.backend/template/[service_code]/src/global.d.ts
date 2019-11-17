declare const __DEV__: boolean;
declare const __TEST__: boolean;
<% if (use_graphql) { %>
declare module '*.graphql' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const content: any;
    export default content;
}
<% } %>
