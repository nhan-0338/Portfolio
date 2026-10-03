/**
 * =========================================================================
 * ZEN SPACE / IMMERSIVE FOCUS SCRIPT
 * - Web Audio API ambient sound synthesis (Rain, White Noise, Lo-Fi Chords)
 * - Canvas Constellation & Cyber Glow Particle Visualizer
 * - Pomodoro Focus Timer
 * - Motivational Developer Quotes
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initParticleCanvas();
  initAmbientAudio();
  initPomodoroTimer();
  initQuoteRotator();
});

/* -------------------------------------------------------------------------
   1. Interactive Particle Visualizer
   ------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById("zen-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 40 : 80;
  const maxDistance = 140;

  let mouse = { x: null, y: null, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? "rgba(0, 229, 255, " : "rgba(168, 85, 247, ";
      this.alpha = Math.random() * 0.5 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse repulsion/attraction
      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 3;
          this.y -= (dy / dist) * force * 3;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${this.color}${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#00e5ff";
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const opacity = (1 - dist / maxDistance) * 0.25;
          ctx.strokeStyle = `rgba(0, 229, 255, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* -------------------------------------------------------------------------
   2. Web Audio API Ambient Sound Generator
   ------------------------------------------------------------------------- */
let audioCtx = null;
let currentAmbient = null;
let gainNode = null;

function initAmbientAudio() {
  const soundBtns = document.querySelectorAll(".zen-sound-btn");
  if (!soundBtns.length) return;

  soundBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-sound");
      if (btn.classList.contains("is-playing")) {
        stopAmbient();
        btn.classList.remove("is-playing");
      } else {
        soundBtns.forEach(b => b.classList.remove("is-playing"));
        btn.classList.add("is-playing");
        playAmbient(type);
      }
    });
  });
}

function playAmbient(type) {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  stopAmbient();

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
  gainNode.connect(audioCtx.destination);

  if (type === "rain") {
    // Generate pink noise for soft rain
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.05;
      b6 = white * 0.115926;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to simulate raindrops
    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1000, audioCtx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gainNode);
    whiteNoise.start();
    currentAmbient = whiteNoise;
  } else if (type === "waves") {
    // Gentle binaural deep tone
    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    osc1.type = "sine";
    osc2.type = "sine";
    osc1.frequency.setValueAtTime(120, audioCtx.currentTime);
    osc2.frequency.setValueAtTime(124, audioCtx.currentTime); // 4Hz theta wave

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    osc1.start();
    osc2.start();
    currentAmbient = { stop: () => { osc1.stop(); osc2.stop(); } };
  } else if (type === "lofi") {
    // Gentle electronic drone / warm chord
    const freqs = [220, 277.18, 329.63, 415.30]; // A major 7 chord
    const oscs = freqs.map(f => {
      const osc = audioCtx.createOscillator();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(f, audioCtx.currentTime);
      osc.connect(gainNode);
      osc.start();
      return osc;
    });
    currentAmbient = { stop: () => oscs.forEach(o => o.stop()) };
  }
}

function stopAmbient() {
  if (currentAmbient) {
    try {
      currentAmbient.stop();
    } catch (e) {}
    currentAmbient = null;
  }
}

/* -------------------------------------------------------------------------
   3. Pomodoro Focus Timer
   ------------------------------------------------------------------------- */
let timerInterval = null;
let timeLeft = 25 * 60;
let isRunning = false;

function initPomodoroTimer() {
  const display = document.getElementById("timer-display");
  const startBtn = document.getElementById("timer-start-btn");
  const resetBtn = document.getElementById("timer-reset-btn");
  const modeBtns = document.querySelectorAll(".timer-mode-btn");

  if (!display || !startBtn) return;

  function updateDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  startBtn.addEventListener("click", () => {
    if (isRunning) {
      clearInterval(timerInterval);
      isRunning = false;
      startBtn.textContent = "Start Focus";
      startBtn.classList.remove("portfolio-button-primary");
      startBtn.classList.add("portfolio-button-secondary");
    } else {
      isRunning = true;
      startBtn.textContent = "Pause";
      startBtn.classList.add("portfolio-button-primary");
      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateDisplay();
        } else {
          clearInterval(timerInterval);
          isRunning = false;
          startBtn.textContent = "Start Focus";
          alert("Focus session complete! Time to take a mindful break.");
        }
      }, 1000);
    }
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 25 * 60;
    startBtn.textContent = "Start Focus";
    updateDisplay();
  });

  modeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modeBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const mins = parseInt(btn.getAttribute("data-mins"), 10);
      clearInterval(timerInterval);
      isRunning = false;
      timeLeft = mins * 60;
      startBtn.textContent = "Start Focus";
      updateDisplay();
    });
  });

  updateDisplay();
}

/* -------------------------------------------------------------------------
   4. Motivational Dev Quotes Rotator
   ------------------------------------------------------------------------- */
const quotes = [
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Architecture is the decisions that you wish you could get right early in a project.", author: "Ralph Johnson" }
];

function initQuoteRotator() {
  const quoteText = document.getElementById("zen-quote-text");
  const quoteAuthor = document.getElementById("zen-quote-author");
  if (!quoteText || !quoteAuthor) return;

  let index = 0;
  function showNextQuote() {
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    setTimeout(() => {
      quoteText.textContent = `"${quotes[index].text}"`;
      quoteAuthor.textContent = `— ${quotes[index].author}`;
      quoteText.style.opacity = 1;
      quoteAuthor.style.opacity = 1;
      index = (index + 1) % quotes.length;
    }, 400);
  }

  showNextQuote();
  setInterval(showNextQuote, 10000);
}
