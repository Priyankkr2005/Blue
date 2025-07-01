document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const section = item.getAttribute('data-section');
    document.querySelector('.main-header span').textContent = `# ${section}`;
    document.querySelector('#main-content .main-body').innerHTML = `
      <h2>Welcome to ${section.replace('-', ' ')}</h2>
      <p>This is a placeholder chat section for "${section}".</p>
      <div class="chat-entry">
        <div class="entry-meta">Cassandra <span>11:57 PM</span></div>
        <div class="audio-entry">▶️ 00:00 🔊 ─────────────── 20:00</div>
      </div>
      <div class="bottom-icons">
        <button class="mic">🎤</button>
        <button class="plus">+</button>
      </div>
    `;
  });
});
