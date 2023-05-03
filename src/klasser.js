export class Spill {
    constructor() {
        this.bredde = 400
        this.hoyde = 600

        this.padde = new Padde(this.bredde, this.hoyde)
        this.baller = [new Ball()]
        this.erFerdig = true
    }
}

export class Ball {
    constructor() {
        this.x = 0
        this.y = 0
    }
}

export class Padde {
    constructor(spillBredde, spillHoyde) {
        this.bredde = 120
        this.x = (spillBredde / 2) - (this.bredde / 2)
        this.y = spillHoyde - 125
        this.dx = 10
    }
}