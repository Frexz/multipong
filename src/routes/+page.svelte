<script>
    import '../app.css'
    import { Spill } from '../klasser'

    let spill = new Spill()
    let padde = spill.padde

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

</script>

<div class="spill" style="height: {spill.hoyde}px; width: {spill.bredde}px;">
    <div class="padde" style="top: {padde.y}px; left: {padde.x}px; width: {padde.bredde}px;"/>
</div>

<svelte:window on:keydown={handleKeydown}/>