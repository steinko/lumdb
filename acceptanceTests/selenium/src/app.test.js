import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

it('should input a todo', async () => {
	 const driver = await getDriver()
	 await driver.get(getHostName())
	 const welcome = await driver.findElement(By.id('welcomeTitle'))
	 expect(await welcome.getText()).toContain('Welcome')
})