import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'Ale',
//     'email': 'ale@ale.com.br'
// });

mock.onPost('/api/home/login').reply((config) => {
    // console.log(config)

    // transforma o json(string - data) em um objeto com props
    const { email, password } = JSON.parse(config.data);
    // console.log(email, password)

    if (email !== 'ale@ale.com.br' || password !== 'admin') {
        return [400, { message: 'Estão invalidos os dados' }]
    }

    const user = {
        id: 1,
        name: 'Alexandre CM',
        username: 'Ale',
        email: 'ale@ale.com.br'
    }


    return [200, { user }]
});

