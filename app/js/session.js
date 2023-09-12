class session {
    constructor() {
        
    }

    start(username, password) {
        if(typeof username === 'string' || username instanceof String && typeof password === 'string' || password instanceof String) {
            
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
    #test() {
        console.log('test')
    }
}