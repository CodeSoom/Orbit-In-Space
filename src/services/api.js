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

export function getAuthentication() {
  return new Promise((resolve) => {
    authService.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
}

export const postData = async ({ comment, selectedPlanet }) => {
  const user = authService.currentUser.uid;
  await dbService.collection(user).add({
    comment,
    selectedPlanet,
    createdAt: Date.now(),
    createdName: authService.currentUser.uid,
  });
};
