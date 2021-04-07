Feature('Home page');

Scenario('Visit the home page', ({ I }) => {
  I.amOnPage('/');

  I.see('오늘은 어떤 하루였나요?');

  I.click('로그인');
});
