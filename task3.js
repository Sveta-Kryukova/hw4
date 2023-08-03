const bankAccount = {
  _balance: 1000,
  get formattedBalance() {
    return `$${this._balance}`;
  },
  set balance(amount) {
    this._balance = amount;
  },
  transfer(target, amount) {
    this.balance -= amount;
    target.balance += amount;
  }
};

