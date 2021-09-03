import { Voice, VoiceFilters } from "../models/voice";

export const voice1: Voice = {
  "id": "alien",
  "name": "Alien",
  "icon": "VoicesVoiceIcon01.png",
  "tags": [
    "robotic"
  ]
};

export const voice2: Voice = {
  "id": "alien2",
  "name": "Alien2",
  "icon": "VoicesVoiceIcon01.png",
  "tags": [
    "robotic"
  ]
};

export const voices: Voice[] = [voice1, voice2];
export const tags: string[] = ['robotic'];


export const filters: VoiceFilters = {
  search: 'a',
  tag: '',
  favorites: {
    favorite: false
  }
}
