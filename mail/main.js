const mailList = ['hatakekakashi@gmail.com', 'sarutobihiruzen@alice.it', 'namikazeminato@gmail.com', 'uchihaitachi@icloud.com'];
let mailListLength = mailList.length;
let currentMail = (prompt('Inserisci la tua email:')).toLowerCase();
let access = false;

for (i=0; i<mailListLength; i++) {
    if (currentMail == mailList[i]) {
        access = true;
    }
}

if (access == true) {
    alert('Accesso Effettuato');
} else {
    alert('Accesso negato');
}