import { test, expect } from '@playwright/test';

test('Test input Field', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/inputs');

  // Input Number
  const numberInput = page.getByRole('spinbutton', { name: 'Input: Number' })
  await numberInput.fill('100');
  await expect(numberInput).toHaveValue('100');

    // Input Number click arrowup + check each time press arrowUp
    const numberArrowUp =page.getByRole('spinbutton', { name: 'Input: Number' })
    await numberArrowUp.press('ArrowUp');
    await expect(numberArrowUp).toHaveValue('101')
    for (let i = 0; i < 10; i++) {
    await numberArrowUp.press('ArrowUp');
    await page.waitForTimeout(200);
    await expect(numberArrowUp).toHaveValue(String(102 + i));
  }
      await expect(numberArrowUp).toHaveValue('111');

 // Input Number click arrowup + check each time press arrowDown
    const numberArrowDown =page.getByRole('spinbutton', { name: 'Input: Number' })
    await numberArrowDown.press('ArrowDown');
    await expect(numberArrowDown).toHaveValue('110')
    for (let i = 0; i < 10; i++) {
    await numberArrowDown.press('ArrowDown');
    await page.waitForTimeout(200);
    await expect(numberArrowDown).toHaveValue(String(109 - i));
  }
      await expect(numberArrowDown).toHaveValue('100');

  // Input Text
    const inputText = page.getByRole('textbox', { name: 'Input: Text' })
    await inputText.fill("A Lannister always pays his debts")
    await expect(inputText).toHaveValue('A Lannister always pays his debts')

  // Input Password
  const passwordInput = page.getByRole('textbox', { name: 'Input: Password' })
  await passwordInput.fill('password123');
  await expect(passwordInput).toHaveValue('password123');

  // Input Date
  const dateInput = page.getByRole('textbox', { name: 'Input: Date' })
  await dateInput.fill('2025-04-10');
  await expect(dateInput).toHaveValue('2025-04-10');
});
test('Login page',async({page})=>{
  await page.goto('https://practice.expandtesting.com/login');
  const userName = page.getByRole('textbox', { name: 'Username' })
  const passWord = page.getByRole('textbox', { name: 'Password' })
  await userName.fill('practice')
  await expect(userName).toHaveValue('practice')
  await passWord.fill('SuperSecretPassword!')
  await expect(passWord).toHaveValue('SuperSecretPassword!')
  const btnLogin = page.getByRole('button', { name: 'Login' })
  await btnLogin.click();
  expect 
  
});