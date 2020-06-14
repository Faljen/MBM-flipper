class Game {

    constructor(startMoney) {

        this.balance = new Balance(startMoney);
        this.stats = new Statistics();
        this.resultsOFDraw = [...document.querySelectorAll('img.resultOfDraw')];
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.inputBid = document.getElementById('bid');
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.spanResult = document.querySelector('.score span.result');
        this.spanNumber = document.querySelector('.score span.number');
        this.spanWin = document.querySelector('.score span.win');
        this.spanLose = document.querySelector('.score span.lose');

        this.render();

    }

    render(resultOfDraw = ['img/4.png', 'img/4.png', 'img/4.png'], money = this.balance.getMoney(), result = '', stats = [0, 0, 0], bet, wonMoney) {

        this.resultsOFDraw.forEach((element, index) => {
            element.src = resultOfDraw[index];
        })

        if (result === 'Nerd' || result === 'BlackGuy') {
            result = `WIN ${wonMoney}€!`;
            this.spanResult.style.color = 'green';
        } else if (result === 'Cat') {
            result = `BIG WIN!!! ${wonMoney}€!`;
            this.spanResult.style.color = 'green';
            this.spanResult.style.left = '42%'
        } else if (!result && result !== '') {
            result = `LOSE ${bet}€`;
            this.spanResult.style.color = 'black';
        }


        this.spanWallet.textContent = money;
        this.spanResult.textContent = result;
        this.spanNumber.textContent = stats[0];
        this.spanWin.textContent = stats[1];
        this.spanLose.textContent = stats[2];

        this.inputBid.value = '';
    }

    startGame() {

        const bet = parseInt(this.inputBid.value);

        if (bet < 2) {
            this.inputBid.value = '';
            return alert('Minimal bid is 2€ !')
        }

        if (this.inputBid.value == '') {
            return alert('Enter the bid!')
        }

        if (!this.balance.checkCanPlay(bet)) {
            this.inputBid.value = '';
            return alert('You don\'t have enough founds!')
        }

        this.balance.changeBalance(bet, '-');

        this.draw = new Draw();
        const images = this.draw.drawResult();
        const win = Result.checkIfWin(images);
        const wonMoney = Result.moneyWin(win, bet);
        this.balance.changeBalance(wonMoney);
        this.stats.addToStats(win, bet, wonMoney);


        this.render(images, this.balance.getMoney(), win, this.stats.displayStats(), bet, wonMoney);

        if (this.balance.getMoney() <= 0) {

            alert('End of the game! You don\'t have more founds... Try again!');
            location.reload();

        }

    }

}