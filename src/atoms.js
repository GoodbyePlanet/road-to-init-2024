import { atom, createStore } from 'jotai';

export const PAGES = Object.freeze({
  HOME: 'home',
  CONFERENCE: 'conference',
  TEAM: 'team',
  SPEAKERS: 'speakers',
});

export const currentPageAtom = atom('');

export const globalStoreAtom = createStore();
