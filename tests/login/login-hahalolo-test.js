const DriverManager = require("../../driver/driverManage");
const LoginHahaloloPage = require("../../pages/login/login-hahalolo-page");

describe('Login', function () {
    let driverManager, driver
    let loginHaloPage

    beforeEach(function () {
        driverManager = new DriverManager()
        driver = driverManager.getDirver()

        loginHaloPage = new LoginHahaloloPage(driver)

    });

    it('Login hahalolo success', async function () {
        await loginHaloPage.loginHalo(username, pwd)

    });

    it('Login hahalolo success', async function () {
        await loginHaloPage.loginHalo(username, pwd)

    });
});