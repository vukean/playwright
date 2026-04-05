import { test, expect, request } from '@playwright/test'
// test ('ten dau tien cua ka', async({page}) => {
//     //step 1: vao homepage
// await page.goto("https://playwrightvn.com")
//     //step 2: verify cai tieu de
//     await expect(page).toHaveTitle(/Học Automation Test từ chưa biết gì/);



//     //click master class
//     // const masterClasslocator  = page.getByRole('link',{name: "Playwright Master Class: From Zero To Hero"});
//     // await masterClasslocator.first().click();
//     await page.getByRole('link',{name:"Playwright Master Class: From Zero To Hero"}).first().click();

// })

test('mouse', async ({page}) =>{

    await page.goto('https://material.playwrightvn.com/018-mouse.html');
    const element = page.locator("#clickArea");
    //1 click
    await element.click();
    //click chuot theo vi tri
    await element.click({button: "left"})
    // double click
    await element.dblclick({button:"left"})
    // multiple click
    // await element.click(
    //      {
    //         button: 'right'
    //     }
    // )
    //click delay
    await element.click(
        {
            delay: 2_000

        }
    );

    //click + press
    // await element.click(
    //     {
    //         modifiers: ['Shift','Alt']
    //     }
    // );
    //click cai khac
})
test('keyboard', async({page}) =>{
        await page.goto('https://material.playwrightvn.com//01-xpath-register-page.html');
        const userName = page.locator('#username');
        const email = page.locator('#email')

    // fill text
    await userName.fill('user name test 123');
            await userName.press('b',{
                delay: 2_000
            });

        await email.pressSequentially('email test 3 2 1',
            {
                delay: 300
            }
        );
   const clickMale = page.locator('#male');
        const clickFemale = page.locator('#female');
        //check cick male
        const clickRealding = page.locator('#reading');
        const clickCooking = page.locator('#cooking');
        await clickMale.check();
        await page.waitForTimeout(1000);
                await clickFemale.check();
        await page.waitForTimeout(1000);
        await clickRealding.check();
                const clickTraveling = page.locator('#traveling');
                await page.waitForTimeout(1000);
                await clickTraveling.check();
                await page.waitForTimeout(1000);
                await clickCooking.check()
                await page.waitForTimeout(1000);
                await clickRealding.uncheck();
                await page.waitForTimeout(1000);
                await clickTraveling.uncheck();
                await page.waitForTimeout(1000);  
                await clickCooking.uncheck();              
        
})
test('radio button', async({page}) =>
{
    await page.goto('https://material.playwrightvn.com//01-xpath-register-page.html')
    const clickMale = page.locator('#male');
        const clickFemale = page.locator('#female');
        //check cick male
        const clickRealding = page.locator('#reading');
        const clickCooking = page.locator('#cooking');
        await clickMale.check();
        await page.waitForTimeout(1000);
                await clickFemale.check();
        await page.waitForTimeout(1000);
        await clickRealding.check();
                const clickTraveling = page.locator('#traveling');
                await page.waitForTimeout(1000);
                await clickTraveling.check();
                await clickCooking.setChecked(true)
                // await page.waitForTimeout(1000);
                // await clickRealding.uncheck();
                // await page.waitForTimeout(1000);
                // await clickTraveling.uncheck();
                // await page.waitForTimeout(1000);  
                // await clickCooking.uncheck();   
                    
})

test('multiple, dropdownlist, file va datetime', async({page}) => {
    await page.goto('https://material.playwrightvn.com//01-xpath-register-page.html')
    //Khai bao interst va chon gia tri 
    const interests = page.locator('#interests');
  await interests.selectOption([
    'technology',
    'music',
    'sports',
    'art'
  ]);
 // mong muon kq tra ve
//   await expect(interests).toHaveValues([
//     'technology',
//     'music',
//     'sports'
//   ]);
const country = page.locator('#country');
await country.selectOption([
    'canada'
])
await expect(country).toHaveValue('canada');

//dob 
const dob = page.locator('#dob');

await dob.fill('1995-08-20');
await expect(dob).toHaveValue('1995-08-20');
// upload file
const uploadFile = page.locator('#profile');
await uploadFile.setInputFiles('D:/playwright/tests/yare-yue-2.jpg');
});


test('test thu yutup', async({page}) => {
    await page.goto('https://www.youtube.com/watch?v=ylFHA2hQPn0&list=RDylFHA2hQPn0&start_radio=1');
const searchBox = page.getByRole('combobox', { name: /search/i });
await searchBox.fill('Design stunning poster for free');
const nutTimKie = page.getByRole('button',{
    name: /Search/
});
// await nutTimKie.first().click();
await searchBox.press('Enter');

// await searchBox.press('Enter');

}

)

test ('tao thich the', async({page})=> {
    await page.goto('https://www.facebook.com/groups/1523459548029885');
    
  await expect(
    page.getByText('You must log in to continue.').first()
  ).toBeVisible();

})
