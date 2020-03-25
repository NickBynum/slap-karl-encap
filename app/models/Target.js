




export default class Target {
  constructor(data) {
    console.log("We created Karl the target")
    this.health = data.health
    this.maxHealth = data.health
    this.hits = 0
    this.attackChoice = data.attackChoice
  }
}