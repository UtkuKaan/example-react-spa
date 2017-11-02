import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let startEditExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    startEditExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[2]}
            startEditExpense={startEditExpenseSpy}
            startRemoveExpense={startRemoveExpenseSpy}
            history={historySpy}
        />
    );
});

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(startEditExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
});

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
});