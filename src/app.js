const checkbox = document.querySelector('#checkbox')

// document.body.style.setProperty('--greyFont', 'purple')
    
if ( window.matchMedia( '(prefers-color-scheme: dark)').matches ) {
    checkbox.setAttribute('checked', true)
} else {
    checkbox.removeAttribute('checked', true)
}

checkbox.addEventListener('change', function(event) {
    if ( this.checked ) { 
        document.body.classList.add('is-dark-mode')
        document.body.classList.remove('is-light-mode')
     } else {
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
    }

})

// --greyCardDark: #252b43;
// --greyFont: #8088ad;
// --greyCard: #252b43;
// --bodyBackground: #1d2029;
// --bodyFontColor: white;
// --switchSpinner: #252b43;
// --switchBackground: linear-gradient(to right, #4796d2 0%, #37ce8f 100%);
