import Axios from 'axios';

export abstract class RESTService {
    private url = '';

    protected getUrl() {
        if (!this.url) {
            this.url = process.env.API__URL || '';
            if (__DEV__ && document) {
                this.url = this.url.replace(
                    'localhost',
                    document.location.hostname,
                );
            }
        }

        return this.url;
    }

    protected getAxios() {
        return Axios;
    }
}
