import React from 'react';
import{ connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
 
export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenesWord =  expensesCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {expensesCount} {expenesWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);