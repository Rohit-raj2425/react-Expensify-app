import { login , logout} from '../../actions/auth';

test('should setup login action object', () => {
    const action = login('13');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '13'
    });
});

test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});