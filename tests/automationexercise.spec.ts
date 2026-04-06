import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Test case 1: Register New User', async ({ page }) => {
        const username = `${faker.person.firstName().toLowerCase()}${faker.number.int({ min: 100, max: 999 })}`;
        const email = faker.internet.email();
        const password = faker.internet.password({
            length: 4,
        });
        await page.goto('http://automationexercise.com/');
        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await expect(page).toHaveURL('https://automationexercise.com/login')
        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Name' }).fill(username);
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill(email);
        await page.getByRole('button', { name: 'Signup' }).click();
        await expect(page).toHaveURL('https://automationexercise.com/signup');
        await expect(page.getByRole('textbox', { name: 'Name *', exact: true })).toHaveValue(username);
        await expect(page.getByRole('textbox', { name: 'Email *' })).toHaveValue(email);

    })