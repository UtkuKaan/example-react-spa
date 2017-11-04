import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = '2d93jr2jsot0kf3';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});