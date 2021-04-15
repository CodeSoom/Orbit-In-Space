export function getPlanets(planetsId) {
  return { id: planetsId };
}

export const postSignup = jest.fn();
export const postLogin = jest.fn();
export const getAuthentication = jest.fn();
export const getData = jest.fn();
export const postData = jest.fn();
