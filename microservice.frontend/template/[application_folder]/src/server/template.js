import fs from 'fs';
import util from 'util';

export class Template {
    constructor() {
        this.portHMR = __DEV__ ? process.env.NETWORK__PORT__HMR || <%- port_hmr %> : 0;
        this.templatePath =
            process.env.TEMPLATE__PATH ||
            (__DEV__ ? './src/index.html' : './public/index.html');
    }

    readFile = util.promisify(fs.readFile);

    /**
     * todo: fill placeholders with the parameters
     */
    async get() {
        return this.read();
    }

    async read() {
        if (!this.template) {
            let template = (await this.readFile(this.templatePath)).toString(
                'utf8',
            );
            if (__DEV__) {
                template = template.replace(
                    '</body>',
                    `<script>document.write('<sc'+'ript src="http://'+document.location.hostname+':${this.portHMR}/client.js"></sc'+'ript>')</script></body>`,
                );
            }

            this.template = template;
        }

        return this.template;
    }
}
