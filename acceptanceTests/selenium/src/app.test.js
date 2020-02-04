import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

let driver
beforeAll( async () =>  { 
	driver = await getDriver()
	await driver.get(getHostName())
 })

it('should input a todo', async () => {
	 const welcome = await driver.findElement(By.id('welcomeTitle'))
	 expect(await welcome.getText()).toContain('Welcome')
})

it ("should not find element", async () => {
	expect(await driver.findElements(By.id("toggleText"))).toEqual([])

})

it ("should not find element", async () => {
	await driver.findElement(By.id("toggleButton")).click()
	expect( await driver.findElements(By.id("toggleText"))).not.toBeNull()

})

xit ("should  find Star Wars amd Spider Man", async () => {
	const expected = ['Star Wars', 'Spider Man'];
	expect( await driver.findElements(By.className("Movie"))).toEqual(expect.arrayContaining(expected))

})