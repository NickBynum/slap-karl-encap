import Target from "../models/Target.js"
//NOTE Private Area

let _targetConfigObj = {
  health: 100,
  attackChoice: {
    slap: 5,
    kick: 10,
    wetWilly: 20
  }
}

let _target = new Target(_targetConfigObj)

//NOTE Public Area

export default class GameService {

  attack(attackChoice) {
    _target.health -= _target.attackChoice[attackChoice]
    if (_target.health < 0) {
      _target.health = 0
    }
  }


  get TargetHealth() {
    return _target.health.toString()
  }

  reset() {
    _target.health = _target.maxHealth
  }
  constructor() {
    console.log("hello from gameService")
  }
}