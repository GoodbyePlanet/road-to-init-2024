import { atom, createStore } from 'jotai';

export const PAGES = Object.freeze({
  HOME: 'home',
  CONFERENCE: 'conference',
  CONTACT: 'contact',
  SPEAKERS: 'speakers',
});

export const currentPageAtom = atom(PAGES.HOME);
export const isSceneLoaded = atom(false);

export const globalStoreAtom = createStore();
