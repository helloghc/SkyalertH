export default class server {

    URL = './media/?rest_route=/wp/v2'
    URLPipedrive = 'https://skyalertcommx.pipedrive.com/v1'
    Token = '4eea05b67e8ed8235e1f7974dcd6a7c4c5272664'

    clients = {
        production: {
            root: 'https://clients-api.skyalert.mx',
            key: 'X6am56kg6RJOcl7fJp2Q',
        },
        staging: {
            root: 'https://clients-api.stg.skyalert.mx',
            key: 'aaaaaaaaaaaaaaaaaaaa',
        },
    };

    amazon = {
        root: 'https://pofy216mff.execute-api.us-east-2.amazonaws.com/prod',
        key:'5PxU7QDbivixGNRvILET5qzhzOYC0zdO',
    };

    aws = {
        production: {
            root: 'https://c8btjlx1sg.execute-api.us-east-2.amazonaws.com/prod',
            headers:{
                'Content-Type': 'application/json',
                'x-api-key': 'uks3cgatl0cz2a5sosfbbrpi7ai4jk03',
            }
        },
        staging: {
            root: 'https://c8btjlx1sg.execute-api.us-east-2.amazonaws.com/prod',
            headers:{
                'Content-Type': 'application/json',
                'x-api-key': 'uks3cgatl0cz2a5sosfbbrpi7ai4jk03',
            }
        },
    };

    inegi = {
        root: 'https://gaia.inegi.org.mx',
        endpoints: {
            states: '/wscatgeo/mgee/',
            state: (id) => `/wscatgeo/mgem/${id}`
        },
        headers:{
            'Content-Type': 'application/json',
        }
    }

}