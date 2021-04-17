Feature('Login page');

Scenario('log-in', ({ I }) => {
  I.amOnPage('/login');

  I.fillField('email', 'tester@test.com');
  I.fillField('password', '123456');

  I.click('로그인');
});
