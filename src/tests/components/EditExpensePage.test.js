import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;
beforeEach(() => {
    editExpenseSpy = jest.fn();
    startRemoveExpenseSpy = jest.fn();
    historySpy = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[2]}
            editExpense={editExpenseSpy}
            startRemoveExpense={startRemoveExpenseSpy}
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

test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id);
    expect(historySpy.push).toHaveBeenLastCalledWith('/')
});