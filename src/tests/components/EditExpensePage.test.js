import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[2]}
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={historySpy} 
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
});