const mailList = ['hatakekakashi@gmail.com', 'sarutobihiruzen@alice.it', 'namikazeminato@gmail.com', 'uchihaitachi@icloud.com'];
let mailListLength = mailList.length;
let currentMail = prompt('Inserisci la tua email:');
let access = false;

if (currentMail == null || currentMail == '') {
    alert('Inserire correttamente il dato');
} else {
    currentMail.toLowerCase();
    for (i=0; i<mailListLength; i++) {
        if (currentMail == mailList[i]) {
            access = true;
        }
    }
}

if (access) {
    alert('Accesso Effettuato');
} else {
    alert('Accesso negato');
}