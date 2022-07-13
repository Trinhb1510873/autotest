const { until } = require("selenium-webdriver")

class LoginHahaloloPage {
    constructor(driver) {
        this.driver = driver
    }

    async loginHalo(username, pwd) {
        await this.enterUsername(username)
        await this.enterPwd(pwd)
        await this.clickLogin()
    }

    async enterUsername(username) {
        const usernameInput = await this.driver.wait(until.elementLocated({ id: 'accountId'}))
        await usernameInput.sendKeys(username)
    }

    async enterPwd() {
        const pwdInput = await this.driver.wait(until.elementLocated({ id: 'pwdId'}))
        await pwdInput.sendKeys(pwd)
    }

    async clickLogin() {
        const loginBtn = await this.driver.wait(until.elementLocated({ id: 'login-button'}))
        await loginBtn.sendKeys(pwd)
    }
}

module.exports = LoginHahaloloPage