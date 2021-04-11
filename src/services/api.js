import { authService } from './firebase';

import planets from '../data/planets';

export function fetchPlanets() {
  return planets;
}

export const postSignUp = async ({ email, password }) => {
  await authService.createUserWithEmailAndPassword(email, password);
};

export const postLogin = async ({ email, password }) => {
  await authService.signInWithEmailAndPassword(email, password);
};
