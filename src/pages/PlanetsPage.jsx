import styled from '@emotion/styled';

const Container = styled.div({
  margin: '1em 0',
})

const Title = styled.h1({
  fontSize: '1.5em',
});

const PLANETS = [
  { id: 1, mood: '행복'},
  { id: 2, mood: '뿌듯'},
  { id: 3, mood: '신남'},
  { id: 4, mood: '설렘'},
  { id: 5, mood: '덤덤'},
  { id: 6, mood: '피곤'},
  { id: 7, mood: '화남'},
  { id: 8, mood: '멘붕'},
  { id: 9, mood: '우울'},
]

export default function PlanetsPage() {
  const planets = PLANETS;

  return (
    <Container>
      <Title>행성을 클릭해주세요</Title>
      <ul>
        {planets.map(({id, mood}) => (
        <li key={id}>
          <button
            type="button">
            {mood}
          </button>
        </li>
        ))}
      </ul>
    </Container>
  );
}
