class Statistics {
    constructor() {
        this.results = [];
    }

    addToStats(win, bid, wonMoney) {
        let gameResult = {
            win: win,
            bid: bid,
            wonMoney: wonMoney
        }

        this.results.push(gameResult);
    }

    displayStats() {
        let games = this.results.length;
        let wins = this.results.filter(result => result.win).length;
        let bestWin = Math.max.apply(Math, this.results.map(function (o) {
            return o.wonMoney;
        }));

        return ([games, wins, bestWin]);
    }

}