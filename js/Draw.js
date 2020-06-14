class Draw {
    constructor() {
        this.options = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'];
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