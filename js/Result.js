class Result {

    static moneyWin(result, bid) {
        if (result == 'Nerd') {
            return 2 * bid;
        } else if (result == 'BlackGuy') {
            return 4 * bid;
        } else if (result == 'Cat') {
            return 6 * bid;
        } else {
            return 0;
        }

    }

    static checkIfWin(drawResult) {

        if ((drawResult[0] === 'img/1.jpg' && drawResult[1] === 'img/1.jpg' && drawResult[2] === 'img/1.jpg')) {
            return 'Nerd';
        } else if ((drawResult[0] === 'img/2.jpg' && drawResult[1] === 'img/2.jpg' && drawResult[2] === 'img/2.jpg')) {
            return 'Cat';
        } else if ((drawResult[0] === 'img/3.jpg' && drawResult[1] === 'img/3.jpg' && drawResult[2] === 'img/3.jpg'))
            return 'BlackGuy';
        else return false;

    }

}