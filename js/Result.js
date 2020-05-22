class Result {

    static moneyWin(result, bid) {
        if (result == 'Mateusz') {
            return 2 * bid;
        } else if (result == 'Brancewicz') {
            return 4 * bid;
        } else if (result == 'Misiek') {
            return 6 * bid;
        } else {
            return 0;
        }

    }

    static checkIfWin(drawResult) {

        if ((drawResult[0] === 'img/1.png' && drawResult[1] === 'img/1.png' && drawResult[2] === 'img/1.png')) {
            return 'Mateusz';
        } else if ((drawResult[0] === 'img/2.png' && drawResult[1] === 'img/2.png' && drawResult[2] === 'img/2.png')) {
            return 'Misiek';
        } else if ((drawResult[0] === 'img/3.png' && drawResult[1] === 'img/3.png' && drawResult[2] === 'img/3.png'))
            return 'Brancewicz';
        else return false;

    }

}