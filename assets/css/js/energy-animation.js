
(() => {
  const canvas = document.getElementById("energy-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return; 

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let width = 0;
  let height = 0;
  let animationId;

  const towers = [];
  const particles = [];

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    towers.length = 0;

    for (let i = 0; i < 5; i++) {
      towers.push({
        x: width * (0.08 + i * 0.22),
        y: height * (0.48 + (i % 2) * 0.08),
        scale: 0.65 + Math.random() * 0.3
      });
    }
  }

  function drawTower(tower) {
    const { x, y, scale } = tower;
    const h = 125 * scale;
    const w = 48 * scale;

    ctx.strokeStyle = "rgba(22, 166, 161, 0.38)";
    ctx.lineWidth = 1.2;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - w, y - h);
    ctx.lineTo(x + w, y - h);
    ctx.lineTo(x, y);
    ctx.moveTo(x - w * 0.7, y - h * 0.68);
    ctx.lineTo(x + w * 0.7, y - h * 0.68);
    ctx.moveTo(x - w * 0.85, y - h * 0.4);
    ctx.lineTo(x + w * 0.85, y - h * 0.4);
    ctx.moveTo(x - w * 0.55, y - h * 0.68);
    ctx.lineTo(x + w * 0.55, y - h * 0.4);
    ctx.moveTo(x + w * 0.55, y - h * 0.68);
    ctx.lineTo(x - w * 0.55, y - h * 0.4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - w * 1.5, y - h * 0.68);
    ctx.lineTo(x + w * 1.5, y - h * 0.68);
    ctx.moveTo(x - w * 1.8, y - h * 0.4);
    ctx.lineTo(x + w * 1.8, y - h * 0.4);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x - w * 0.5, y - h * 0.15);
    ctx.lineTo(x + w * 0.5, y - h * 0.15);
    ctx.stroke();
  }

  function drawLines(time) {
    ctx.strokeStyle = "rgba(22, 166, 161, 0.22)";
    ctx.lineWidth = 1;

    for (let i = 0; i < towers.length - 1; i++) {
      const a = towers[i];
      const b = towers[i + 1];

      for (let j = 0; j < 3; j++) {
        const y1 = a.y - (35 + j * 22) * a.scale;
        const y2 = b.y - (35 + j * 22) * b.scale;

        ctx.beginPath();
        ctx.moveTo(a.x, y1);
        ctx.quadraticCurveTo(
          (a.x + b.x) / 2,
          Math.max(y1, y2) + 20 + Math.sin(time / 1200 + j) * 3,
          b.x,
          y2
        );
        ctx.stroke();
      }
    }
  }

  function drawSubstation() {
    const x = width * 0.77;
    const y = height * 0.67;
    const w = Math.min(width * 0.18, 190);
    const h = 65;

    ctx.strokeStyle = "rgba(22, 166, 161, 0.35)";
    ctx.lineWidth = 1.2;

    ctx.strokeRect(x, y - h, w, h);

    for (let i = 1; i < 5; i++) {
      const px = x + (w / 5) * i;

      ctx.beginPath();
      ctx.moveTo(px, y - h);
      ctx.lineTo(px, y);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(px, y - h - 9, 5, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.moveTo(x - 15, y);
    ctx.lineTo(x + w + 15, y);
    ctx.stroke();
  }

  function drawParticles(time) {
    if (reducedMotion) return;

    ctx.fillStyle = "#16D9E0";

    for (let i = 0; i < 12; i++) {
      const progress = (time / 5000 + i / 12) % 1;
      const x = progress * width;
      const y = height * 0.36 + Math.sin(progress * Math.PI * 4) * 13;

      ctx.beginPath();
      ctx.arc(x, y, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function draw(time = 0) {
    ctx.clearRect(0, 0, width, height);

    drawLines(time);
    towers.forEach(drawTower);
    drawSubstation();
    drawParticles(time);

    if (!reducedMotion) {
      animationId = requestAnimationFrame(draw);
    }
  }

  resize();
  draw();

  window.addEventListener("resize", resize);
})();

