class urls {
    constructor() {
        this.envUrls = {
            local: 'https://localhost:8443',
            prod: 'https://www.napaonline.com/'
        };
    }

    getEnvUrl() { return browser.options.baseUrl; }
   
}
export default new urls();