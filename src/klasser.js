export class Spill {
    constructor() {
        this.bredde = 400
        this.hoyde = 600

        this.padde = new Padde(this.bredde, this.hoyde)
        this.baller = [new Ball(this.bredde, this.hoyde)]
        this.erFerdig = true
    }
}

export class Ball {
    constructor(spillBredde, spillHoyde) {
        this.bredde = 20
        this.x = Math.floor(Math.random()*(spillBredde - this.bredde))
        this.y = Math.floor(Math.random()*(spillHoyde / 4))
        this.vx = -0.2
        this.vy = 0.2
    }
}

export class Padde {
    constructor(spillBredde, spillHoyde) {
        this.bredde = 120
        this.x = (spillBredde / 2) - (this.bredde / 2)
        this.y = spillHoyde - 125
        this.dx = 20
    }
}