import { RootState } from '../../app/rootReducer';

export const selectCurrentPerson = (state: RootState) => state.currentPerson;
