import GameService from "../services/GameService.js"

//NOTE Private Area


let _gameService = new GameService()



function _draw() {
  document.getElementById("healthBar").style.width = `${_gameService.TargetHealth}%`
  if (_gameService.TargetHealth <= 0) {
    document.getElementById("karl-img").src = "https://upload.wikimedia.org/wikipedia/commons/9/91/Karlmarxtomb.jpg"
  }
}

export default class GameController {
  constructor() {
    console.log("Hello from Game controller");
    _draw()
  }

  attack(attackChoice) {
    _gameService.attack(attackChoice)
    _draw()
  }

  reset() {
    _gameService.reset()
    _draw()
  }

}

