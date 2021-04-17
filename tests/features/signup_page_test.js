Feature('Sign page');

Scenario('sign-up', ({ I }) => {
  I.amOnPage('/sign');

  I.fillField('email', 'tester@test.com');
  I.fillField('password', '123456');

  I.click('가입하기');

  // signup complete
  I.amOnPage('/sign-complete');

  I.see('회원가입을 축하합니다!');

  I.click('확인');
});
