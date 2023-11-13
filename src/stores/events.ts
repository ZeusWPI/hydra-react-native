import { create } from 'zustand';
import { DSAEvent } from '../types/stores';

declare type Store = {
  events: DSAEvent[]
};

export const AcitivityStore = create<Store>(set => ({
  events: []
}));
