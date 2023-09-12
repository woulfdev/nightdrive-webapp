const storage = new browserStorage()
const builder = new build()
const userSession = new session()

$().ready(function(){
    if(checkExistingSession()) {

    }
    else {
        builder.signin();
    }
})

// check if valid session credentials are stored
function checkExistingSession() {
    var token = storage.get('token')
    var tokenLifetime = storage.get('token_lifetime')
    var sessionStart = storage.get('session_start')
    var sessionEnd = storage.get('session_end')

    if(token === null || sessionStart === null || tokenLifetime === null || sessionEnd) {
        return false
    }

    // if all required fields are set check if session end is in the future
    if(parseInt(sessionEnd) > Date.now()) {
        return true
    }
    else {
        return false
    }
}