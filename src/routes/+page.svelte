<script>
    import '../app.css'
    import { Spill } from '../klasser'

    let spill = new Spill()
    let padde = spill.padde
    let intervall
    let tidsintervall = 5

    startSpill()

    function handleKeydown(e) {
        if (e.keyCode == 37) {
            padde.x -= padde.dx
        } else if (e.keyCode == 39) {
            padde.x += padde.dx
        }

        if (padde.x < 0) {
            padde.x = 0
        } else if (padde.x > spill.bredde - padde.bredde) {
            padde.x = spill.bredde - padde.bredde
        }


        spill = spill
    }

    function startSpill() {
        intervall = setInterval(() => {
            sjekkKollisjon()
            update()
        }, tidsintervall);
    }

    function update() {
        spill.baller.forEach((ball) => {
            ball.x += ball.vx*tidsintervall
            ball.y += ball.vy*tidsintervall
        })

        spill = spill
    }

    function sjekkKollisjon() {
        spill.baller.forEach((ball) => {
            // Venstre
            if (ball.x <= 0) {
                ball.vx *= -1
            // Høyre
            } else if (ball.x >= spill.bredde - ball.bredde) {
                ball.vx *= -1
            // Topp
            } else if (ball.y <= 0) {
                ball.vy *= -1
            } else if (
                ball.x >= padde.x  &&
                ball.x <= padde.x + padde.bredde &&
                ball.y == padde.y - ball.bredde
            ) {
                ball.vy *= -1

            }
        })

        spill = spill
    }

</script>

<div class="spill" style="height: {spill.hoyde}px; width: {spill.bredde}px;">
    <div class="padde" style="top: {padde.y}px; left: {padde.x}px; width: {padde.bredde}px;"/>
    {#each spill.baller as ball}
        <div class="ball" style="top: {ball.y}px; left: {ball.x}px;"/>
    {/each}
</div>

<svelte:window on:keydown={handleKeydown}/>