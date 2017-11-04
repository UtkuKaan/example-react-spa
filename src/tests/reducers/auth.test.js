import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '169dj29dj00jr9c2'
    };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid: action.uid });
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '1olkcn58yf2s' }, action);
    expect(state).toEqual({});
});