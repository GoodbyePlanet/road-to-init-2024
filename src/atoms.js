import { atom, createStore } from 'jotai';

export const PAGES = Object.freeze({
  HOME: 'home',
  CONFERENCE: 'conference',
  CONTACT: 'contact',
  SPEAKERS: 'speakers',
});

export const currentPageAtom = atom(PAGES.HOME);
export const isSceneLoadedAtom = atom(false);
export const isSoundEnabled = atom(false);
export const isAtHome = atom(false);

export const globalStoreAtom = createStore();
