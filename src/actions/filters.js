// SET-TEXT-FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT-BY-DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SORT-BY-AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});


// SET-START-DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET-END-DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});