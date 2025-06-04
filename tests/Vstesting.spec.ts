import{test,expect} from "@playwright/test"
test('test1', async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")

expect(await page.screenshot())




})