/* ========================================
   PARTICLES — Canvas Constellation Effect
   ======================================== */
class ParticleNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 150 };
    this.particleCount = 80;
    this.maxDistance = 120;
    this.animationId = null;

    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.particles = [];
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  createParticles() {
    const count = window.innerWidth < 768 ? 40 : this.particleCount;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        // Alternate between purple and cyan
        color: Math.random() > 0.5
          ? `rgba(108, 99, 255, ${Math.random() * 0.5 + 0.3})`
          : `rgba(6, 182, 212, ${Math.random() * 0.4 + 0.2})`
      });
    }
  }

  drawParticle(p) {
    this.ctx.beginPath();
    this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = p.color;
    this.ctx.fill();
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const opacity = (1 - dist / this.maxDistance) * 0.15;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(108, 99, 255, ${opacity})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }
  }

  updateParticles() {
    this.particles.forEach(p => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interaction — gentle push
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x += dx * force * 0.02;
          p.y += dy * force * 0.02;
        }
      }
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.updateParticles();
    this.particles.forEach(p => this.drawParticle(p));
    this.drawConnections();
    this.animationId = requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new ParticleNetwork('hero-canvas');
});
