namespace SpriteKind {
    export const Wall = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const boss1 = SpriteKind.create()
    export const boss2 = SpriteKind.create()
    export const boss3 = SpriteKind.create()
    export const Powerup = SpriteKind.create()
    export const shield = SpriteKind.create()
    export const stamina = SpriteKind.create()
    export const blast = SpriteKind.create()
    export const slwtme = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Multishot = SpriteKind.create()
    export const beam = SpriteKind.create()
    export const Luck = SpriteKind.create()
    export const invert = SpriteKind.create()
    export const God = SpriteKind.create()
    export const BetterFood = SpriteKind.create()
    export const GhostR = SpriteKind.create()
    export const GhostB = SpriteKind.create()
    export const GhostP = SpriteKind.create()
    export const GhostO = SpriteKind.create()
    export const GhostG = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.GhostR, assets.tile`myTile3`, function (sprite, location) {
    if (Pacman == true) {
        timer.throttle("Blinky move", 500, function () {
            GhostMovement = randint(1, 4)
            if (GhostMovement == 1) {
                Blinky.setVelocity(0, 18 * difficulty)
            } else if (GhostMovement == 2) {
                Blinky.setVelocity(0, -18 * difficulty)
            } else if (GhostMovement == 3) {
                Blinky.setVelocity(18 * difficulty, 0)
            } else if (GhostMovement == 4) {
                Blinky.setVelocity(-18 * difficulty, 0)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GhostR, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . 5 5 . . . . . 5 5 . . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 . . . 5 5 5 5 . 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . 5 . . . . . . . 5 . . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . 5 . . . . . . . 5 . . 
        . . 5 5 . . . . . 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        `],
    50,
    false
    )
    timer.after(350, function () {
        carnival.onGameOverExpanded(carnival.WinTypes.Lose)
    })
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(20)
    sprites.destroy(Point_boss)
    SpawnPowerup()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Pacman == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . 5 5 . . . . . 5 5 . . 
            . 5 5 5 . . . . . 5 5 5 . 
            . 5 5 5 5 . . . 5 5 5 5 . 
            5 5 5 5 5 . . . 5 5 5 5 5 
            5 5 5 5 5 . . . 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 . . . . 
            `,img`
            . . . . 5 . . . 5 . . . . 
            . . 5 5 5 . . . 5 5 5 . . 
            . 5 5 5 5 . . . 5 5 5 5 . 
            . 5 5 5 5 5 . 5 5 5 5 5 . 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 . . . . 
            `,img`
            . . . . 5 5 5 5 5 . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 . . . . 
            `],
        150,
        true
        )
    }
})
function PacMan () {
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundColor(15)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . 5 5 5 5 5 5 5 . . . . . . . . 
        . 5 5 5 5 . . . . . . . . . . . 
        . 5 5 5 5 5 5 5 . . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    mySprite.setScale(1, ScaleAnchor.Middle)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
    scene.cameraFollowSprite(mySprite)
    controller.moveSprite(mySprite, 90, 90)
    info.setScore(0)
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value)
    }
    BetterPac = false
    difficulty = game.askForNumber("select difficulty", 1)
    carnival.showTimer(true)
    carnival.startTimer()
    Blinky = sprites.create(img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 1 1 2 2 2 2 1 1 2 2 2 . . 
        . 2 1 1 1 1 2 2 1 1 1 1 2 2 2 . 
        . 2 8 8 1 1 2 2 8 8 1 1 2 2 2 . 
        . 2 8 8 1 1 2 2 8 8 1 1 2 2 2 . 
        . 2 2 1 1 2 2 2 2 1 1 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 . 
        . 2 . . . 2 2 . . 2 2 . . . 2 . 
        `, SpriteKind.GhostR)
    tiles.placeOnRandomTile(Blinky, assets.tile`myTile3`)
    Blinky.setVelocity(0, 18 * difficulty)
    Inky = sprites.create(img`
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . 9 1 1 9 9 9 9 1 1 9 9 9 . . 
        . 9 1 1 1 1 9 9 1 1 1 1 9 9 9 . 
        . 9 8 8 1 1 9 9 8 8 1 1 9 9 9 . 
        . 9 8 8 1 1 9 9 8 8 1 1 9 9 9 . 
        . 9 9 1 1 9 9 9 9 1 1 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . 9 9 . 9 9 9 . . 9 9 9 . 9 9 . 
        . 9 . . . 9 9 . . 9 9 . . . 9 . 
        `, SpriteKind.GhostB)
    tiles.placeOnRandomTile(Inky, assets.tile`myTile3`)
    Inky.setVelocity(0, 18 * difficulty)
    Pinky = sprites.create(img`
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . 3 1 1 3 3 3 3 1 1 3 3 3 . . 
        . 3 1 1 1 1 3 3 1 1 1 1 3 3 3 . 
        . 3 8 8 1 1 3 3 8 8 1 1 3 3 3 . 
        . 3 8 8 1 1 3 3 8 8 1 1 3 3 3 . 
        . 3 3 1 1 3 3 3 3 1 1 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 . 3 3 3 . . 3 3 3 . 3 3 . 
        . 3 . . . 3 3 . . 3 3 . . . 3 . 
        `, SpriteKind.GhostP)
    tiles.placeOnRandomTile(Pinky, assets.tile`myTile3`)
    Pinky.setVelocity(0, 18 * difficulty)
    Clyde = sprites.create(img`
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 4 4 4 4 4 . . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
        . . 4 1 1 4 4 4 4 1 1 4 4 4 . . 
        . 4 1 1 1 1 4 4 1 1 1 1 4 4 4 . 
        . 4 8 8 1 1 4 4 8 8 1 1 4 4 4 . 
        . 4 8 8 1 1 4 4 8 8 1 1 4 4 4 . 
        . 4 4 1 1 4 4 4 4 1 1 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 . 4 4 4 . . 4 4 4 . 4 4 . 
        . 4 . . . 4 4 . . 4 4 . . . 4 . 
        `, SpriteKind.GhostO)
    tiles.placeOnRandomTile(Clyde, assets.tile`myTile3`)
    Clyde.setVelocity(0, 18 * difficulty)
    Stinky = sprites.create(img`
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 1 1 7 7 7 7 1 1 7 7 7 . . 
        . 7 1 1 1 1 7 7 1 1 1 1 7 7 7 . 
        . 7 8 8 1 1 7 7 8 8 1 1 7 7 7 . 
        . 7 8 8 1 1 7 7 8 8 1 1 7 7 7 . 
        . 7 7 1 1 7 7 7 7 1 1 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 . 7 7 7 . . 7 7 7 . 7 7 . 
        . 7 . . . 7 7 . . 7 7 . . . 7 . 
        `, SpriteKind.GhostG)
    tiles.placeOnRandomTile(Stinky, assets.tile`myTile3`)
    Stinky.setVelocity(0, 18 * difficulty)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BetterFood, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    BetterPac = true
    timer.after(10000, function () {
        BetterPac = false
    })
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Wall, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.GhostB, assets.tile`myTile3`, function (sprite, location) {
    if (Pacman == true) {
        timer.throttle("Inky move", 500, function () {
            GhostMovement = randint(1, 4)
            if (GhostMovement == 1) {
                Inky.setVelocity(0, 18 * difficulty)
            } else if (GhostMovement == 2) {
                Inky.setVelocity(0, -18 * difficulty)
            } else if (GhostMovement == 3) {
                Inky.setVelocity(18 * difficulty, 0)
            } else if (GhostMovement == 4) {
                Inky.setVelocity(-18 * difficulty, 0)
            }
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shoot == true) {
        if (ammo > 1) {
            if (powershot == false) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 2 2 . . . . . . 
                    . . . . . . 2 3 1 3 2 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 3 1 1 1 3 . . . . . 
                    . . . . . . 2 1 1 1 3 . . . . . 
                    . . . . . . 2 1 1 1 2 . . . . . 
                    . . . . . . 2 3 1 3 2 . . . . . 
                    . . . . . . . 3 1 3 . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . 2 1 2 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -100)
                ammo += -1
                statusbar.value += -1
                music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            } else if (powershot == true) {
                projectile2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 2 2 2 . . . . . . 
                    . . . . . 2 1 1 1 1 2 . . . . . 
                    . . . . 2 1 1 1 1 1 1 2 . . . . 
                    . . . . 2 1 1 1 1 1 1 2 . . . . 
                    . . . . 2 1 1 1 1 1 1 2 . . . . 
                    . . . . 2 1 1 1 1 1 1 2 . . . . 
                    . . . . . 2 1 1 1 1 3 . . . . . 
                    . . . . . 2 3 1 1 1 2 . . . . . 
                    . . . . . . 3 1 1 3 2 . . . . . 
                    . . . . . . 2 3 1 2 . . . . . . 
                    . . . . . . 2 3 1 2 . . . . . . 
                    . . . . . . . 3 1 3 . . . . . . 
                    . . . . . . . 3 1 3 . . . . . . 
                    . . . . . . . 3 1 3 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -100)
                ammo += -1
                statusbar.value += -1
                music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Pacman == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . 5 5 5 5 5 5 . . . . 
            . 5 5 5 5 5 5 5 5 5 5 . . 
            5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 
            . . . . . 5 5 5 5 5 5 5 5 
            . . . . . . . . 5 5 5 5 5 
            . . . . . 5 5 5 5 5 5 5 5 
            . . 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 . . . . 
            `,img`
            . . . . 5 5 5 5 5 . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . . . 5 5 5 5 5 5 5 5 5 5 
            . . . . . . 5 5 5 5 5 5 5 
            . . . 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 . . . . 
            `,img`
            . . . . 5 5 5 5 5 . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 . . . . 
            `],
        150,
        true
        )
    }
})
info.onScore(229, function () {
    if (Pacman == true) {
        carnival.onGameOverExpanded(carnival.WinTypes.Timed)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (powershot == false) {
        if (whoops == false) {
            sprites.destroy(sprite, effects.fire, 1)
            sprites.destroy(otherSprite)
            info.changeScoreBy(1)
        } else if (whoops == true) {
            sprites.destroy(sprite, effects.fire, 1)
            sprites.destroy(otherSprite)
            info.changeScoreBy(-5)
        }
    } else if (powershot == true) {
        if (whoops == false) {
            sprites.destroy(sprite, effects.fire, 1)
            info.changeScoreBy(1)
        } else if (whoops == true) {
            sprites.destroy(sprite, effects.fire, 1)
            info.changeScoreBy(-5)
        }
    }
})
scene.onOverlapTile(SpriteKind.GhostP, assets.tile`myTile3`, function (sprite, location) {
    if (Pacman == true) {
        timer.throttle("Pinky move", 500, function () {
            GhostMovement = randint(1, 4)
            if (GhostMovement == 1) {
                Pinky.setVelocity(0, 18 * difficulty)
            } else if (GhostMovement == 2) {
                Pinky.setVelocity(0, -18 * difficulty)
            } else if (GhostMovement == 3) {
                Pinky.setVelocity(18 * difficulty, 0)
            } else if (GhostMovement == 4) {
                Pinky.setVelocity(-18 * difficulty, 0)
            }
        })
    }
})
info.onCountdownEnd(function () {
    mySprite = sprites.create(img`
        .......cd.......
        .......cd.......
        .......cd.......
        .......cb.......
        .......ff.......
        .......c6.......
        .......ff.......
        .......86.......
        ......8898......
        ......8698......
        .....ccc888.....
        ....88666988....
        ..8fffcceeff88..
        .88888866669688.
        8888888866696688
        8888888866669688
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `, SpriteKind.Player)
    mySprite.setPosition(80, 120)
    controller.moveSprite(mySprite, 150, 0)
    mySprite.setStayInScreen(true)
    shoot = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles9, function (sprite, location) {
    mySprite.setPosition(336, 185)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GhostP, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . 5 5 . . . . . 5 5 . . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 . . . 5 5 5 5 . 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . 5 . . . . . . . 5 . . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . 5 . . . . . . . 5 . . 
        . . 5 5 . . . . . 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        `],
    50,
    false
    )
    timer.after(350, function () {
        carnival.onGameOverExpanded(carnival.WinTypes.Lose)
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Pacman == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . 5 5 5 5 5 5 . . . 
            . . 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 . . 
            5 5 5 5 5 5 5 5 . . . . . 
            5 5 5 5 5 . . . . . . . . 
            5 5 5 5 5 5 5 5 . . . . . 
            5 5 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 
            . . 5 5 5 5 5 5 5 5 5 5 . 
            . . . . 5 5 5 5 5 5 . . . 
            `,img`
            . . . . 5 5 5 5 5 . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 . . . 
            5 5 5 5 5 5 5 . . . . . . 
            5 5 5 5 5 5 5 5 5 5 . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 . . . . 
            `,img`
            . . . . 5 5 5 5 5 . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 . . . . 
            `],
        150,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GhostB, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . 5 5 . . . . . 5 5 . . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 . . . 5 5 5 5 . 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . 5 . . . . . . . 5 . . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . 5 . . . . . . . 5 . . 
        . . 5 5 . . . . . 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        `],
    50,
    false
    )
    timer.after(350, function () {
        carnival.onGameOverExpanded(carnival.WinTypes.Lose)
    })
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (ammo < 1) {
        ammo = 0
    }
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (powershot == false) {
        if (whoops == false) {
            sprites.destroy(sprite, effects.fire, 1)
            sprites.destroy(otherSprite)
            info.changeScoreBy(50)
        } else if (whoops == true) {
            sprites.destroy(sprite, effects.fire, 1)
            sprites.destroy(otherSprite)
            info.changeScoreBy(-50)
        }
    } else if (powershot == true) {
        if (whoops == false) {
            sprites.destroy(sprite, effects.fire, 1)
            info.changeScoreBy(50)
        } else if (whoops == true) {
            sprites.destroy(sprite, effects.fire, 1)
            info.changeScoreBy(-50)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.invert, function (sprite, otherSprite) {
    whoops = true
    sprites.destroy(otherSprite)
    mySprite.setImage(img`
        .......cd.......
        .......cd.......
        .......cd.......
        .......cb.......
        .......ff.......
        .......bc.......
        .......ff.......
        .......ac.......
        ......aaaa......
        ......acaa......
        .....bbbaaa.....
        ....aacccaaa....
        ..afffbbeeffaa..
        .aaaaaaccccacaa.
        aaaaaaaacccaccaa
        aaaaaaaaccccacaa
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `)
    info.changeLifeBy(-1)
    Deaths += 1
    timer.after(5000, function () {
        mySprite.setImage(img`
            .......cd.......
            .......cd.......
            .......cd.......
            .......cb.......
            .......ff.......
            .......c6.......
            .......ff.......
            .......86.......
            ......8888......
            ......8688......
            .....ccc888.....
            ....88666888....
            ..8fffcceeff88..
            .88888866669688.
            8888888866696688
            8888888866669688
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `)
        whoops = false
    })
})
function SpawnPowerup () {
    timer.after(2000, function () {
        Ability = randint(1, 7)
        timer.after(1000, function () {
            if (Ability == 1) {
                Powerup = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.blast)
            } else if (Ability == 2) {
                Powerup = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . 1 1 1 d d 1 1 1 . . . . 
                    . . . d d d d 1 1 1 1 1 1 . . . 
                    . . 1 d d d d 5 5 5 1 1 1 1 . . 
                    . . d d d d d 5 5 5 1 1 d 1 . . 
                    . 1 d d d d 5 5 5 5 5 d d 1 1 . 
                    . 1 d d d 5 5 5 1 1 1 1 d 1 1 . 
                    . 1 1 d d 5 5 1 1 1 1 1 1 1 1 . 
                    . 1 5 d d 5 5 1 1 1 1 1 1 1 1 . 
                    . . 1 5 d d 5 1 1 1 1 1 5 1 . . 
                    . . 1 5 5 d 5 5 1 1 1 5 1 1 . . 
                    . . . 1 5 5 5 5 5 5 5 5 1 . . . 
                    . . . . 1 1 5 5 5 5 1 1 . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.slwtme)
            } else if (Ability == 3) {
                Powerup = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . b b b b . . . . . . 
                    . . . . b b b d d b b b . . . . 
                    . . . d d d d b b b b b b . . . 
                    . . b d d d d 7 7 7 1 1 b b . . 
                    . . d d d d d 7 7 7 1 1 d b . . 
                    . b d d d d 7 7 7 7 7 d d b b . 
                    . b d d d 7 7 7 b b b b d b b . 
                    . b b d d 7 7 b b b b b b b b . 
                    . b 7 d d 7 7 b b b b b b b b . 
                    . . b 7 d d 7 b b b b b 7 b . . 
                    . . b 7 7 d 7 7 b b b 7 b b . . 
                    . . . b 7 7 7 7 7 7 7 7 b . . . 
                    . . . . b b 7 7 7 7 b b . . . . 
                    . . . . . . b b b b . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Luck)
            } else if (Ability == 4) {
                Powerup = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 6 6 6 6 . . . . . . 
                    . . . . 6 6 6 9 9 6 6 6 . . . . 
                    . . . 9 9 9 9 6 6 6 6 6 6 . . . 
                    . . 6 9 9 9 9 8 8 8 1 1 6 6 . . 
                    . . 9 9 9 9 9 8 8 8 1 1 9 6 . . 
                    . 6 9 9 9 9 8 8 8 8 8 9 9 6 6 . 
                    . 6 9 9 9 8 8 8 6 6 6 6 9 6 6 . 
                    . 6 6 9 9 8 8 6 6 6 6 6 6 6 6 . 
                    . 6 8 9 9 8 8 6 6 6 6 6 6 6 6 . 
                    . . 6 8 9 9 8 6 6 6 6 6 8 6 . . 
                    . . 6 8 8 9 8 8 6 6 6 8 6 6 . . 
                    . . . 6 8 8 8 8 8 8 8 8 6 . . . 
                    . . . . 6 6 8 8 8 8 6 6 . . . . 
                    . . . . . . 6 6 6 6 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.stamina)
            } else if (Ability == 5) {
                Powerup = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . c c c c . . . . . . 
                    . . . . c c c b b c c c . . . . 
                    . . . b b b b c c c c c c . . . 
                    . . c b b b b a a a 1 1 c c . . 
                    . . b b b b b a a a 1 1 b c . . 
                    . c b b b b a a a a a b b c c . 
                    . c b b b a a a c c c c b c c . 
                    . c c b b a a c c c c c c c c . 
                    . c a b b a a c c c c c c c c . 
                    . . c a b b a c c c c c a c . . 
                    . . c a a b a a c c c a c c . . 
                    . . . c a a a a a a a a c . . . 
                    . . . . c c a a a a c c . . . . 
                    . . . . . . c c c c . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.invert)
            } else if (Ability == 6) {
                Powerup = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f . f f f f f . . 
                    . . f f 2 2 2 f f f 2 2 2 f f . 
                    . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
                    . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
                    . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
                    . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                    . . f f 2 2 2 2 2 2 2 2 2 f f . 
                    . . . f f 2 2 2 2 2 2 2 f f . . 
                    . . . . f f 2 2 2 2 2 f f . . . 
                    . . . . . f f 2 2 2 f f . . . . 
                    . . . . . . f f 2 f f . . . . . 
                    . . . . . . . f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.shield)
            } else if (Ability == 7) {
                Powerup = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . f f f 1 1 f f f . . . . 
                    . . . f 1 1 1 f f f f f f . . . 
                    . . f 1 1 1 1 1 1 1 1 1 f f . . 
                    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
                    . f 1 1 1 1 1 1 1 1 1 1 1 f f . 
                    . f 1 1 1 1 1 1 f f f f 1 f f . 
                    . f f 1 1 1 1 f f f f f f f f . 
                    . f f 1 1 1 1 f f f f f f f f . 
                    . . f 1 1 1 1 f f f f f 1 f . . 
                    . . f f 1 1 1 1 f f f 1 f f . . 
                    . . . f 1 1 1 1 1 1 1 1 f . . . 
                    . . . . f f 1 1 1 1 f f . . . . 
                    . . . . . . f f f f . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.God)
            }
            Powerup.setPosition(randint(10, 142), 0)
            Powerup.setVelocity(0, 85)
        })
    })
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles11, function (sprite, location) {
    mySprite.setPosition(32, 185)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.slwtme, function (sprite, otherSprite) {
    mySprite.setImage(img`
        .......cd.......
        .......cd.......
        .......cd.......
        .......cb.......
        .......ff.......
        .......c1.......
        .......ff.......
        .......51.......
        ......5555......
        ......5155......
        .....ccc555.....
        ....55111555....
        ..5fffcceeff55..
        .5555551111d155.
        55555555111d1155
        555555551111d155
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `)
    bullet_time = true
    sprites.destroy(otherSprite)
    timer.after(10000, function () {
        mySprite.setImage(img`
            .......cd.......
            .......cd.......
            .......cd.......
            .......cb.......
            .......ff.......
            .......c6.......
            .......ff.......
            .......86.......
            ......8888......
            ......8688......
            .....ccc888.....
            ....88666888....
            ..8fffcceeff88..
            .88888866669688.
            8888888866696688
            8888888866669688
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `)
        bullet_time = false
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Pacman == true) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . 5 5 5 5 5 . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 . . . 5 5 5 5 5 
            5 5 5 5 5 . . . 5 5 5 5 5 
            . 5 5 5 5 . . . 5 5 5 5 . 
            . 5 5 5 . . . . . 5 5 5 . 
            . . 5 5 . . . . . 5 5 . . 
            `,img`
            . . . . 5 5 5 5 5 . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            5 5 5 5 5 5 . 5 5 5 5 5 5 
            . 5 5 5 5 5 . 5 5 5 5 5 . 
            . 5 5 5 5 . . . 5 5 5 5 . 
            . . 5 5 5 . . . 5 5 5 . . 
            . . . . 5 . . . 5 . . . . 
            `,img`
            . . . . 5 5 5 5 5 . . . . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 . . . . 
            `],
        150,
        true
        )
    }
})
info.onLifeZero(function () {
    blockSettings.writeNumber("Deaths", Deaths)
    if (info.score() > info.highScore()) {
        WinnerName = game.askForString("claim your place", 3)
        blockSettings.writeString("1st place", WinnerName)
        game.gameOver(true)
    } else if (info.score() <= info.highScore()) {
        game.gameOver(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (INF == true) {
        if (powershot == false) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 2 . . . . . . 
                . . . . . . 2 3 1 3 2 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 3 1 3 2 . . . . . 
                . . . . . . . 3 1 3 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -100)
            ammo += -1
            statusbar.value += -1
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        } else if (powershot == true) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . 2 1 1 1 1 1 1 2 . . . . 
                . . . . 2 1 1 1 1 1 1 2 . . . . 
                . . . . 2 1 1 1 1 1 1 2 . . . . 
                . . . . 2 1 1 1 1 1 1 2 . . . . 
                . . . . . 2 1 1 1 1 3 . . . . . 
                . . . . . 2 3 1 1 1 2 . . . . . 
                . . . . . . 3 1 1 3 2 . . . . . 
                . . . . . . 2 3 1 2 . . . . . . 
                . . . . . . 2 3 1 2 . . . . . . 
                . . . . . . . 3 1 3 . . . . . . 
                . . . . . . . 3 1 3 . . . . . . 
                . . . . . . . 3 1 3 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -100)
            ammo += -1
            statusbar.value += -1
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GhostO, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . 5 5 . . . . . 5 5 . . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 . . . 5 5 5 5 . 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . 5 . . . . . . . 5 . . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . 5 . . . . . . . 5 . . 
        . . 5 5 . . . . . 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        `],
    50,
    false
    )
    timer.after(350, function () {
        carnival.onGameOverExpanded(carnival.WinTypes.Lose)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Luck, function (sprite, otherSprite) {
    lucky = true
    sprites.destroy(otherSprite)
    SpawnPowerup()
    timer.after(7000, function () {
        lucky = false
        statusbar.setColor(9, 13)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GhostG, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . 5 5 . . . . . 5 5 . . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 . . . 5 5 5 5 . 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . 5 . . . . . . . 5 . . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        5 5 5 5 5 5 . 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        5 5 5 5 5 . . . 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 . . . . . . . 5 5 5 
        5 5 5 5 . . . . . 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        5 . . . . . . . . . . . 5 
        5 . . . . . . . . . . . 5 
        5 5 . . . . . . . . . 5 5 
        5 5 . . . . . . . . . 5 5 
        5 5 5 . . . . . . . 5 5 5 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . 5 . . . . . . . . . 5 . 
        . 5 . . . . . . . . . 5 . 
        . 5 5 . . . . . . . 5 5 . 
        . 5 5 5 . . . . . 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . 5 . . . . . . . 5 . . 
        . . 5 5 . . . . . 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 . . 
        . . . . 5 5 5 5 5 . . . . 
        `,img`
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 . . . . 
        `],
    50,
    false
    )
    timer.after(350, function () {
        carnival.onGameOverExpanded(carnival.WinTypes.Lose)
    })
})
scene.onOverlapTile(SpriteKind.GhostG, assets.tile`myTile3`, function (sprite, location) {
    if (Pacman == true) {
        timer.throttle("Stinky move", 500, function () {
            GhostMovement = randint(1, 4)
            if (GhostMovement == 1) {
                Stinky.setVelocity(0, 18 * difficulty)
            } else if (GhostMovement == 2) {
                Stinky.setVelocity(0, -18 * difficulty)
            } else if (GhostMovement == 3) {
                Stinky.setVelocity(18 * difficulty, 0)
            } else if (GhostMovement == 4) {
                Stinky.setVelocity(-18 * difficulty, 0)
            }
        })
    }
})
function pong () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.shield, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.invert, function (sprite, otherSprite) {
    whoops = true
    sprites.destroy(otherSprite)
    mySprite.setImage(img`
        .......cd.......
        .......cd.......
        .......cd.......
        .......cb.......
        .......ff.......
        .......bc.......
        .......ff.......
        .......ac.......
        ......aaaa......
        ......acaa......
        .....bbbaaa.....
        ....aacccaaa....
        ..afffbbeeffaa..
        .aaaaaaccccacaa.
        aaaaaaaacccaccaa
        aaaaaaaaccccacaa
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `)
    info.changeLifeBy(-1)
    Deaths += 1
    timer.after(3000, function () {
        mySprite.setImage(img`
            .......cd.......
            .......cd.......
            .......cd.......
            .......cb.......
            .......ff.......
            .......c6.......
            .......ff.......
            .......86.......
            ......8888......
            ......8688......
            .....ccc888.....
            ....88666888....
            ..8fffcceeff88..
            .88888866669688.
            8888888866696688
            8888888866669688
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `)
        whoops = false
    })
})
controller.combos.attachCombo("uudda+ba+b", function () {
    blockSettings.clear()
    game.splash("Reset code activated")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.stamina, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    mySprite.setImage(img`
        .......cd.......
        .......cd.......
        .......cd.......
        .......cb.......
        .......ff.......
        .......c6.......
        .......ff.......
        .......96.......
        ......9999......
        ......9699......
        .....ccc999.....
        ....99666999....
        ..9fffcceeff99..
        .99999966669699.
        9999999966696699
        9999999966669699
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `)
    statusbar.max = 1000
    statusbar.value = 1000
    ammo = 100
    INF = true
    timer.after(5000, function () {
        mySprite.setImage(img`
            .......cd.......
            .......cd.......
            .......cd.......
            .......cb.......
            .......ff.......
            .......c6.......
            .......ff.......
            .......86.......
            ......8888......
            ......8688......
            .....ccc888.....
            ....88666888....
            ..8fffcceeff88..
            .88888866669688.
            8888888866696688
            8888888866669688
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `)
        statusbar.max = 15
        statusbar.value = 15
        ammo = 15
        INF = false
    })
})
function Space_Shooter () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8111111111111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111119999
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111119999111
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111199999999999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111199999999999999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111999999999999999
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111119999999999999999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111199999999999999999666
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111999999999999966666669
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111199999999999999966666666
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111999999999999666666666666
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11199999999999666666666688888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff119999999999999666666666886888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11199199999999666666666688888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811911999999966669666888888888666
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1119999996666666666688886688866677
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11119999669966666668888667778666777
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111199999699666666888686887777777777
        fffffffffffff888888888888888ffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111199999996666688868888877777777777
        fffffffffffff888888888888888ffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111999999966668886688886877777777777
        fffffffffffff888888888888888ffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11119999996666886886888888777777777777
        fffffffffffff888888888888888ffffffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11119999966988668888888888777777777777
        fffffffffffff888888888888888ffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111199999966886688888888888776676777777
        fffffffff888888ffffffffff88888ffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111999999668866888888888888666666777777
        fffffffff888888ffffffffff88888ffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111999996668888888888888888886666666777
        fffffffff888888ffffffffff88888ffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1119999966666888888888888888888888766677
        fffffffff888888ffffffffff88888ffffffffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81199999966688888868888888888888888866677
        fffffffff888888ffffffffff88888ffffffffffffffffffffffff2222fffffffffffff8888888888fffffffff88888888888888ffffffffffffff811199999666868866688888888888888888886677
        fffffffff888888fffffffffffffffffffffffffffffffffffffff2222fffffffffffff8888888888fffffffff88888888888888ffffffffffffff811999996668868888888888888888888888887677
        fffffffff888888fffffffffffffffffffffffffffffffffffffff22222fffffffffff88888888888fffffffff88888888888888fffffffffffff8119999996668688688888888888888888788888676
        fffffffff888888fffffffffffffffffff8888888888ffffffffff22222ffffffffff88888888888888fffffff888ffffffffffffffffffffffff8119999966686888888888888888887767678888676
        fffffffff888888fffffffffffffffffff8888888888fffffffff222222ffffffffff888888888888888ffffff888ffffffffffffffffffffffff1119999666888888888888888888878667668888666
        fffffffff888888888888888888fffffff8888888888fffffffff2222222fffffffff8888ffff8888888ffffff888ffffffffffffffffffffffff1199999666868888888888888887776667668888877
        fffffffff888888888888888888fffffff888fffffff888ffffff2222222fffffffff888ffffffff8888ffffff888ffffffffffffffffffffffff1199999668888888888788778887866667768888887
        ffffffffffffff8888888888888888ffff888fffffff888ffffff222f222fffffffff888ffffffffffffffffff888fffffffffffffffffffffff11199996668868888867688776666666677768888888
        ffffffffffffff8888888888888888ffff888fffffff888ffffff222f2222ffffffff888ffffffffffffffffff888fffffffffffffffffffffff11999966668688888767688766666677777768888888
        ffffffffffffff8888888888888888ffff888fffffff888ffffff222f2222ffffffff888ffffffffffffffffff888ffffffffffffffffffffff811999666688888888666688766667677777766888877
        fffffffffffffffffffffffff88888ffff888fffffff8888ffff2222ff222ffffffff888ffffffffffffffffff888ffffff88888fffffffffff119999666688888886666677667667777777766888776
        fffffffffffffffffffffffff88888ffff888fffffff8888ffff2222ff222fffffff8888ffffffffffffffffff88888888888888fffffffffff119999666888888886677667667667777777776887786
        fffffffffffffffffffffffff88888ffff888fffffff8888ffff222fff2222ffffff8888ffffffffffffffffff88888888888888ffffffffff8119996666868888886677766777767777777777877766
        ffffffff888888fffffffffff88888ffff888ffffffff888ffff222fff2222ffffff8888ffffffffffffffffff88888888888fffffffffffff8119996666868888886677766777777777777777777766
        ffffffff888888fffffffffff88888ffff888ffffffff888fff2222ffff2222fffff888fffffffffffffffffff888fffffffffffffffffffff1119996666868888886677777777777777777777787767
        ffffffff888888fffffffffff88888ffff88888888888888fff2222ffff2222fffff8888ffffffffffffffffff888fffffffffffffffffffff1199996668868888886677777777777777777777777768
        ffffffff888888fffffffffff88888ffff88888888888fffff2222ffffff2222ffff8888ffffffffffffffffff888fffffffffffffffffffff1199996688688888886677777777777777777777777688
        ffffffff888888fffff88888888888ffff88888888888fffff2222ffffff2222ffff8888ffffffffffffffffff888ffffffffffffffffffff11199966688688888886677777777777777777777777688
        ffffffff888888888888888888ffffffff888fffffffffffff222fff22222222fffff8888ffffffff888ffffff888ffffffffffffffffffff11199966688688888886777777777777777777777776668
        ffffffff888888888888888888ffffffff888ffffffffffff2222f22222222222ffff888888ffffff888ffffff888ffffffffffffffffffff11199966688688888886777777777777777777777776668
        ffffffffffff88888888888888ffffffff888fffffffffff22222222222222222ffff888888888888888ffffff8888ffffffff888ffffffff11999966688688888886677777777777777777777777668
        ffffffffffff88888888888888ffffffff888fffffffffff2222222222ffff222fffff88888888888888ffffff888888888888888ffffffff11999966688888888886667777777777777777777777668
        ffffffffffff88888888888fffffffffff888fffffffffff222f22222fffff2222ffffff88888888888fffffff888888888888888ffffffff11999666688888888887667777777777777777777776668
        ffffffffffffffffffffffffffffffffff888fffffffffff222fffffffffff2222fffffffffffffffffffffffff88888888888888ffffffff11999666688888888887667777777777777777777766668
        fffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffff222fffffffffffffffffffffffffffffffffffffffffffffff11999666688888888887677777777777777777777766688
        ffffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffff11999666688888888888877777777777777777777666888
        ffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffffff11999966688888888888877777777777777777777666888
        ffffffffffffffffffffffffffffffffffffffffffffff222fffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffff11999966686888888888777777777777777777776767888
        fffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffffff11999666688888888887777777777777777777766668888
        ffffffffffffffffffffffffffffffffffffffffffff22222ffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffff11999666688888888877777777777777777777766678888
        ffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffffff11999666888888888876677777777777777777766678888
        fffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffff11969666688888888766677777777777777777666688888
        ffffffffffffffffffffffffffffffffffffffffff22222fffffffffffffffffff2222fffffffffffffffffffffffffffffffffffffffffff11969666688888888766677777777777777777666688888
        ffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffff11999666688888888666677777777777777767666688888
        ffffffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffff222fffffffffffffffffffffffffffffffffffffffffff11999666688888888666777777777777777766667688888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffffffffffffffffffffffffffffffffffffffff11999966688888888666777777777777777666666888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2224ffffffffffffffffffffffffffffffffffffffffff11999966668888888666777777777777777676666888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244fffffffffffffffffffffffffffffffffffffffff119999666688888886666d7777777777776776666888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2224fffffffffffffffffffffffffffffffffffffffff11999996668888888676667777777777766666768888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222244ffffffffffffffffffffffffffffffffffffffff1199996668888888676667777777777677666668888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222444fffffffffffffffffffffffffffffffffffffffff1999969688888886666676d7777767666666668888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22444fffffffffffffffffffffffffffffffffffffffff199996968888888666666666777766666666888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2244444ff4fffffffffffffffffffffffffffffffffffff19996666888886666666666777666666666888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22444ff4f44ffffffffffffffffffffffffffffffffffff1999966688888868d666666666677666668888888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22424f4f4f4ffffffffffffffffffffffffffffffffffff199969668888888d868666666676668688888888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2444f44f444ffffffffffffffffffffffffffffffffffff1199666688888888888866677676668888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444ff44fffffffffffffffffffffffffffffffffffff199966688888888888866676666d88888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444f4ff444fffffffffffffffffffffffffffffffffffff19969688888888888886666666888888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44424f4f444fffffffffffffffffffffffffffffffffffff19966688888888888888667666888888888888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff44424f4ff44fffffffffffffffffffffffffffffffffffff119966688888888888886666d6888888888877888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444f442224f4444fffffffffffffffffffffffffffffffffffff1996666888888888888666688888888888877788
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444f42222f44444fffffffffffffffffffffffffffffffffffff1199668888888888888866688888888888877788
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444442222ff4444ffffffffffffffffffffffffffffffffffffff199668888888888888866688888888887877778
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44444f224ff44444ffffffffffffffffffffffffffffffffffffff199688888888888888d6688888888877777776
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff4444444444f44fffffffffffffffffffffffffffffffffffffff1998688888888888886688888888777777776
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff444ff44ee4e444ffffffffffffffffffffffffffffffffffffff1198688888888888888888888887777777766
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff44444444444e44fffffffffffffffffffffffffffffffffffffff199888888888888888888888877777777677
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff4444feeeeee444effffffffffffffffffffffffffffffffffffff119668888888888888888888877777676688
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ff4444eeefeeee4eefffffffffffffffffffffffffffffffffffffff19966888888888888888888877767668888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ff44feeeeeeeeeeeffffffffffffffffffffffffffffffffffffffff1966688888888888888887777666888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff44ff44feeeeeeeeeeefffffffffffffffffffffffffffffffffffffffff196668888888888888877777678888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fe44eeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffff11666688888888888767776678888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4feffeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffff1999688888888888766666888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffeeeeeeeeefeeffffffffffffffffffffffffffffffffffffffffffff199688888888888666677888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffefeffeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffff19988888888888888888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeefefffffffffffffffffffffffffffffffffffffffffffffff1998888888888888888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefeeefefeffffffffffffffffffffffffffffffffffffffffffffffff199888888888888888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeffffffffffffffffffffffffffffffffffffffffffffffffff19998888888888888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffffffffffffffffffffffffffffffff199888888888888888888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111888888888888888888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1118888888888888888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11888888888888888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff188888888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff18888888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff188888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff888888888
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.showLongText("use arrows or WASD to move and use the spacebar to shoot", DialogLayout.Bottom)
    game.showLongText("Hit meteors before they hit you for 1 point, UFOs for 20 points, and speedeors for 50", DialogLayout.Bottom)
    game.showLongText("Grab power ups to get the highscore and win", DialogLayout.Bottom)
    game.showLongText("Current high score is " + info.highScore() + " from " + blockSettings.readString("1st place") + " With " + blockSettings.readNumber("Deaths") + " Deaths ", DialogLayout.Bottom)
    pause(1000)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    mySprite = sprites.create(img`
        .......cd.......
        .......cd.......
        .......cd.......
        .......cb.......
        .......ff.......
        .......c6.......
        .......ff.......
        .......86.......
        ......8898......
        ......8698......
        .....ccc888.....
        ....88666988....
        ..8fffcceeff88..
        .88888866669688.
        8888888866696688
        8888888866669688
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `, SpriteKind.Player)
    mySprite.setPosition(80, 120)
    mySprite.setStayInScreen(true)
    mySprite3 = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.Wall)
    mySprite3.setPosition(80, 120)
    controller.moveSprite(mySprite, 150, 0)
    info.setLife(3)
    info.setScore(0)
    statusbar = statusbars.create(50, 3, StatusBarKind.Energy)
    statusbar.value = 10
    statusbar.max = 10
    statusbar.positionDirection(CollisionDirection.Bottom)
    statusbar.setColor(9, 13)
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    ammo = 10
    powershot = false
    shoot = true
    beamability = false
}
scene.onOverlapTile(SpriteKind.GhostO, assets.tile`myTile3`, function (sprite, location) {
    if (Pacman == true) {
        timer.throttle("Clyde move", 500, function () {
            GhostMovement = randint(1, 4)
            if (GhostMovement == 1) {
                Clyde.setVelocity(0, 18 * difficulty)
            } else if (GhostMovement == 2) {
                Clyde.setVelocity(0, -18 * difficulty)
            } else if (GhostMovement == 3) {
                Clyde.setVelocity(18 * difficulty, 0)
            } else if (GhostMovement == 4) {
                Clyde.setVelocity(-18 * difficulty, 0)
            }
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.blast, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    mySprite.setImage(img`
        .......cd.......
        .......cd.......
        .......cd.......
        .......cb.......
        .......ff.......
        .......c4.......
        .......ff.......
        .......24.......
        ......2222......
        ......2422......
        .....ccc222.....
        ....22444222....
        ..2fffcceeff22..
        .22222244443422.
        2222222244434422
        2222222244443422
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `)
    powershot = true
    statusbar.setColor(2, 1)
    statusbar.value = 15
    ammo = 15
    timer.after(5000, function () {
        mySprite.setImage(img`
            .......cd.......
            .......cd.......
            .......cd.......
            .......cb.......
            .......ff.......
            .......c6.......
            .......ff.......
            .......86.......
            ......8888......
            ......8688......
            .....ccc888.....
            ....88666888....
            ..8fffcceeff88..
            .88888866669688.
            8888888866696688
            8888888866669688
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `)
        powershot = false
        statusbar.setColor(9, 13)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.God, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    mySprite.setImage(img`
        .......cd.......
        .......cd.......
        .......cd.......
        .......cb.......
        .......dd.......
        .......cf.......
        .......dd.......
        .......1f.......
        ......1111......
        ......1f11......
        .....ccc111.....
        ....11fff111....
        ..1dddcceedd11..
        .111111ffff1f11.
        11111111fff1ff11
        11111111ffff1f11
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `)
    statusbar.max = 1000
    statusbar.value = 1000
    ammo = 100
    lucky = true
    bullet_time = true
    powershot = true
    INF = true
    info.changeLifeBy(-1)
    Deaths += 1
    timer.after(3000, function () {
        mySprite.setImage(img`
            .......cd.......
            .......cd.......
            .......cd.......
            .......cb.......
            .......ff.......
            .......c6.......
            .......ff.......
            .......86.......
            ......8888......
            ......8688......
            .....ccc888.....
            ....88666888....
            ..8fffcceeff88..
            .88888866669688.
            8888888866696688
            8888888866669688
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `)
        statusbar.max = 15
        statusbar.value = 15
        ammo = 15
        lucky = false
        bullet_time = false
        powershot = false
        INF = false
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (SpaceShooter == true) {
        sprites.destroy(sprite)
        sprites.destroy(otherSprite)
        mySprite.setPosition(0, 0)
        shoot = false
        bullet_time = false
        lucky = false
        info.changeLifeBy(-1)
        Deaths += 1
        info.startCountdown(3)
    }
})
let myEnemy: Sprite = null
let beamability = false
let mySprite3: Sprite = null
let lucky = false
let INF = false
let WinnerName = ""
let bullet_time = false
let Powerup: Sprite = null
let Ability = 0
let Deaths = 0
let whoops = false
let projectile2: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let powershot = false
let ammo = 0
let shoot = false
let Stinky: Sprite = null
let Clyde: Sprite = null
let Pinky: Sprite = null
let Inky: Sprite = null
let BetterPac = false
let mySprite2: Sprite = null
let Point_boss: Sprite = null
let mySprite: Sprite = null
let difficulty = 0
let Blinky: Sprite = null
let GhostMovement = 0
let Pong = false
let Pacman = false
let SpaceShooter = false
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("Space Shooter", img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 6 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 6 . . . . . . . 
    . . . . . . 8 8 8 8 . . . . . . 
    . . . . . . 8 6 8 8 . . . . . . 
    . . . . . c c c 8 8 8 . . . . . 
    . . . . 8 8 6 6 6 8 8 8 . . . . 
    . . 8 f f f c c e e f f 8 8 . . 
    . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
    8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
    8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
    `),
miniMenu.createMenuItem("Pac-Man", img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 . . . . . . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `),
miniMenu.createMenuItem("Pong", img`
    . . . . . . . f . . . . . . . 
    . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . 
    . . . . . . . f . . . . . f . 
    . . . . . . . . . . . . . f . 
    . f . . . . . f . . f . . f . 
    . f . . . . . f . . . . . f . 
    . f . . . . . . . . . . . f . 
    . f . . . . . f . . . . . . . 
    . f . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . 
    . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . 
    . . . . . . . f . . . . . . . 
    `)
)
myMenu.setTitle("SELECT GAME")
myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Border, 5)
myMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 6)
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    myMenu.close()
    if (selectedIndex == 0) {
        Space_Shooter()
        SpaceShooter = true
        Pacman = false
        Pong = false
    } else if (selectedIndex == 1) {
        PacMan()
        SpaceShooter = false
        Pacman = true
        Pong = false
    } else if (selectedIndex == 2) {
        pong()
        SpaceShooter = false
        Pacman = false
        Pong = true
    }
})
game.onUpdateInterval(randint(10000, 25000), function () {
    if (SpaceShooter == true) {
        if (bullet_time == false) {
            if (true) {
                sprites.destroy(Point_boss)
                Point_boss = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . c c c e e e . . . . . 
                    . . . . e e 2 2 2 4 e e . . . . 
                    . . c f f f c c e e f f e e . . 
                    . c c c c e e 2 2 2 2 4 2 e e . 
                    c c c c c c e e 2 2 2 4 2 2 e e 
                    . c c c c c e e 2 2 2 2 4 2 e . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.boss)
                Point_boss.setPosition(80, 10)
                Point_boss.setVelocity(100, 0)
                Point_boss.setBounceOnWall(true)
            }
        } else if (bullet_time == true) {
            sprites.destroy(Point_boss)
            Point_boss = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . c c c e e e . . . . . 
                . . . . e e 2 2 2 4 e e . . . . 
                . . c f f f c c e e f f e e . . 
                . c c c c e e 2 2 2 2 4 2 e e . 
                c c c c c c e e 2 2 2 4 2 2 e e 
                . c c c c c e e 2 2 2 2 4 2 e . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.boss)
            Point_boss.setPosition(80, 10)
            Point_boss.setVelocity(50, 0)
            Point_boss.setBounceOnWall(true)
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (SpaceShooter == true) {
        if (powershot == false) {
            ammo += 1
            statusbar.value += 1
        } else if (powershot == true) {
            ammo += 3
            statusbar.value += 3
        }
    }
})
game.onUpdateInterval(500, function () {
    if (SpaceShooter == true) {
        if (bullet_time == false) {
            if (lucky == false) {
                if (Math.percentChance(1)) {
                    myEnemy = sprites.create(img`
                        ................
                        .......5........
                        ................
                        .......5........
                        .......5........
                        ......55........
                        ......55........
                        .....5555.......
                        .....5445.......
                        .....5445...5...
                        .....5445...5...
                        .....54445......
                        ..5.5544255.5...
                        ....5422245.55..
                        ..5.5422224555..
                        ..5.542222455...
                        ..5542ccbac25...
                        ..54ccbbcfac5...
                        ..54afbbbbac5...
                        ...4afffbafcc...
                        ...4afffbafcc...
                        ....cbbbaffc....
                        .....bbbafa.....
                        ......ccbb......
                        ................
                        ................
                        `, SpriteKind.Enemy2)
                    myEnemy.setPosition(randint(10, 142), 0)
                    myEnemy.setVelocity(0, randint(120, 160))
                } else {
                    myEnemy = sprites.create(img`
                        . . . . . . . . . c c 8 . . . . 
                        . . . . . . 8 c c c f 8 c c . . 
                        . . . c c 8 8 f c a f f f c c . 
                        . . c c c f f f c a a f f c c c 
                        8 c c c f f f f c c a a c 8 c c 
                        c c c b f f f 8 a c c a a a c c 
                        c a a b b 8 a b c c c c c c c c 
                        a f c a a b b a c c c c c f f c 
                        a 8 f c a a c c a c a c f f f c 
                        c a 8 a a c c c c a a f f f 8 a 
                        . a c a a c f f a a b 8 f f c a 
                        . . c c b a f f f a b b c c 6 c 
                        . . . c b b a f f 6 6 a b 6 c . 
                        . . . c c b b b 6 6 a c c c c . 
                        . . . . c c a b b c c c . . . . 
                        . . . . . c c c c c c . . . . . 
                        `, SpriteKind.Enemy)
                    myEnemy.setPosition(randint(10, 142), 0)
                    myEnemy.setVelocity(0, randint(80, 120))
                }
            } else if (lucky == true) {
                if (Math.percentChance(50)) {
                    myEnemy = sprites.create(img`
                        ................
                        .......5........
                        ................
                        .......5........
                        .......5........
                        ......55........
                        ......55........
                        .....5555.......
                        .....5445.......
                        .....5445...5...
                        .....5445...5...
                        .....54445......
                        ..5.5544255.5...
                        ....5422245.55..
                        ..5.5422224555..
                        ..5.542222455...
                        ..5542ccbac25...
                        ..54ccbbcfac5...
                        ..54afbbbbac5...
                        ...4afffbafcc...
                        ...4afffbafcc...
                        ....cbbbaffc....
                        .....bbbafa.....
                        ......ccbb......
                        ................
                        ................
                        `, SpriteKind.Enemy2)
                    myEnemy.setPosition(randint(10, 142), 0)
                    myEnemy.setVelocity(0, randint(120, 160))
                } else {
                    myEnemy = sprites.create(img`
                        . . . . . . . . . c c 8 . . . . 
                        . . . . . . 8 c c c f 8 c c . . 
                        . . . c c 8 8 f c a f f f c c . 
                        . . c c c f f f c a a f f c c c 
                        8 c c c f f f f c c a a c 8 c c 
                        c c c b f f f 8 a c c a a a c c 
                        c a a b b 8 a b c c c c c c c c 
                        a f c a a b b a c c c c c f f c 
                        a 8 f c a a c c a c a c f f f c 
                        c a 8 a a c c c c a a f f f 8 a 
                        . a c a a c f f a a b 8 f f c a 
                        . . c c b a f f f a b b c c 6 c 
                        . . . c b b a f f 6 6 a b 6 c . 
                        . . . c c b b b 6 6 a c c c c . 
                        . . . . c c a b b c c c . . . . 
                        . . . . . c c c c c c . . . . . 
                        `, SpriteKind.Enemy)
                    myEnemy.setPosition(randint(10, 142), 0)
                    myEnemy.setVelocity(0, randint(80, 120))
                }
            }
        } else if (bullet_time == true) {
            if (lucky == false) {
                if (Math.percentChance(1)) {
                    myEnemy = sprites.create(img`
                        ................
                        .......5........
                        ................
                        .......5........
                        .......5........
                        ......55........
                        ......55........
                        .....5555.......
                        .....5445.......
                        .....5445...5...
                        .....5445...5...
                        .....54445......
                        ..5.5544255.5...
                        ....5422245.55..
                        ..5.5422224555..
                        ..5.542222455...
                        ..5542ccbac25...
                        ..54ccbbcfac5...
                        ..54afbbbbac5...
                        ...4afffbafcc...
                        ...4afffbafcc...
                        ....cbbbaffc....
                        .....bbbafa.....
                        ......ccbb......
                        ................
                        ................
                        `, SpriteKind.Enemy2)
                    myEnemy.setPosition(randint(10, 142), 0)
                    myEnemy.setVelocity(0, randint(60, 80))
                } else {
                    myEnemy = sprites.create(img`
                        . . . . . . . . . c c 8 . . . . 
                        . . . . . . 8 c c c f 8 c c . . 
                        . . . c c 8 8 f c a f f f c c . 
                        . . c c c f f f c a a f f c c c 
                        8 c c c f f f f c c a a c 8 c c 
                        c c c b f f f 8 a c c a a a c c 
                        c a a b b 8 a b c c c c c c c c 
                        a f c a a b b a c c c c c f f c 
                        a 8 f c a a c c a c a c f f f c 
                        c a 8 a a c c c c a a f f f 8 a 
                        . a c a a c f f a a b 8 f f c a 
                        . . c c b a f f f a b b c c 6 c 
                        . . . c b b a f f 6 6 a b 6 c . 
                        . . . c c b b b 6 6 a c c c c . 
                        . . . . c c a b b c c c . . . . 
                        . . . . . c c c c c c . . . . . 
                        `, SpriteKind.Enemy)
                    myEnemy.setPosition(randint(10, 142), 0)
                    myEnemy.setVelocity(0, randint(40, 60))
                }
            } else if (lucky == true) {
                if (Math.percentChance(75)) {
                    myEnemy = sprites.create(img`
                        ................
                        .......5........
                        ................
                        .......5........
                        .......5........
                        ......55........
                        ......55........
                        .....5555.......
                        .....5445.......
                        .....5445...5...
                        .....5445...5...
                        .....54445......
                        ..5.5544255.5...
                        ....5422245.55..
                        ..5.5422224555..
                        ..5.542222455...
                        ..5542ccbac25...
                        ..54ccbbcfac5...
                        ..54afbbbbac5...
                        ...4afffbafcc...
                        ...4afffbafcc...
                        ....cbbbaffc....
                        .....bbbafa.....
                        ......ccbb......
                        ................
                        ................
                        `, SpriteKind.Enemy2)
                    myEnemy.setPosition(randint(10, 142), 0)
                    myEnemy.setVelocity(0, randint(60, 80))
                } else {
                    myEnemy = sprites.create(img`
                        . . . . . . . . . c c 8 . . . . 
                        . . . . . . 8 c c c f 8 c c . . 
                        . . . c c 8 8 f c a f f f c c . 
                        . . c c c f f f c a a f f c c c 
                        8 c c c f f f f c c a a c 8 c c 
                        c c c b f f f 8 a c c a a a c c 
                        c a a b b 8 a b c c c c c c c c 
                        a f c a a b b a c c c c c f f c 
                        a 8 f c a a c c a c a c f f f c 
                        c a 8 a a c c c c a a f f f 8 a 
                        . a c a a c f f a a b 8 f f c a 
                        . . c c b a f f f a b b c c 6 c 
                        . . . c b b a f f 6 6 a b 6 c . 
                        . . . c c b b b 6 6 a c c c c . 
                        . . . . c c a b b c c c . . . . 
                        . . . . . c c c c c c . . . . . 
                        `, SpriteKind.Enemy)
                    myEnemy.setPosition(randint(10, 142), 0)
                    myEnemy.setVelocity(0, randint(40, 60))
                }
            }
        }
    }
})
