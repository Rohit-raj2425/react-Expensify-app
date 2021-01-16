import { createStore} from 'redux';

// Action generators -- functions that return action object

const incrementCount = ({ incrementBy = 1} ={}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy=1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// reducers are pure function
// Never change state and action

const countReducer = (state =  { count:0 }, action) => {
  switch (action.type) {
      case 'INCREMENT': 
        return {
          count: state.count + action.incrementBy
        };
      case 'DECREMENT':
        return {
          count: state.count - action.decrementBy
        };
      case 'SET':
        return {
          count: action.count
        };
      case 'RESET':
        return {
          count: 0
        };
      default:
        return state;
  }

};

const store = createStore( countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Actions

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount( {incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy:10 }));

store.dispatch(setCount({ count: 100 }));

