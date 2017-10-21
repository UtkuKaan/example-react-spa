import moment from 'moment';

export default [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 190500,
    createdAt: 0
}, {
    id: '2',
    description: 'Gas bill',
    note: '',
    amount: 5000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 120000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];