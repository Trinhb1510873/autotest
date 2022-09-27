const webdriver = require('selenium-webdriver')

class DriverManager {
    getDirver() {  
        const driver = new webdriver.Builder().forBrowser('chrome').build()
        driver.manage().setTimeouts( { implicit: 20000 } )
        return driver
    }

    getName() {
        return 'name tesst';
    }

    getMainName() {
        return 'Main Name';
    }

    getAttribute() {
        return 'Attribute'
    }
}

module.exports = DriverManager