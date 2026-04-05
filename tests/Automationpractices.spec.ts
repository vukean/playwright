import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


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
test('Login page Successful Login tc1',async({page})=>{
  await page.goto('https://practice.expandtesting.com/login');
  const userName = page.getByRole('textbox', { name: 'Username' })
  const passWord = page.getByRole('textbox', { name: 'Password' })
  const btnLogin = page.getByRole('button', { name: 'Login' })
  const btnLogout = page.getByRole('link', { name: 'Logout' })
  //Input userName
  await userName.fill('practice')
  await expect(userName).toHaveValue('practice')
    //Input passWord

  await passWord.fill('SuperSecretPassword!')
  await expect(passWord).toHaveValue('SuperSecretPassword!')
      await page.waitForTimeout(200);

  await btnLogin.click();
  //Verify that the user is redirected to the /secure page.
  await expect(page).toHaveURL('https://practice.expandtesting.com/secure')
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
      await page.waitForTimeout(200);

      //Verify that a Logout button is displayed.
      await expect(btnLogout).toBeVisible();
  await btnLogout.click();
  await expect(page).toHaveURL('https://practice.expandtesting.com/login')
  await expect(page.getByText('You logged out of the secure')).toBeVisible();
});
test('Login page Invalid userName',async({page})=>{
  await page.goto("https://practice.expandtesting.com/login")
  const userName = page.getByRole('textbox', { name: 'Username' })
  const passWord = page.getByRole('textbox', { name: 'Password' })
  const btnLogin = page.getByRole('button', { name: 'Login' })
  const btnLogout = page.getByRole('link', { name: 'Logout' })
    //Input passWord
  await passWord.fill('SuperSecretPassword!')
  await expect(passWord).toHaveValue('SuperSecretPassword!')
      await page.waitForTimeout(200);
  await btnLogin.click();
  //Verify that an error message "Invalid username." is displayed.
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
})

test('Login page Invalid passWord',async({page})=>{
  await page.goto("https://practice.expandtesting.com/login")
  const userName = page.getByRole('textbox', { name: 'Username' })
  const passWord = page.getByRole('textbox', { name: 'Password' })
  const btnLogin = page.getByRole('button', { name: 'Login' })
  const btnLogout = page.getByRole('link', { name: 'Logout' })
  //Input userName
  await userName.fill('hehehe')
  await expect(userName).toHaveValue('hehehe')
    //Input passWord
  await passWord.fill('SuperSecretPassword!')
  await expect(passWord).toHaveValue('SuperSecretPassword!')
      await page.waitForTimeout(200);
  await btnLogin.click();
  //Verify that an error message "Invalid username." is displayed.
  await expect(page.getByText('Your password is invalid!')).toBeVisible();
})
test('Test register with faker data', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/register');

  const username = `${faker.person.firstName().toLowerCase()}${faker.number.int({ min: 100, max: 999 })}`;
  const password = faker.internet.password({
    length: 4,
  });
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password', exact: true }).fill(password)
  await page.getByRole('textbox', { name: 'Confirm Password' }).fill(password);
  await page.getByRole('button', { name: 'Register' }).click()

  await expect(page).toHaveURL('https://practice.expandtesting.com/login')
  // alert/message box
  await expect(page.locator('#flash')).toContainText('Successfully registered, you can log in now.')
});

test('Radio button  ', async({page})=>{
  await page.goto('https://practice.expandtesting.com/radio-buttons')
  const cBlue = page.getByRole('radio', { name: 'Blue' })
  const cRed = page.getByRole('radio', { name: 'Red' })
  const cYeallow = page.getByRole('radio', { name: 'Yellow' })
  const cBlack = page.getByRole('radio', { name: 'Black' })
  const sBasketball = page.getByRole('radio', { name: 'Basketball' })
  const sFootball = page.getByRole('radio', { name: 'Football' })
  const Tennis = page.getByRole('radio', { name: 'Tennis' })

  //Check color Blue
  await cBlue.check();
  await expect(cBlue).toBeChecked();
  await page.waitForTimeout(200);
  //Check color Red
  await cRed.check();
    await expect(cRed).toBeChecked();
  await page.waitForTimeout(200);
  //Check color Yeallow
  await cYeallow.check();
      await expect(cYeallow).toBeChecked();
  await page.waitForTimeout(200);
  //Check color Black
  await cBlack.check();
      await expect(cBlack).toBeChecked();
  await page.waitForTimeout(200);

  //check Basetball
    await sBasketball.check();
      await expect(sBasketball).toBeChecked();
  await page.waitForTimeout(200);
  //check Football
      await sFootball.check();
      await expect(sFootball).toBeChecked();
    await page.waitForTimeout(200);
      //check Tennis
      await Tennis.check();
      await expect(Tennis).toBeChecked();
    await page.waitForTimeout(200);

})


test('Drag something  ',  async({page})=>{
  await page.goto('https://practice.expandtesting.com/drag-and-drop')
  const boxA = page.locator('#column-a');
  const boxB = page.locator('#column-b');
  // Drag box A to box B
  await boxA.dragTo(boxB);
  // Verify that box A is now in the position of box B
  await expect(boxA).toHaveText('B');
  await expect(boxB).toHaveText('A');  

})