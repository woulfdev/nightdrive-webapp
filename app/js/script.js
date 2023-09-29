const storage = new BrowserStorage()
const builder = new Build()
const userSession = new Session()

const SERVER_ADDRESS = 'nightdrive.example.com'

$().ready(function(){
    builder.loading()
    // check if a session already exists else show sign in
    if(checkForExistingSession()) {
        // check if said session is still valid else show sign in
        if(userSession.validateSession(storage.get('token'))) {

        }
        else {
            builder.signin()
        }
    }
    else {
        builder.signin();
    }
})

// click listener's
$(document).on('click', '#btn-signin', function() {
    username = $('#inp-username').val()
    password = $('#inp-password').val()
    
    if(username && password) {
        $('#btn-signin').prop('disabled', true)
        $('#hint-inp-signin').text('').css('color', '#ffffff')
        builder.loading()
        userSession.start(username, password, $('#inp-stay-signed-in').prop('checked'), function() {})
        username = password = undefined
    }
    else {
        $('#hint-inp-signin').text('Please enter Username and Password!').css('color', '#ff0000')
    }
})

// change server address on sign in screen
$(document).on('click', '#btn-change-server', function() {
    var input = prompt('Please enter the server address:')
    if(input !== null) {
        alert(input)
    }
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