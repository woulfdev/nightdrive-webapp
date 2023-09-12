class build {
    signin() {
        $(document.body).empty()

        // create login container
        $(document.body).append(jQuery('<div>', {
            id: 'login-container',
            class: 'centered'
        })).append(jQuery('<h2>', {
            text: 'Sign in'
        })).append(jQuery('<input>', {
            type: 'text',
            class: 'input default text'
        })).append(jQuery('<input>', {
            type: 'password',
            class: 'input default text'
        })).append(jQuery('<input>', {
            type: 'button',
            value: 'Sign in',
            class: 'input default button'
        }))

    }
}