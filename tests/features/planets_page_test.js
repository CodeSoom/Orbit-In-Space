Feature('planets page');

const planets = [
  { id: 1, mood: '행복' },
  { id: 2, mood: '뿌듯' },
  { id: 3, mood: '신남' },
  { id: 4, mood: '설렘' },
  { id: 5, mood: '덤덤' },
  { id: 6, mood: '피곤' },
  { id: 7, mood: '화남' },
  { id: 8, mood: '멘붕' },
  { id: 9, mood: '우울' },
];

Scenario('Visit the planets page', ({ I }) => {
  I.amOnPage('/planets');

  I.see('행성을 클릭해주세요');

  planets.forEach(({ mood }) => {
    I.see(mood);
  });

  I.click('행복');

  // planets/:id page

  I.see('오늘은 행복 행성이네요');

  I.see('기록하기');

  // modal 클릭
  I.click('기록하기');

  I.see('오늘의 기분을 기록해보세요');

  I.click('확인');
});
