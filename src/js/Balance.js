class Balance {
    constructor(money) {

        let _money = money;

        this.getMoney = () => {
            return _money;
        }

        this.checkCanPlay = (bet) => {

            if (_money >= bet) {
                return true;
            } else return false;

        }

        this.changeBalance = (value, type = '+') => {

            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    _money += value;
                } else if (type === '-') {
                    _money -= value;
                }
            } else {
                alert("Podałeś nieprawidłową wartość!")
                throw Error('Nieprawidłowa wartość');
            }
        }

    }
}