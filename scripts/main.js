// Simple interactions: mobile nav toggle and form handler
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(nav.hasAttribute('hidden')) nav.removeAttribute('hidden'); else nav.setAttribute('hidden','');
    });
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // Honeypot check
      const hp = form.querySelector('input[name="phone_hp"]');
      if(hp && hp.value.trim() !== ''){
        // Likely a bot — silently abort
        return;
      }

      // Build mailto using plus-address for Gmail inbox filtering
      const recipient = 'nasumayacreatives+contact@gmail.com';
      const name = form.elements['name'].value || '';
      const company = form.elements['company'].value || '';
      const email = form.elements['email'].value || '';
      const message = form.elements['message'].value || '';
      const subject = encodeURIComponent(`Web問い合わせ: ${name}`);
      let body = `会社名: ${company}\nお名前: ${name}\nメール: ${email}\n\nメッセージ:\n${message}`;
      body = encodeURIComponent(body);

      // Open user's mail client with pre-filled email. This keeps serverless and simple.
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      form.reset();
    });
  }
});
