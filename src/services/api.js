import { authService, dbService } from './firebase';

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

export const logout = async () => {
  await authService.signOut();
};

export const postData = async ({ comment, selectedPlanet }) => {
  await dbService.collection(authService.currentUser.uid).add({
    comment,
    selectedPlanet,
    createdAt: Date.now(),
  });
};
