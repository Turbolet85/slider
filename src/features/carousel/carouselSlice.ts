import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICarouselState {
  currentPerson: number;
}

const initialState: ICarouselState = {
  currentPerson: 0,
};

export const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setCurrentPerson: (state, action: PayloadAction<number>) => {
      state.currentPerson = action.payload;
    },
  },
});

export const { setCurrentPerson } = carouselSlice.actions;
