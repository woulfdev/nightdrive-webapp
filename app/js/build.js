class Build {
    // build the sign in page
    signin() {        
        this.loading()
        document.title = getLocalString('txt_app_name') + ' - ' + getLocalString('txt_header_signin')
        // location.href = location.href + '#/signin'

        this.#clear()

        // create login container
        $(document.body).append(jQuery('<div>', {
            id: 'login-container',
            class: 'centered container'
        }))
        $('#login-container').append(jQuery('<div>', {
            id: 'login-box',
            class: 'centered box '
        }))
        $('#login-box').append(jQuery('<h2>', {
            text: getLocalString('txt_header_signin'),
            class: 'text header centered'
        })).append(jQuery('<input>', {
            id: 'inp-username',
            type: 'text',
            name: 'username',
            placeholder: getLocalString('placeholder_username'),
            class: 'input default text stacked center'
        })).append(jQuery('<input>', {
            id: 'inp-password',
            type: 'password',
            name: 'password',
            placeholder: getLocalString('placeholder_password'),
            class: 'input default text stacked center'
        })).append(jQuery('<p>', {
            id: 'hint-inp-signin',
            class: 'text centered'
        })).append(jQuery('<input>', {
            id: 'inp-stay-signed-in',
            type: 'checkbox',
            class: 'input default checkbox'
        })).append(jQuery('<label>', {
            for: 'inp-stay-signed-in',
            text: getLocalString('lable_staysignedin')
        })).append(jQuery('<input>', {
            id: 'btn-signin',
            type: 'button',
            value: getLocalString('bnt_signin'),
            class: 'input default big button stacked center'
        })).append(jQuery('<p>', {
            id: 'hint-sign-in-server',
            html: getLocalString('txt_signinserver') + ' <b id="btn-change-server" title="Change" style="cursor:pointer">' + SERVER_ADDRESS + '</b>.',
            class: 'text centered'
        }))
    }

    profile() {
        this.loading()
        document.title = 'NightDrive - Profile'

        this.#clear()

        $(document.body).append(jQuery('<div>', {
            id: 'profile-container',
            class: 'centered container'
        }))
        $('#profile-container').append(jQuery('<div>', {
            id: 'profile-box',
            class: 'centered box'
        }))
        $('#profile-box').append(jQuery('<h2>', {
            text: 'Profile'
        }))
    }

    // show loading icon
    loading() {
        this.#clear()

        $(document.body).append(jQuery('<div>', {
            id: 'loader-container'
        }))
        $('#loader-container').append(jQuery('<span>', {
            class: 'loader'
        }))
    }

    #clear() {
        $(document.body).empty()
    }
}