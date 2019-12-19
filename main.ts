enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    Object
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Jumper.vy += -250
    Trampoline.setKind(SpriteKindLegacy.Object)
    Trampoline.x += Math.randomRange(-70, 70)
    Trampoline.y += Math.randomRange(-50, -60)
})
let Trampoline: Sprite = null
let Jumper: Sprite = null
scene.setTileMap(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f 5 f f f 
f f f f f f 5 f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f 5 f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f 5 f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f 5 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f d d f f f f f f f b b b b b b f f f f f f f f f f f f f f b b b b b b f f f f f f 
b b f f f f f f f b b b b b b f f f f f f f f d d f f f f f b b b b b b b b b b b f f f f f f b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b d d d d d d d d b b b b b b b b b b b b b b f f f f f f b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b d 1 1 d d 1 1 d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 b b b b 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 9 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 9 9 9 9 9 9 9 9 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 1 1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 
9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 9 9 9 
9 9 9 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 
9 9 9 9 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 
9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 3 5 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 5 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 3 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 9 9 9 9 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 9 9 9 9 9 6 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e d d e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e d e e e e d d e e e e e e d d e e d e e e e e e e d e e e d d e e e e d e e e e e e e e e e e 
e e e d e e e e e d d d e e e e e e e e e e e e e e e e d e d d e e e e e e e e e e e e e e e e e e e e e e e e d d e e e e d e 
e e e d e e d e e e e e e e e e e d d e e e e e e e e e e e e e e e e d e e e d e e d d e e e e e e e e e e e e d d e e e e e e 
e e e e e e e e e e e e e e e e e d d e e e d e e e d d e e e e e e e d e e e e e e e e e e e e e e d d d e e e e e e e e e e e 
e e e e e e e e e e e e d e e e e e e e e e e e e e d d e e e e e e e d e e e e e e e e e e e e e e d d d e e e e e e e d d e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e d d d e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`)
Jumper = sprites.create(img`
4 4 4 4 6 4 4 6 4 4 4 7 4 4 4 4 
4 7 4 4 4 4 7 4 4 7 4 6 4 4 4 4 
4 4 7 7 6 7 6 7 7 6 6 6 6 6 4 4 
4 6 8 7 6 6 7 7 8 6 6 6 6 6 4 6 
4 4 6 8 6 6 7 8 6 6 6 6 6 6 4 4 
4 4 6 6 6 6 6 6 6 6 6 6 6 6 4 7 
7 4 6 6 6 6 6 6 6 7 6 6 6 6 4 4 
4 4 6 6 6 7 6 6 6 7 6 6 6 6 4 6 
4 7 6 6 6 7 6 7 6 8 6 6 6 6 4 4 
4 4 6 6 6 8 6 8 6 6 6 6 6 6 4 4 
4 6 6 6 6 6 6 6 6 7 7 6 6 6 4 7 
7 4 6 6 6 6 7 7 7 7 6 6 6 6 4 4 
4 4 6 6 6 6 6 6 6 6 6 6 6 6 6 4 
4 7 6 6 6 6 6 6 6 6 6 6 6 7 4 4 
4 4 4 4 4 6 4 4 4 7 4 4 4 4 4 4 
4 4 6 4 4 7 4 4 6 4 4 4 6 4 7 4 
`, SpriteKindLegacy.Player)
scene.cameraFollowSprite(Jumper)
Jumper.ay = 100
Trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 . . 6 . . . 6 6 . . . 6 . . 6 
6 . . 6 . . . 6 6 . . . 6 . . 6 
6 . . 6 6 6 6 6 6 6 6 6 6 . . 6 
6 . 6 6 6 d d d d d d 6 6 6 . 6 
6 6 6 d d d d d d d d d d 6 6 6 
6 . 6 6 6 d d d d d d 6 6 6 . 6 
6 . . 6 6 6 6 6 6 6 6 6 6 . . 6 
6 . . 6 . . . 6 6 . . . 6 . . 6 
6 . . 6 . . . 6 6 . . . 6 . . 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Object)
Jumper.setPosition(300, 400)
Trampoline.setPosition(300, 520)
game.onUpdate(function () {
    Jumper.x += controller.dx()
})
