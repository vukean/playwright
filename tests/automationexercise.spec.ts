import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


//This is a note: Correct account was create but cannot delete account
// anvuke2001@gmail.com
// password: 123
//

test('Test case 1: Register New User', async ({ page }) => {
        const username = `${faker.person.firstName().toLowerCase()}${faker.number.int({ min: 100, max: 999 })}`;
        const email = faker.internet.email();
        const password = faker.internet.password({
            length: 4,
        });
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const Address = faker.location.streetAddress();
        const address2 = faker.location.secondaryAddress();
        const city = faker.location.city();
        const state = faker.location.state();
        const zipCode = faker.location.zipCode();
        const company = `${faker.company.name()} ${faker.company.name()}`;
        const phone = faker.phone.number('###-###-####');
        await page.goto('http://automationexercise.com/');
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await expect(page).toHaveURL('https://automationexercise.com/login')
        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Name' }).fill(username);
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
        await page.getByRole('button', { name: 'Signup' }).click();
        await expect(page).toHaveURL('https://automationexercise.com/signup');
        await expect(page.getByText('Enter Account Information')).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Name *', exact: true })).toHaveValue(username);
        await expect(page.getByRole('textbox', { name: 'Email *' })).toHaveValue(email);
        await page.getByRole('textbox', { name: 'Password *' }).fill(password);
        await page.locator('#days').selectOption('20');
        await page.locator('#months').selectOption('January');
        await page.locator('#years').selectOption('2001');
        await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
        await expect(page.getByRole('checkbox', { name: 'Sign up for our newsletter!' })).toBeChecked();
        await page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).check();
        await expect(page.getByRole('checkbox', { name: 'Receive special offers from our partners!' })).toBeChecked();
        await page.getByRole('textbox', { name: 'First name *' }).fill(firstName);
        await expect(page.getByRole('textbox', { name: 'First name *' })).toHaveValue(firstName);
        await page.getByRole('textbox', { name: 'Last name *' }).fill(lastName);
        await expect(page.getByRole('textbox', { name: 'Last name *' })).toHaveValue(lastName);
        await page.getByRole('textbox', { name: 'Company', exact: true }).fill(company);
        await expect(page.getByRole('textbox', { name: 'Company', exact: true })).toHaveValue(company);
        await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(Address);
        await expect(page.getByRole('textbox', { name: 'Address * (Street address, P.' })).toHaveValue(Address);
        await page.getByRole('textbox', { name: 'Address 2' }).fill(address2);
        await expect(page.getByRole('textbox', { name: 'Address 2' })).toHaveValue(address2);
        await page.getByLabel('Country *').selectOption('United States');
        await expect(page.getByLabel('Country *')).toHaveValue('United States');
        await page.getByRole('textbox', { name: 'State *' }).fill(state);

        await expect(page.getByRole('textbox', { name: 'State *' })).toHaveValue(state);
        await page.getByRole('textbox', { name: 'City *' }).fill(city);
        await expect(page.getByRole('textbox', { name: 'City *' })).toHaveValue(city);
        await page.locator('#zipcode').fill(zipCode);
        await expect(page.locator('#zipcode')).toHaveValue(zipCode);
        await page.getByRole('textbox', { name: 'Mobile Number *' }).fill(phone);
        await expect(page.getByRole('textbox', { name: 'Mobile Number *' })).toHaveValue(phone);
        await page.getByRole('button', { name: 'Create Account' }).click();
        await expect(page.getByText('Account Created!')).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page.getByText('Logged in as ' + username)).toBeVisible();
        await page.getByRole('link', { name: ' Delete Account' }).click();
        await page.getByRole('link', { name: 'Continue' }).click();
        // await  page.getByText('Account Deleted!').waitFor({ state: 'visible' });
        // await expect(page).toHaveURL('https://automationexercise.com/account_created');
        // await expect(page.getByText('Account Created!')).toBeVisible();
        // await page.getByRole('button', { name: 'Continue' }).click();
    })
test('Test case 2: Login User with correct email and password', async ({ page }) => {
        const username = `${faker.person.firstName().toLowerCase()}${faker.number.int({ min: 100, max: 999 })}`;
        const email = faker.internet.email();
        const password = faker.internet.password({
            length: 4,
        });
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const Address = faker.location.streetAddress();
        const address2 = faker.location.secondaryAddress();
        const city = faker.location.city();
        const state = faker.location.state();
        const zipCode = faker.location.zipCode();
        const company = `${faker.company.name()} ${faker.company.name()}`;
        const phone = faker.phone.number('###-###-####');
        await page.goto('http://automationexercise.com/');
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await expect(page).toHaveURL('https://automationexercise.com/login')
        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Name' }).fill(username);
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
        await page.getByRole('button', { name: 'Signup' }).click();
        await expect(page).toHaveURL('https://automationexercise.com/signup');
        await expect(page.getByText('Enter Account Information')).toBeVisible();
        await expect(page.getByRole('textbox', { name: 'Name *', exact: true })).toHaveValue(username);
        await expect(page.getByRole('textbox', { name: 'Email *' })).toHaveValue(email);
        await page.getByRole('textbox', { name: 'Password *' }).fill(password);
        await page.locator('#days').selectOption('20');
        await page.locator('#months').selectOption('January');
        await page.locator('#years').selectOption('2001');
        await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
        await expect(page.getByRole('checkbox', { name: 'Sign up for our newsletter!' })).toBeChecked();
        await page.getByRole('checkbox', { name: 'Receive special offers from our partners!' }).check();
        await expect(page.getByRole('checkbox', { name: 'Receive special offers from our partners!' })).toBeChecked();
        await page.getByRole('textbox', { name: 'First name *' }).fill(firstName);
        await expect(page.getByRole('textbox', { name: 'First name *' })).toHaveValue(firstName);
        await page.getByRole('textbox', { name: 'Last name *' }).fill(lastName);
        await expect(page.getByRole('textbox', { name: 'Last name *' })).toHaveValue(lastName);
        await page.getByRole('textbox', { name: 'Company', exact: true }).fill(company);
        await expect(page.getByRole('textbox', { name: 'Company', exact: true })).toHaveValue(company);
        await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill(Address);
        await expect(page.getByRole('textbox', { name: 'Address * (Street address, P.' })).toHaveValue(Address);
        await page.getByRole('textbox', { name: 'Address 2' }).fill(address2);
        await expect(page.getByRole('textbox', { name: 'Address 2' })).toHaveValue(address2);
        await page.getByLabel('Country *').selectOption('United States');
        await expect(page.getByLabel('Country *')).toHaveValue('United States');
        await page.getByRole('textbox', { name: 'State *' }).fill(state);

        await expect(page.getByRole('textbox', { name: 'State *' })).toHaveValue(state);
        await page.getByRole('textbox', { name: 'City *' }).fill(city);
        await expect(page.getByRole('textbox', { name: 'City *' })).toHaveValue(city);
        await page.locator('#zipcode').fill(zipCode);
        await expect(page.locator('#zipcode')).toHaveValue(zipCode);
        await page.getByRole('textbox', { name: 'Mobile Number *' }).fill(phone);
        await expect(page.getByRole('textbox', { name: 'Mobile Number *' })).toHaveValue(phone);
        await page.getByRole('button', { name: 'Create Account' }).click();
        await expect(page.getByText('Account Created!')).toBeVisible();
        await page.waitForTimeout(3000);
        await page.goto('http://automationexercise.com/');
        await page.getByRole('link', { name: ' Logout' }).click();
        await page.getByRole('heading', { name: 'Login to your account' }).waitFor({ state: 'visible' });
        await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(email);
        await page.getByRole('textbox', { name: 'Password' }).fill(password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Logged in as ' + username)).toBeVisible();

})
test('Test ca 3: Login user with incorrect email and password',async({page})=>{
    const inValidusername = `${faker.internet.email().toLowerCase()}${faker.number.int({ min: 100, max: 999 })}`;
    const inValidpassword = 'InvalidPassword123';
    await page.goto("https://automationexercise.com/");
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByRole('heading', { name: 'Login to your account' })).toBeVisible();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(inValidusername);
    await page.getByRole('textbox', { name: 'Password' }).fill(inValidpassword);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
})
test('Test case 4: Logout User',async({page})=>{
    const name= 'vukean'
    const username = 'anvuke2001@gmail.com'
    const password = '123'
    await page.goto("https://www.automationexercise.com/") 
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await expect(page.getByRole('link', { name: 'Website for automation' })).toBeVisible();
    await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill(username);
    await page.getByRole('textbox', { name: 'Password' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Logged in as ' + name)).toBeVisible();
    await page.getByRole('link', { name: ' Logout' }).click();
    await expect(page).toHaveURL('https://www.automationexercise.com/login')
})
test('Test case 5: Register New User with existing email',async({page})=>{
    const name = 'vukean'
    const username = 'anvuke2001@gmail.com'
    const password = '123'
        await page.goto("https://www.automationexercise.com/") 
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Name' }).fill(name);
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(username);
        await page.getByRole('button', { name: 'Signup' }).click();
        await expect(page.getByText('Email Address already exist!', {exact: true})).toBeVisible();
    })
test('Test case 6: Contact Us Form',async({page})=>{
    const name = 'vukean'
    const email = 'anvuke2001@gmail.com'
    await page.goto("https://automationexercise.com/" )
    await page.getByRole('link', { name: ' Contact us' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/contact_us', { exact: true });
    await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Name' }).fill(name);
    await expect(page.getByRole('textbox', { name: 'Name' })).toHaveValue(name);
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill(email);
    await expect(page.getByRole('textbox', { name: 'Email', exact: true })).toHaveValue(email);
    await page.getByRole('textbox', { name: 'Subject' }).fill('Test Contact Us Form');
    await expect(page.getByRole('textbox', { name: 'Subject' })).toHaveValue('Test Contact Us Form');
    await page.getByRole('textbox', { name: 'Your Message Here' }).fill('This is a test message for the Contact Us form.', { exact: true });
    await expect(page.getByRole('textbox', { name: 'Your Message Here' })).toHaveValue('This is a test message for the Contact Us form.', { exact: true });
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles('D:/Project/Practice-Automation-Testing/d45f3f2e80ec85d75fc934294dd1d836.jpg');
    await expect(page.getByRole('button', { name: 'Choose File' })).toHaveValue('C:\\fakepath\\d45f3f2e80ec85d75fc934294dd1d836.jpg');

        await page.waitForTimeout(3000);
  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Press OK to proceed!', { exact: true });
    await dialog.accept();
  });
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.', { exact: true })).toBeVisible();
    await page.getByRole('link', { name: ' Home' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/')
})
test('Test case 7: Verify Test Cases Page',async({page})=>{
    await page.goto("https://automationexercise.com/")
    await page.getByRole('link', { name: ' Test Cases' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/test_cases');
})
test('Test case 8: Verify All Products and product detail page',async({page})=>{
    await page.goto("https://automationexercise.com/")
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/products');
    await expect(page.locator('.features_items')).toBeVisible();
    await expect(page.locator('.product-image-wrapper').first()).toBeVisible();
    //basically those 2 lines are doing the same things, but the first one is more specific and the second one is more general, so I will use the first one.
    await page.getByRole('link', { name: ' View Product' }).first().click();
    // await page.getByText('View Product').first().click();

    // verify product detail page, including: product name, category, price, availability, condition and brand
    const productInfo = page.locator('.product-information');
    await expect(productInfo).toBeVisible();
    await expect(productInfo.locator('h2')).toBeVisible();
    await expect(productInfo.locator('h2')).not.toHaveText('');
    await expect(productInfo.locator('p').filter({ hasText: 'Category:' })).toContainText(/Category:\s*.+/);
    // await expect(productInfo).toContainText(/Rs\.\s*\d+/);
    await expect(productInfo.locator('span').filter({ hasText: 'Rs.' }).first()).toContainText(/Rs\.\s*\d+/);
    await expect(productInfo.locator('p').filter({ hasText: 'Availability:' })).toContainText(/Availability:\s*.+/);
    await expect(productInfo.locator('p').filter({ hasText: 'Condition:' })).toContainText(/Condition:\s*.+/);
    await expect(productInfo.locator('p').filter({ hasText: 'Brand:' })).toContainText(/Brand:\s*.+/);
})
test('Test case 9: Search product',async({page})=>{
    await page.goto("https://automationexercise.com/")
    // await page.locator('ul.navbar-nav').locator('a[href="/products"]').click();
    await page.getByRole('link', { name: ' Products' }).click();
    await expect(page).toHaveURL('https://automationexercise.com/products');
    await page.getByRole('textbox', { name: 'Search Product' }).fill('Blue Top');
    await page.getByRole('button', { name: 'Search' }).click();
    
})