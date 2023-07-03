import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { longList } from '../../../public/data';

interface IDataSlice {
  id: number;
  image: string;
  name: string;
  title: string;
  quote: string;
}

const initialState: IDataSlice[] = longList;

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IDataSlice[]>) => {
      state.length = 0;
      state.push(...action.payload);
    },
  },
});

export const { setData } = dataSlice.actions;
