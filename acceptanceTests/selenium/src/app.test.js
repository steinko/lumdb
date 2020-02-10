import getDriver from "./setupTests"
import {getHostName} from "./setupTests"
import {By, Key} from 'selenium-webdriver'

let driver
beforeAll( async () =>  { 
	driver = await getDriver()
	await driver.get(getHostName())
 })

it('should diplay welcome', async () => {
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

it ("should display test", async () => {
	await driver.get(getHostName() + '/test')
	const element = await driver.findElement(By.tagName("h1"))
	expect( await element.getText()).toBe('Test')

})

xit ("should  find Star Wars amd Spider Man", async () => {
	const expected = ['Star Wars', 'Spider Man'];
	expect( await driver.findElements(By.className("Movie"))).toEqual(expect.arrayContaining(expected))

})