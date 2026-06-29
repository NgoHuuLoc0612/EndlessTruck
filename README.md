# Endless Truck

Endless Truck is a WebGL-based monster truck stunt and distance-driving game. Drive as far as you can, perform flips and jumps for bonus points, collect fuel and cash, and upgrade your truck in the garage shop between runs.

## Gameplay

The game is an endless side-scrolling driver where the goal is to travel as far as possible without crashing or running out of fuel. Hitting ramps launches the truck into the air, where the player can perform front flips and back flips for score bonuses, with extra points awarded for sticking a perfect landing. Combos such as a front flip and back flip performed within the same jump are also rewarded.

Along the route, players can pick up coins (in-game cash) and fuel cans. Cash earned during runs and crashes can be spent in the **Garage Shop** to permanently upgrade the truck:

- **Engine** – increases max speed
- **Fuel Tank** – increases tank capacity
- **Wheels** – improves handling
- **Bullbar** – improves crash protection

The game also includes a full mission/achievement system (e.g. "Perform a triple front flip", "Drive over 1km in one run", "Have a cash balance of $1000") and tracks high scores for best distance traveled.

## Controls

- **Space Bar** – Jump
- **Arrow Keys** – Rotate the truck in mid-air to perform flips
- Touch controls (on-screen jump and rotation buttons) are provided for mobile/touch devices

## Tech Stack

- **Rendering:** Custom WebGL engine (`js/compressed.js`), using `gl-matrix` for vector/matrix math
- **3D Assets:** Models in Wavefront `.obj` format (truck body, wheels, terrain chunks, props, obstacles)
- **Shaders:** Custom GLSL vertex/fragment shaders (`datas/shaders/`) for simple shading, colored shading, and shadow rendering
- **Audio:** MP3 sound effects (crashes, jumps, coins, etc.) and OGG background music (title and in-game tracks)
- **UI/Localization:** `famobi.json` contains full UI text and translations for English, German, French, Dutch, Polish, Spanish, Portuguese, Russian, and Turkish
- **Packaging:** Configured as a PWA (`manifest.json`) and built for distribution through the FAMOBI HTML5 game platform (`game-interface.js`)

## Project Structure

```
EndlessTruck/
├── index.html              # Entry point / WebGL canvas setup
├── manifest.json           # PWA manifest (icons, screenshots, theme)
├── famobi.json              # FAMOBI platform config + i18n strings
├── game-interface.js        # FAMOBI platform integration script
├── js/
│   ├── compressed.js        # Main game engine (minified)
│   └── gl-matrix-min.js      # Matrix/vector math library
└── datas/
    ├── objects/             # 3D models (.obj) – truck parts, terrain, props
    ├── textures/             # Texture images (.png/.jpg)
    ├── sounds/                # Sound effects (.mp3)
    ├── musics/                # Background music (.ogg)
    ├── shaders/                # GLSL vertex/fragment shaders
    ├── fonts/                  # Bitmap font (.fnt/.png)
    └── resources.txt           # Ordered list of resource files used by the engine
```

## Running the Game

Because the game loads assets via JavaScript (`fetch`/`XHR`), it needs to be served over HTTP rather than opened directly as a local file. From the project's root folder, run a simple static server, for example:

```bash
# Python 3
python3 -m http.server 8000

# or Node.js
npx serve .
```

Then open `http://localhost:8000` in a browser that supports WebGL.

## Credits

- **Engine Coding, Graphics:** Daniel Labriet (DanLabGames)
- **Production, Business Development:** Julien Donguy (AdAsGame)
- **Publisher:** FAMOBI Inc.
- **Testers:** Lea, Emma, Monsieur S.