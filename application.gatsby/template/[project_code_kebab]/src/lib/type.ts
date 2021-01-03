<% if (use_blog) { %>
export interface Graphics {
    source?: string;
    author?: string;
    image: any;
}
<% } %>
export interface Node {
    id: string;
    html: string;
    rawMarkdownBody: string;
    frontmatter: {
<% if (use_blog) { %>
        graphics: Graphics[];
<% } %>
    };
}
