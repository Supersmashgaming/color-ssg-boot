namespace storyboard{
    function runSsgColorLogo(done: () => void) {
        let SSG = sprites.create(assets.image`Logo`);
        SSG.setPosition(260, 60)
        SSG.setVelocity(-100, 0)
        pause(1850)
        SSG.setVelocity(0, 0)
        animation.runImageAnimation(
        SSG,
        assets.animation`logoAnim`,
        500,
        true
        )
        music.play(music.stringPlayable("C5 B C5 C - - - - ", 120), music.PlaybackMode.UntilDone)

        done();
    }
    export const ColorSSGBootSequence = new BootSequence(runSsgColorLogo, 0)
}
