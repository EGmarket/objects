const student = {
    id: 101,
    money: 5000,
    Name: 'Faysal',
    major: 'Geography',

    costing: function(expense, rent, boroVai) {
        this.money = this.money - expense - rent + boroVai;
        return this.money;
    }
}