function welcomeMessage() {
    const message = document.getElementById('welcomeMessage');
    
        message.style.display = 'block';
        message.style.marginTop = '0';
        /*message.style.backgroundColor = '#C1B8AE';*/
        message.style.backgroundColor = '#FFF';
        message.style.border = '3px solid #8ABADD';
        message.style.width = '205px';
        message.style.textAlign = 'center';

}

function exitWelcomeMessage() {
    const exitMessage = document.getElementById('welcomeMessage');
        exitMessage.style.display = 'none';
}
