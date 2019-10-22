function printAge() {
    let test = prompt(`How old are you ?`, '');

    (test < 6) ? alert(`You are too young`): (test < 18) ? alert(`Hi ! `) : (test < 100) ? alert(`Greetings`) : alert(`What an unusual age !`);

}


function speed() {

    let enterSpeed = prompt(`Speed`, '');

    (enterSpeed < 40) ? alert('Vous roulez beaucoup trop doucement ! :/  '): (enterSpeed < 60) ? alert('Accélérez un petit peu !') :
        (enterSpeed < 90) ? alert('Vous roulez à la bonne vitesse , bonne route =)  ') :
        (enterSpeed < 100) ? alert(`Ralentissez un peu `) : (enterSpeed < 120) ? alert(`Vous roulez beaucoup trop vite ! `) :
        alert(` BX-544-82 les gendarmes vous suivent !`)

}

function verify() {
    let year = prompt(`YEAR ?`);
    const cond = 2019;


    if (year == cond) {
        alert(`Good`);

    }
}

function auth() {

    let userAccount = prompt('Choose a username please', '');
    let passswordInitialize = prompt(`Choose a password`, ``)


    let currentUser = prompt("Who's there ?", '');

    if (currentUser == 'Admin' || currentUser == userAccount) {
        let password = prompt('Passsord ?', '');


        if (password == passswordInitialize) {
            alert(`Welcome ${currentUser} :), you have been registred succesfully`);
        } else if (password == null || password == '') {
            alert(`Canceled`);
        } else {
            alert(`Wrong passsword`);
        }
    } else if (currentUser == null || currentUser == '') {
        alert('canceled')
    } else {
        alert(`"${currentUser.toUpperCase()}" is not registred :/`)
    }


}