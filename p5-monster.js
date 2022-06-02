class Monster {
    constructor({monsterName="Unknown", minimumLife=0, currentLife=100}) {
      this.monsterName = monsterName;
      this.minimumLife = minimumLife;
      this.currentLife = currentLife;
      this.isAlive = Boolean(this.currentLife >= this.minimumLife);
    }
    updateLife(lifeChangeAmount) {
        let liferemain = this.currentLife - lifeChangeAmount;
        this.currentLife = liferemain > 0 ? liferemain : 0;
        this.isAlive = this.currentLife >= this.minimumLife ? true : false;
    }
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
        let lifedrain = this.getRandomInteger(minimumLifeDrain, maximumLifeDrain+1);
        this.updateLife(lifedrain);
      console.log(this.monsterName + ' random power drain of ' + lifedrain);
    }
    
    printLife() {
      let status_string = this.isAlive ? "Alive" : "Dead";
      console.log('Monster: ' + this.monsterName + ', Minimum Life: ' + this.minimumLife + ', Current Life: ' + this.currentLife + ', Status: ' + status_string);
    }
    // Returns a random number between min (inclusive) and max (exclusive)
    getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }

module.exports = { Monster }