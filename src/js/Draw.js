class Draw {
    constructor() {
        this.options = ['img/1.png', 'img/2.png', 'img/3.png'];
        let _drawResult = this.drawResult();
    }

    drawResult() {

        let resultsArray = [];

        for (let i = 0; i < this.options.length; i++) {
            let index = Math.floor(Math.random() * this.options.length);
            resultsArray.push(this.options[index]);

        }
        return resultsArray;
    }
}