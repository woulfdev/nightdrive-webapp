class browserStorage {
    #mode

    constructor() {
        
    }

    get(key) {
        if(typeof key === 'string' || key instanceof String) {
            return localStorage.getItem(key)
        }
        else {
            return null
        }
    }

    #getItem() {

    }
}