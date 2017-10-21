//
// Action generators for Filters Reducer
//

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

// SET_START_DATE
export const setStartDate = (moment) => ({
    type: 'SET_START_DATE',
    startDate: moment
});

// SET_END_DATE
export const setEndDate = (moment) => ({
    type: 'SET_END_DATE',
    endDate: moment
});