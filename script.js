/* ==========================================
   Serena Yang Portfolio — Interactive Script
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Project Detailed Data Dictionary (Including Serena's Original p5.js Sketches)
    const projectData = {
        'p5-loom': {
            title: 'Digital Loom — Binary Cross-Stitch Life',
            subtitle: 'Translating Conway\'s Game of Life into a Cross-Stitch Aesthetic & Audio Sonification',
            category: 'p5.js Playable Original Artwork',
            liveUrl: '#',
            githubUrl: 'https://github.com/yserena60-yyy',
            embedUrl: '',
            description: 'Serena\'s original p5.js generative art creation! Digital Loom translates Conway\'s Game of Life into a traditional cross-stitch weaving aesthetic. Each "alive" cell is rendered as a silk-sheen cross-stitch "X". Drag your mouse on the canvas to sew new stitches, press "C" to clear the loom, or "R" to generate randomized innovation patterns.',
            features: [
                '<strong>🧵 The Digital Stitch Aesthetic:</strong> Renders cellular automata grid cells as silk-sheen cross-stitch "X" threads over a fabric background.',
                '<strong> Human-Machine Sewing Interaction:</strong> Mouse dragging directly sews new stitches into the evolving binary fabric.',
                '<strong> Keyboard & UI Controls:</strong> Sound is muted by default. Click <code>Sound OFF</code> on the card to toggle audio synth on/off.',
                '<strong>🎵 Data Sonification:</strong> Synthesizes audio sine frequencies dynamically mapped to stitch density and structural evolution.'
            ],
            techStack: ['p5.js (v1.9.0)', 'Cellular Automata', 'p5.Oscillator Audio', 'Cross-Stitch Canvas', 'Toroidal Grid Logic']
        },
        'p5-flow': {
            title: 'Disordered Order — Control vs System',
            subtitle: 'Interactive Rain, System Entropy & Procedural Lightning Simulation',
            category: 'p5.js Playable Original Artwork',
            liveUrl: '#',
            githubUrl: 'https://github.com/yserena60-yyy',
            embedUrl: '',
            description: 'Serena\'s original p5.js interactive simulation exploring the tension between human control and systemic entropy. Raindrops are torn between human attraction (moving towards cursor) and system noise fields. As system order decays from 1.0 to 0.0, chaotic lightning bolts strike through the dark sky.',
            features: [
                '<strong> Control vs Entropy HUD:</strong> Real-time visual progress bar tracking order decay over time.',
                '<strong> Human vs System Dynamics:</strong> Raindrops balance human mouse attraction against procedural Perlin noise forces.',
                '<strong>⚡ Procedural Lightning Bolts:</strong> Jagged lightning strikes generated dynamically as order decreases.',
                '<strong> Interactive Order Reset:</strong> Click anywhere on the canvas or the Reset Order button on the card to restore equilibrium.'
            ],
            techStack: ['p5.js (v1.9.0)', 'Perlin Noise Field', 'Kinematic Rain Drops', 'Procedural Lightning', 'Interactive HUD']
        },
        'wisdom-garden': {
            title: 'Wisdom Garden — Smart Arduino Water System',
            subtitle: 'Closed-Loop Physical Computing Prototype & Global Water Scarcity Video Essay',
            category: 'Arduino & Physical Computing',
            liveUrl: '#',
            githubUrl: '#',
            isVideo: true,
            videoSrc: 'video essay.mov',
            description: 'An integrated physical computing prototype and digital research video essay exploring smart agricultural irrigation. By translating invisible soil moisture into continuous measurable data (0-1023), Wisdom Garden creates an automated closed-loop system that waters plants only when needed, contrasting everyday overwatering habits with global freshwater scarcity challenges.',
            features: [
                '<strong>🌱 Arduino Soil Moisture Sensing (Analog A3):</strong> Continuously monitors soil electrical resistance on a 0-1023 scale rather than binary wet/dry states.',
                '<strong>🎨 Real-Time RGB LED Visual Feedback (Pins 9, 10, 11):</strong> Red (>700: Dry), Green (300-700: Moderate), and Blue (<300: Wet) state feedback.',
                '<strong>💧 Servo Motor Actuation & Dispenser (Pin 4):</strong> Micro-servo motor tilting bottle cap dispenser to automatically release water upon red dry reading and reset when wet.',
                '<strong> Circuit Stability Architecture:</strong> Resistors protect LED current loops while a smoothing capacitor stabilizes power delivery during servo rotation bursts.',
                '<strong>🌍 Macro Water Scarcity Context:</strong> Video essay connecting micro-scale smart gardening to UN/FAO global agricultural water management (World Bank Nigeria irrigation, Morocco data advisory, Indonesia modernization).'
            ],
            techStack: ['Arduino Uno', 'Soil Moisture Sensor (A0→A3)', 'Micro Servo Motor (Pin 4)', 'RGB LED (Pins 9,10,11)', 'Closed-Loop Circuit', 'Video Essay']
        },
        'soap-bubble': {
            title: '3D Soap Bubble & Interactive Liquid Application',
            subtitle: 'Real-Time GPU Wave Simulation & MediaPipe AI Hand-Tracking Physics',
            category: 'WebGL & AI Vision',
            liveUrl: 'https://yserena60-yyy.github.io/3d-soap-bubble/',
            githubUrl: 'https://github.com/yserena60-yyy/3d-soap-bubble',
            embedUrl: 'https://yserena60-yyy.github.io/3d-soap-bubble/',
            description: 'A state-of-the-art interactive WebGL web application combining real-time GPU fluid wave simulation, rigid crystal glass refraction, and MediaPipe Machine Learning Hand-Tracking 3D iridescent soap bubble physics.',
            features: [
                '<strong>🌊 Swipe Wave Mode:</strong> Real-time WebGL ping-pong FBO heightfield wave simulation creating fluid caustics and light refraction mapped over the live camera video stream.',
                '<strong>💧 Water Drop Mode:</strong> Realistic concentric drop ripples generated upon index finger pointing or mouse clicks with custom speed and propagation controls.',
                '<strong>💎 Glass Shards Mode:</strong> 18 organic rigid crystal glass tiles (oval, hexagonal, square) with rigid-body sliding physics, angular rotation, and edge highlights.',
                '<strong>🫧 3D Soap Bubble Pinch Mode:</strong> Real-time MediaPipe Hand-Tracking tracking Thumb (Landmark 4) & Index finger (Landmark 8). Pinch fingers together to spawn bubbles, pull apart to inflate, release to float with upward buoyancy, and over-pinch to trigger 3D pop particle bursts.',
                '<strong> Physical Soap Film Material:</strong> Built with <code>MeshPhysicalMaterial</code> featuring high optical transmission (0.85), IOR (1.2), and thin-film rainbow iridescence.',
                '<strong>📷 WebRTC Live Camera Integration:</strong> Real-time rear camera video feed background with dark studio standby backdrop fallback.'
            ],
            techStack: ['Three.js (r160)', 'MediaPipe Hands', 'GLSL Shaders', 'WebGL Ping-Pong FBO', 'WebRTC Camera API', 'MeshPhysicalMaterial']
        },
        'culture-map': {
            title: 'Culture Map — Historical Cultural Heritage Explorer',
            subtitle: 'Flutter & GPS Navigation App for Historical Heritage Exploration',
            category: 'Spatial & Mobile',
            liveUrl: 'https://yserena60-yyy.github.io/culture_map/',
            githubUrl: 'https://github.com/yserena60-yyy/culture_map',
            embedUrl: 'https://yserena60-yyy.github.io/culture_map/',
            description: 'A Flutter-based spatial humanities exploration application featuring full turn-by-turn GPS navigation, Wikidata landmark extraction, real-time Wikipedia integration, and vintage parchment UI design.',
            features: [
                '<strong>📍 Map & Landmark Exploration:</strong> Global historical landmarks integrated with Wikidata APIs, retrieving full rich articles and images from Wikipedia.',
                '<strong>🧭 Complete Navigation System:</strong> 3 navigation modes (Walking 🚶 / Cycling 🚴 / Driving 🚗) with real-time high-precision GPS tracking updating every 5 meters.',
                '<strong>🗺️ OSRM Route Planning & Turn-by-Turn Guidance:</strong> Uses OSRM API to fetch real road geometries with voice prompts, heading-up auto map rotation, and screen wakelock.',
                '<strong>🎨 Vintage Parchment UI:</strong> Inspired by <em>"One Hundred Years of Solitude"</em> with Cinzel & Crimson Text typography and burgundy red/gold palette.',
                '<strong>💾 Backend & Community System:</strong> Supabase authentication, bookmark collections, rating & review system, exploration statistics, and level progression system.'
            ],
            techStack: ['Flutter SDK', 'flutter_map', 'OSRM Routing API', 'Geolocator GPS', 'flutter_tts Voice', 'Supabase Flutter', 'Wikidata API']
        },
        'myth-card': {
            title: 'Mythic Arcanum — 3D Irish Mythology Spatial Evolution',
            subtitle: 'Touchless AI Computer Vision Hand-Tracking & IMAX Cinematic 3D Tarot',
            category: 'WebGL & Digital Humanities',
            liveUrl: 'https://yserena60-yyy.github.io/myth-card/',
            githubUrl: 'https://github.com/yserena60-yyy/myth-card',
            embedUrl: 'https://yserena60-yyy.github.io/myth-card/',
            description: 'An immersive 3D spatial humanities application that chronicles the four epochal cycles of Irish mythology through real-time AI computer vision hand tracking, dynamic WebGL shaders, 360° tarot cards, and IMAX cinematic video theater.',
            features: [
                '<strong>🌌 3D Celestial Constellation Map:</strong> Three.js particle starfields, solar orbit mechanics, and atmospheric lighting transitions matching each mythological era.',
                '<strong>🖐️ AI Computer Vision Hand Tracking:</strong> Google MediaPipe touchless gesture control — top-layer floating arcane cursor, pinch-to-grab card levitation, pinch-to-close modals, and video play/pause controls.',
                '<strong>🃏 360° Double-Sided Mythic Tarot Cards:</strong> Canvas-rendered character cards featuring front artwork/stats and golden Celtic Triquetra runic backings visible during 3D rotation.',
                '<strong>🎬 IMAX Cinematic Story Theater:</strong> DOM modal system with embedded HD videos, auto-loop tracking, and GSAP camera flight trajectories.',
                '<strong>📱 Mouse Pointer Fallback:</strong> Seamless fallback to mouse interactions if camera permission is unavailable.'
            ],
            techStack: ['Three.js (r160)', 'MediaPipe Vision', 'GSAP Animation', 'Custom WebGL Shaders', 'Web Audio API', 'HTML5 Video Engine']
        },
        'court-ladies': {
            title: 'Admonitions of the Instructress to Court Ladies（女史箴图）',
            subtitle: 'Digital Cultural Heritage, Ethical Preservation & Displacement Documentary',
            category: 'Digital Humanities & Heritage',
            liveUrl: 'https://reclaimed-futures-collective.framer.website/projects/court-ladies',
            githubUrl: '#',
            embedUrl: 'https://reclaimed-futures-collective.framer.website/projects/court-ladies',
            description: 'A reflective short documentary and digital humanities research project exploring "The Admonitions of the Instructress to the Court Ladies" — China\'s iconic ancient scroll painting now housed in the British Museum. The project examines cultural displacement, Western conservation ethics, and repatriation stewardship.',
            features: [
                '<strong>📜 Ancient Narrative Scroll Research:</strong> Analyzing Chinese moral philosophy, imperial art history, and political narrative in Gu Kaizhi\'s masterwork.',
                '<strong>🏛️ Museum & Conservation Ethics:</strong> Critical inquiry into how 1900 displacement and British Museum conservation practices altered the scroll\'s physical integrity.',
                '<strong>🎙️ Reflective Documentary Narration:</strong> Pairing evocative voice narration with historic scroll imagery to communicate emotional loss and cultural memory.',
                '<strong> Public Humanities Engagement:</strong> Bridging academic debates on heritage repatriation with public-facing digital storytelling.'
            ],
            techStack: ['Digital Humanities', 'Framer Web Platform', 'Documentary Media', 'British Museum Archives', 'Cultural Memory Studies']
        },
        'food-hierarchy': {
            title: 'Golden Orange — 3D Food Artifact',
            subtitle: '3D Spatial Modeling & Interactive PBR Surface Texture Artifact',
            category: 'WebGL & 3D GLB Model',
            liveUrl: '#',
            githubUrl: '#',
            isModelViewer: true,
            modelSrc: 'Golden_orange_skin_wi_1124024038_texture.glb',
            description: 'An interactive 3D GLB digital model of a Golden Orange food artifact featuring detailed surface skin texturing, PBR metallic-roughness reflection, and 360-degree orbit lighting controls.',
            features: [
                '<strong>🍊 Interactive 360° 3D Model:</strong> Built with GLTF/GLB binary mesh format, allowing real-time mouse/touch orbit rotation, zooming, and pan controls.',
                '<strong> Dynamic Studio Lighting:</strong> High-definition environment lighting and shadow rendering mapped onto the high-resolution orange skin texture.',
                '<strong> Spatial Humanities Integration:</strong> Digital preservation of tangible cultural food artifacts for interactive public scholarship.'
            ],
            techStack: ['GLB Binary Model (30MB)', 'PBR Texturing', 'model-viewer Web Component', 'WebGL 3D Orbit Controls']
        },
        'data-narrative': {
            title: 'Reading the Data, Reading the Self',
            subtitle: 'Critical Data Studies, Reflexive Visualisation & Narrative Design',
            category: 'Digital Humanities Narrative',
            liveUrl: '#',
            githubUrl: 'https://github.com/yserena60-yyy',
            embedUrl: '',
            description: 'A critical data narrative exploring how quantitative datasets construct user identities and operational metrics. Investigating the non-neutrality of numbers and the ethics of digital archives.',
            features: [
                '<strong> Critical Data Reflections:</strong> Deconstructing platform data algorithms and personal tracking data.',
                '<strong>📊 Reflexive Visualizations:</strong> D3.js interactive charts questioning data objectivity.',
                '<strong> Human-Centered Narrative:</strong> Synthesizing operational analytics with cultural memory.'
            ],
            techStack: ['Python', 'D3.js', 'Data Visualization', 'Critical Data Studies']
        }
    };

    let loomSketchRef = null;
    let flowSketchRef = null;

    // 2. Navbar Scroll Blur Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 4. Category Filter System
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 40);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 5. Robust JS Hover for Side Pop-Out Panel — uses relatedTarget to prevent disappearing
    document.querySelectorAll('.p5-popout-card').forEach(card => {
        const flyout = card.querySelector('.p5-flyout-panel');
        let hideTimer = null;

        const isWithinScope = (target) => {
            // Check if the related target is within the card or flyout
            return card.contains(target) || (flyout && flyout.contains(target));
        };

        const showFlyout = () => {
            if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
            card.classList.add('active');
        };

        const scheduledHide = (relatedTarget) => {
            if (isWithinScope(relatedTarget)) return; // Mouse stayed within card+flyout area
            if (hideTimer) clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                card.classList.remove('active');
                hideTimer = null;
            }, 120);
        };

        card.addEventListener('mouseenter', showFlyout);
        card.addEventListener('mouseleave', (e) => scheduledHide(e.relatedTarget));

        if (flyout) {
            flyout.addEventListener('mouseenter', showFlyout);
            flyout.addEventListener('mouseleave', (e) => scheduledHide(e.relatedTarget));
        }
    });

    // 6. Initialize Serena's p5.js Playable Sketches — RESET fresh each time flyout opens
    if (typeof p5 !== 'undefined') {

        // --- SKETCH 1: Serena's Digital Loom (Conway Cross-Stitch) ---
        const loomCardContainer = document.getElementById('p5-loom-card-container');
        const loomCard = loomCardContainer ? loomCardContainer.closest('.p5-popout-card') : null;
        if (loomCardContainer) {
            loomSketchRef = new p5((s) => {
                let grid, cols, rows, resolution = 16, osc, soundEnabled = true; // Sound ON by default

                function create2DArray(c, r) {
                    let arr = new Array(c);
                    for (let i = 0; i < arr.length; i++) arr[i] = new Array(r).fill(0);
                    return arr;
                }

                function countNeighbors(gridArr, x, y) {
                    let sum = 0;
                    for (let i = -1; i < 2; i++) {
                        for (let j = -1; j < 2; j++) {
                            let col = (x + i + cols) % cols;
                            let row = (y + j + rows) % rows;
                            sum += gridArr[col][row];
                        }
                    }
                    sum -= gridArr[x][y];
                    return sum;
                }

                s.setup = () => {
                    let w = 500;
                    let h = 310;
                    s.createCanvas(w, h);

                    cols = Math.floor(s.width / resolution);
                    rows = Math.floor(s.height / resolution);
                    if (cols <= 0 || rows <= 0) return;

                    // Always start grid fresh from scratch
                    grid = create2DArray(cols, rows);
                    for (let i = 0; i < cols; i++) {
                        for (let j = 0; j < rows; j++) {
                            if (s.random(1) < 0.22) grid[i][j] = 1;
                        }
                    }
                    s.frameRate(10);

                    // Auto-start sound on setup (sound ON by default)
                    try {
                        if (typeof p5.Oscillator !== 'undefined') {
                            osc = new p5.Oscillator('sine');
                            osc.start();
                            osc.amp(0); // Start silent, will ramp up in draw
                        }
                    } catch(e) {}
                };

                s.toggleSound = () => {
                    soundEnabled = !soundEnabled;
                    if (soundEnabled) {
                        if (typeof userStartAudio === 'function') userStartAudio();
                        try {
                            if (!osc && typeof p5.Oscillator !== 'undefined') {
                                osc = new p5.Oscillator('sine');
                                osc.start();
                                osc.amp(0);
                            } else if (osc) {
                                osc.start();
                                osc.amp(0);
                            }
                        } catch (e) {}
                    } else if (osc) {
                        try { osc.amp(0, 0.05); osc.stop(); } catch (e) {}
                    }
                    return soundEnabled;
                };

                s.clearGrid = () => {
                    grid = create2DArray(cols, rows);
                };

                s.randomGrid = () => {
                    for (let i = 0; i < cols; i++) {
                        for (let j = 0; j < rows; j++) grid[i][j] = s.floor(s.random(2));
                    }
                };

                s.draw = () => {
                    s.background(40, 30, 30);
                    if (!grid) return;

                    for (let i = 0; i < cols; i++) {
                        for (let j = 0; j < rows; j++) {
                            let x = i * resolution;
                            let y = j * resolution;
                            s.stroke(60, 50, 50); s.strokeWeight(1); s.noFill();
                            s.rect(x, y, resolution, resolution);
                            if (grid[i][j] === 1) {
                                s.stroke(200, 100, 100); s.strokeWeight(2);
                                s.line(x + 2, y + 2, x + resolution - 2, y + resolution - 2);
                                s.line(x + resolution - 2, y + 2, x + 2, y + resolution - 2);
                                s.stroke(255, 150, 150, 60); s.strokeWeight(4);
                                s.point(x + resolution / 2, y + resolution / 2);
                            }
                        }
                    }

                    let next = create2DArray(cols, rows);
                    let liveCount = 0;

                    for (let i = 0; i < cols; i++) {
                        for (let j = 0; j < rows; j++) {
                            let state = grid[i][j];
                            let neighbors = countNeighbors(grid, i, j);
                            if (state === 0 && neighbors === 3) next[i][j] = 1;
                            else if (state === 1 && (neighbors < 2 || neighbors > 3)) next[i][j] = 0;
                            else next[i][j] = state;
                            if (next[i][j] === 1) liveCount++;
                        }
                    }
                    grid = next;

                    if (liveCount === 0) {
                        for (let i = 0; i < cols; i++) {
                            for (let j = 0; j < rows; j++) {
                                if (s.random(1) < 0.18) grid[i][j] = 1;
                            }
                        }
                    }

                    if (osc && soundEnabled && liveCount > 0) {
                        let targetFreq = s.map(liveCount, 0, (cols * rows) / 4, 100, 800);
                        osc.freq(targetFreq, 0.1);
                        osc.amp(0.04, 0.1);
                    } else if (osc) {
                        osc.amp(0, 0.05);
                    }
                };

                s.mouseDragged = () => {
                    if (s.mouseX >= 0 && s.mouseX <= s.width && s.mouseY >= 0 && s.mouseY <= s.height) {
                        let i = Math.floor(s.mouseX / resolution);
                        let j = Math.floor(s.mouseY / resolution);
                        if (i >= 0 && i < cols && j >= 0 && j < rows) grid[i][j] = 1;
                    }
                };

                s.mousePressed = () => { s.mouseDragged(); };

                s.keyPressed = () => {
                    if (s.key === 'c' || s.key === 'C') s.clearGrid();
                    else if (s.key === 'r' || s.key === 'R') s.randomGrid();
                };
            }, 'p5-loom-card-container');

            const loomSoundBtn = document.getElementById('p5-loom-sound-btn');
            const loomClearBtn = document.getElementById('p5-loom-clear-btn');
            const loomRandBtn = document.getElementById('p5-loom-rand-btn');

            if (loomSoundBtn) {
                loomSoundBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (loomSketchRef) {
                        let isAudioActive = loomSketchRef.toggleSound();
                        if (isAudioActive) {
                            loomSoundBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i> Sound ON';
                            loomSoundBtn.classList.add('active');
                        } else {
                            loomSoundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> Sound OFF';
                            loomSoundBtn.classList.remove('active');
                        }
                    }
                });
            }

            if (loomClearBtn) {
                loomClearBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (loomSketchRef) loomSketchRef.clearGrid();
                });
            }

            if (loomRandBtn) {
                loomRandBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (loomSketchRef) loomSketchRef.randomGrid();
                });
            }
        }

        // --- SKETCH 2: Serena's Disordered Order (Rain & Lightning) ---
        const flowCardContainer = document.getElementById('p5-flow-card-container');
        if (flowCardContainer) {
            flowSketchRef = new p5((s) => {
                let drops = [], order = 1.0, decayRate = 0.0010, t = 0, bolt = null, boltCooldown = 0;

                class RainDrop {
                    constructor(x, y) {
                        this.x = x; this.y = y;
                        this.vx = s.random(-1, 1); this.vy = s.random(2, 5);
                        this.seed = s.random(1000); this.len = s.random(10, 20);
                    }
                    update() {
                        const dx = s.mouseX - this.x; const dy = s.mouseY - this.y;
                        const dist = s.sqrt(dx * dx + dy * dy) + 0.0001;
                        const ux = dx / dist; const uy = dy / dist;
                        const n = s.noise(this.seed, t); const sx = s.map(n, 0, 1, -1, 1);
                        const humanPower = 2.0 * order; const systemPower = 2.5 * (1.0 - order);
                        this.vx += ux * humanPower * 0.2 + sx * systemPower;
                        this.vy += 0.4 + s.abs(sx) * systemPower * 0.3;
                        const speed = s.sqrt(this.vx * this.vx + this.vy * this.vy);
                        const maxSpeed = 6;
                        if (speed > maxSpeed) { this.vx = (this.vx / speed) * maxSpeed; this.vy = (this.vy / speed) * maxSpeed; }
                        this.x += this.vx; this.y += this.vy;
                        this.vx *= 0.92; this.vy *= 0.92;
                        if (this.y > s.height) { this.y = s.random(-50, -10); this.x = s.random(s.width); }
                    }
                    display() {
                        const alpha = s.map(order, 0, 1, 60, 180);
                        s.stroke(255, alpha); s.strokeWeight(1.2);
                        s.line(this.x, this.y, this.x - this.vx * 3, this.y - this.len);
                    }
                }

                class Bolt {
                    constructor(x, y) {
                        this.points = [{ x, y }]; this.step = 0; this.maxSteps = 24; this.done = false;
                    }
                    update() {
                        if (this.done) return;
                        const last = this.points[this.points.length - 1];
                        const jag = s.lerp(0.2, 1.1, 1.0 - order);
                        const ang = s.PI / 2 + s.random(-jag, jag);
                        const nx = last.x + s.cos(ang) * 20; const ny = last.y + s.abs(s.sin(ang)) * 20;
                        this.points.push({ x: nx, y: ny }); this.step++;
                        if (ny > s.height || this.step > this.maxSteps) this.done = true;
                    }
                    display() {
                        const flash = s.map(order, 0, 1, 30, 10);
                        s.noStroke(); s.fill(255, flash); s.rect(0, 0, s.width, s.height);
                        s.stroke(255, 220); s.strokeWeight(2);
                        for (let i = 0; i < this.points.length - 1; i++) {
                            const a = this.points[i]; const b = this.points[i + 1];
                            s.line(a.x, a.y, b.x, b.y);
                        }
                    }
                }

                function handleLightning() {
                    boltCooldown = s.max(0, boltCooldown - 1);
                    const chance = s.lerp(0.001, 0.02, 1.0 - order);
                    if (!bolt && boltCooldown === 0 && s.random() < chance) {
                        bolt = new Bolt(s.random(s.width), 0); boltCooldown = 40;
                    }
                    if (bolt) {
                        bolt.update(); bolt.display();
                        if (bolt.done) bolt = null;
                    }
                }

                function drawHUD() {
                    s.noStroke(); s.fill(255); s.textSize(12);
                    s.text("Control vs System — Rain & Lightning", 14, 20);
                    s.text("Move mouse = human control | Click = reset order bar", 14, 36);
                    const barW = 160; const barH = 8; const x = 14; const y = 46;
                    s.noFill(); s.stroke(255); s.rect(x, y, barW, barH);
                    s.noStroke(); s.fill(168, 85, 247); s.rect(x, y, barW * order, barH);
                    s.fill(255); s.text("Order: " + s.nf(order, 1, 2), x + barW + 10, y + 8);
                }

                s.setup = () => {
                    let w = 500;
                    let h = 310;
                    s.createCanvas(w, h); s.background(0);
                    for (let i = 0; i < 180; i++) drops.push(new RainDrop(s.random(s.width), s.random(s.height)));
                };

                s.resetOrder = () => {
                    order = 1.0; s.background(0);
                    for (let d of drops) { d.vx += s.random(-1, 1); d.vy += s.random(-1, 1); }
                };

                s.draw = () => {
                    s.background(0, 24);
                    order = s.max(0, order - decayRate);
                    t += 0.01;

                    for (let d of drops) {
                        d.update();
                        d.display();
                    }

                    handleLightning();
                    drawHUD();
                };

                s.mousePressed = () => { s.resetOrder(); };
            }, 'p5-flow-card-container');

            const flowResetBtn = document.getElementById('p5-flow-reset-btn');
            if (flowResetBtn) {
                flowResetBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (flowSketchRef) flowSketchRef.resetOrder();
                });
            }
        }

    }

    // 7. Interactive Project Modal Handler
    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    const openProjectModal = (projectId) => {
        const p = projectData[projectId];
        if (!p) return;

        let previewHTML = '';
        if (p.isVideo) {
            previewHTML = `
                <div class="modal-iframe-wrapper" style="height: 420px; background: #000;">
                    <video controls src="${p.videoSrc}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px;" poster=""></video>
                </div>
            `;
        } else if (p.isModelViewer) {
            previewHTML = `
                <div class="modal-iframe-wrapper" style="height: 420px; background: radial-gradient(circle at 50% 50%, #1c1917 0%, #0c0a09 100%);">
                    <model-viewer src="${p.modelSrc}"
                                  alt="${p.title}"
                                  auto-rotate
                                  camera-controls
                                  shadow-intensity="1.5"
                                  exposure="1.2"
                                  touch-action="pan-y"
                                  style="width: 100%; height: 100%;">
                    </model-viewer>
                </div>
            `;
        } else if (p.embedUrl && p.embedUrl !== '#') {
            previewHTML = `
                <div class="modal-iframe-wrapper">
                    <iframe src="${p.embedUrl}" title="${p.title}" loading="lazy"></iframe>
                </div>
            `;
        }

        const featuresList = p.features.map(f => `<li><i class="fa-solid fa-sparkles"></i> ${f}</li>`).join('');
        const techPills = p.techStack.map(t => `<span class="tech-pill">${t}</span>`).join('');

        const liveBtnHTML = (p.liveUrl && p.liveUrl !== '#') ? 
            `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm"><i class="fa-solid fa-rocket"></i> Open Project Site</a>` : '';
        const githubBtnHTML = (p.githubUrl && p.githubUrl !== '#') ? 
            `<a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm"><i class="fa-brands fa-github"></i> View GitHub Repo</a>` : '';

        modalBody.innerHTML = `
            <span class="modal-header-tag">${p.category}</span>
            <h2 class="modal-title">${p.title}</h2>
            <p class="modal-lead">${p.subtitle}</p>

            <div class="modal-actions-bar">
                ${liveBtnHTML}
                ${githubBtnHTML}
            </div>

            ${previewHTML}

            <p class="about-text">${p.description}</p>

            <h3 class="modal-section-h3">🌟 Key Features &amp; Architecture</h3>
            <ul class="modal-features-list">
                ${featuresList}
            </ul>

            <h3 class="modal-section-h3">🛠️ Technology Stack</h3>
            <div class="tech-pill-container">
                ${techPills}
            </div>
        `;

        if (projectModal.showModal) {
            projectModal.showModal();
        } else {
            projectModal.setAttribute('open', 'true');
        }
    };

    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.project-card');
            if (card) {
                const projectId = card.getAttribute('data-project-id');
                openProjectModal(projectId);
            }
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            if (projectModal.close) {
                projectModal.close();
            } else {
                projectModal.removeAttribute('open');
            }
        });
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            const rect = projectModal.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                projectModal.close();
            }
        });
    }

    // 8. Interactive Loom Canvas Engine in Hero Card
    const loomCanvas = document.getElementById('loomCanvas');
    if (loomCanvas) {
        const ctx = loomCanvas.getContext('2d');
        let width = loomCanvas.width = loomCanvas.parentElement.clientWidth;
        let height = loomCanvas.height = 220;

        window.addEventListener('resize', () => {
            if (loomCanvas.parentElement) {
                width = loomCanvas.width = loomCanvas.parentElement.clientWidth;
                height = loomCanvas.height = 220;
            }
        });

        const numThreads = 24;
        const threads = [];
        for (let i = 0; i < numThreads; i++) {
            threads.push({
                x: (width / (numThreads + 1)) * (i + 1),
                offset: 0,
                velocity: 0,
                color: `hsl(${220 + i * 5}, 80%, 65%)`
            });
        }

        let mouseX = -100;
        let mouseY = -100;

        loomCanvas.addEventListener('mousemove', (e) => {
            const rect = loomCanvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;

            threads.forEach(t => {
                const dist = Math.abs(mouseX - t.x);
                if (dist < 20) {
                    t.velocity += (mouseX - t.x) * 0.4;
                }
            });
        });

        const animateLoom = () => {
            ctx.clearRect(0, 0, width, height);

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 1;
            for (let y = 20; y < height; y += 20) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            threads.forEach((t) => {
                const force = -0.15 * t.offset;
                t.velocity += force;
                t.velocity *= 0.88;
                t.offset += t.velocity;

                ctx.beginPath();
                ctx.moveTo(t.x + t.offset, 0);
                ctx.quadraticCurveTo(t.x + t.offset * 1.5, height / 2, t.x + t.offset, height);
                ctx.strokeStyle = t.color;
                ctx.lineWidth = 2.5;
                ctx.shadowBlur = 10;
                ctx.shadowColor = t.color;
                ctx.stroke();
                ctx.shadowBlur = 0;
            });

            requestAnimationFrame(animateLoom);
        };
        animateLoom();
    }

    // 9. Animated Metric Counter
    const metricNums = document.querySelectorAll('.metric-num');
    let hasAnimatedMetrics = false;

    const animateMetrics = () => {
        metricNums.forEach(numElement => {
            const target = parseInt(numElement.getAttribute('data-target'), 10);
            let current = 0;
            const increment = Math.ceil(target / 30) || 1;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    numElement.textContent = target;
                    clearInterval(timer);
                } else {
                    numElement.textContent = current;
                }
            }, 40);
        });
    };

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimatedMetrics) {
                    animateMetrics();
                    hasAnimatedMetrics = true;
                }
            });
        }, { threshold: 0.2 });
        observer.observe(heroSection);
    }

    // 10. Contact Form Handler Simulation
    const contactForm = document.getElementById('contact-form');
    const formToast = document.getElementById('form-toast');

    if (contactForm && formToast) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
                formToast.classList.remove('hidden');

                setTimeout(() => {
                    formToast.classList.add('hidden');
                }, 4000);
            }, 1000);
        });
    }

});
