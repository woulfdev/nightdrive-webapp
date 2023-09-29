class Session {
    constructor() {
        
    }

    start(username, password, keepAlive, callback) {
        if(typeof username === 'string' || username instanceof String && typeof password === 'string' || password instanceof String) {
            callback()
        }

        username = password = undefined
        return false;
    }

    validateSession(token) {
        if(typeof token === 'string' || token instanceof String) {

        }

        return null
    }

    // private functions
}