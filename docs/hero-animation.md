# Hero animation

The homepage diagram uses GSAP and SVG signal paths. Motion styles live in `src/styles/pages/home/home.scss`; behavior lives in `src/code/modules/hero-system.js`.

Jafar plans to replace the six service-card SVG icons. Keep animation independent of their paths and artwork: animate only `.hero-system__icon`, preserve its wrapper and the service links. Only the central brand logo has cloned outline paths for the activation trace.

Each cycle traces the central logo, sends one deep-green glowing pulse to a service, illuminates nearby background dots, then briefly highlights and scales the card to 1.1× while moving its icon wrapper. When the pulse reaches the card, that exact same pulse keeps flowing through the active wire until the next circuit begins; there is no switch to a second visual style. The card's soft border glow and flowing wire respect the same pause and reduced-motion controls. The card stays at 1.1× until the next circuit sequence starts, then eases back to its original size. It pauses offscreen, in hidden tabs, on service hover/focus, or through the pause control. Reduced motion leaves a static diagram.
