var game_assets = {
    "sprites": {
        "assets/sprites.png": {
            tile: 47,
            tileh: 47.25,
            map: {
                red_right: [0, 0],
                red_up: [1, 0],
                red_down: [0, 1],
                red_left: [1, 1],
                blue_right: [2, 0],
                blue_up: [3, 0],
                blue_down: [2, 1],
                blue_left: [3, 1],
                pink_right: [0, 2],
                pink_up: [1, 2],
                pink_down: [0, 3],
                pink_left: [1, 3],
                orange_right: [2, 2],
                orange_up: [3, 2],
                orange_down: [2, 3],
                orange_left: [3, 3]
            }
        },
        "assets/projectiles.png": {
            tile: 32,
            tileh: 32,
            map: {
                green: [0, 0],
                red: [1, 0],
                blue: [0, 1],
                yellow: [1, 1],
                purple: [0, 2]
            }
        }
    }
};
   
Crafty.load(game_assets);