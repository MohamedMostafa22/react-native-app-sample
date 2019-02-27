import fetchIntercept from 'fetch-intercept';
import store from './flux/AppStore';
import config from './config';

const unregister = fetchIntercept.register({
    request: function (url, config) {
        const { token, refreshToken } = store.getState().auth;
        if (token && refreshToken) {
            config.headers.map['authorization'] = 'Bearer ' + token;
            config.headers.map['x-refresh-token'] = refreshToken;
        }
        return [url, config];
    }
});

const baseUrl = config.BASE_URL;

async function get(url) {
    try {
        return await fetch(baseUrl + url, {
            method: 'GET',
            headers: new Headers()
        });
    } catch (error) {
        console.log(error);
    }
}

async function post(url, body) {
    try {
        return await fetch(baseUrl + url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: new Headers({
                'content-type': 'application/json'
            })
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    get,
    post
};