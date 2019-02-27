import { post } from '../../request.js';

async function login(username, password) {
    if (!username || !password)
        return;
    try {
        const response = await post('/auth/login/login', {
            username,
            password
        });
        if (response)
            return jsonResponse = await response.json();
    } catch (error) {
        console.log(error)
    }
}

export default {
    login
};