import { createSelector } from 'reselect';

// A function that gets the state and returns the directory state
const selectDirectory = state => state.directory;

// Takes in selectDirectory and outputs directory sections
export const selectDirectorySections = createSelector(
	[selectDirectory],
	directory => directory.sections
);
