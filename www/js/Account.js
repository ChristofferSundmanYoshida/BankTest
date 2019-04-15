class Account {

  constructor(name){
    this.name = name;
    this.balance = 0;
    this.history = [];
    this.accountNumber = this.createAccountNumber()
  }

  createAccountNumber(){
    // create a random 9-digit number with a hyphen after digit 4
    return ((Math.random() + .1) * 0.9 * 10000).toFixed(6).replace(/\./,'-');
  }

  deposit(label, amount){
    this.balance += amount;
    this.history.unshift({label: label, amount: amount, time: this.formatTime()});
  }

  withdraw(label, amount){
    this.deposit(label, -amount);
  }

  formatTime(){
    return new Intl.DateTimeFormat(
      'se-SV', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }).format(new Date());
  }

}