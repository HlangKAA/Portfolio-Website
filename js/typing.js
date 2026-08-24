/* ========================================
   TYPING EFFECT — Hero Tagline Rotator
   ======================================== */
class TypingEffect {
  constructor(elementId, words, options = {}) {
    this.element = document.getElementById(elementId);
    if (!this.element) return;

    this.words = words;
    this.typeSpeed = options.typeSpeed || 80;
    this.deleteSpeed = options.deleteSpeed || 40;
    this.pauseTime = options.pauseTime || 2000;
    this.currentWordIndex = 0;
    this.currentText = '';
    this.isDeleting = false;

    this.type();
  }

  type() {
    const currentWord = this.words[this.currentWordIndex];

    if (this.isDeleting) {
      this.currentText = currentWord.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentWord.substring(0, this.currentText.length + 1);
    }

    this.element.textContent = this.currentText;

    let timeout = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.currentText === currentWord) {
      timeout = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      timeout = 400;
    }

    setTimeout(() => this.type(), timeout);
  }
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new TypingEffect('typed-text', [
    'Computer Science Student',
    'AI & ML Enthusiast',
    'Game Developer',
    'Problem Solver',
    'International Collaborator'
  ], {
    typeSpeed: 70,
    deleteSpeed: 35,
    pauseTime: 2200
  });
});
