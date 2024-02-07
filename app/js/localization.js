class Localization {
    #language = 'en'

    constructor(languageCode) {
        this.#language = languageCode
    }

    string(key) {
        if(typeof key === 'string' || key instanceof String) {
            return key
        }
        else {
            return null
        }
    }
}