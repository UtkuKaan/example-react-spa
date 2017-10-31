import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Internet bill',
        note: '',
        amount: 4500,
        createdAt: 10000
    };
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const updates = { description: 'Updated rent', createdAt: 999 };
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([{ ...expenses[0], ...updates }, expenses[1], expenses[2]]);
});

test('should not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { description: 'UPDATED' }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[2]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[2]]);
});