const storage = new browserStorage()
const builder = new build()
const userSession = new session()

$().ready(function(){
    if(checkForExistingSession()) {
        if(userSession.validateSession(storage.get('token'))) {

        }
    }
    else {
        builder.signin();
    }
})

// click listener's
$(document).on('click', '#btn-signin', function(){
    userSession.start($('#inp-username').val(), $('#inp-password').val())
    $('#btn-signin').prop('disabled', true)
})

// check if valid session credentials are stored
function checkForExistingSession() {
    var token = storage.get('token')
    var tokenLifetime = storage.get('token_lifetime')
    var sessionStart = storage.get('session_start')
    var sessionEnd = storage.get('session_end')

    if(token === null || sessionStart === null || tokenLifetime === null || sessionEnd === null) {
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