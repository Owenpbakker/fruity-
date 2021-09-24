let projectile: Sprite = null
let grape = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c . . . . . . . 
    . . . c d d d d d c . . . . . . 
    . . . c d c c c c c . . . . . . 
    . . . c c d 4 4 4 4 c . . . . . 
    . . . c 1 4 4 4 4 4 d c . . . . 
    . . c 1 4 4 4 4 4 1 4 4 c . . . 
    c c c 1 4 4 4 4 1 4 4 4 4 c . . 
    c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
    f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
    f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
    f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
    f f c b c 4 4 4 4 1 4 4 4 4 f . 
    . . c d d c 4 4 4 4 d f f f . . 
    . . . c c c f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(6)
controller.moveSprite(grape)
grape.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, 50, 0)
    projectile.setPosition(0, randint(0, 100))
})
