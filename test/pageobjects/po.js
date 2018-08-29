import urls from '../utils/urls';
import { expect } from "chai";


class po {
    constructor() {
        this.title = "Base Page";
		this.name = '.my-menu-signin';
        
    }
    open(path) {
        browser.url(path);
		console.log("browser"+browser);
    }
    launchHomePage() {

        this.open(urls.getEnvUrl());
	//	this.driver.wait(1000);
    }
	clickbtn() {
		var myButton = $('.my-menu-signin');
		myButton.click();
	} 
}
export default new po();