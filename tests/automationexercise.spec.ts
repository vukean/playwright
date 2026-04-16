import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

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
        await page.getByRole('link', { name: ' Delete Account' }).click();
        await page.getByRole('link', { name: 'Continue' }).click();
        // await  page.getByText('Account Deleted!').waitFor({ state: 'visible' });
        // await expect(page).toHaveURL('https://automationexercise.com/account_created');
        // await expect(page.getByText('Account Created!')).toBeVisible();
        // await page.getByRole('button', { name: 'Continue' }).click();
    })