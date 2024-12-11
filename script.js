// Add snowflakes falling effect
document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow';
    document.body.appendChild(snowContainer);
  
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = Math.random() * 100 + '%';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      snowflake.style.animationDuration = 5 + Math.random() * 5 + 's';
      snowContainer.appendChild(snowflake);
    }
  });
  