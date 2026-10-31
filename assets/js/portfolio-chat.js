(() => {
  'use strict';
  const toggle = document.querySelector('#chat-toggle');
  const panel = document.querySelector('#chat');
  const input = document.querySelector('#chat-input');
  const log = document.querySelector('#chat-log');
  const topics = [
    [/focus|learning|direction|architect|platform|aprend|enfoque|arquitect/, 'Zanete is growing toward Cloud & Platform Architecture. Current learning areas include Platform Engineering, Cloud Architecture, Security, System Design and AI-powered development. These are development areas, not current architect job titles.'],
    [/technolog|tecnolog|stack|skill|java|kotlin|typescript|spring|backend/, 'Her hands-on stack includes Java, Kotlin, TypeScript, Spring Boot, REST APIs and microservices. Her background also includes AWS, Docker, event-driven systems, CI/CD, observability and test automation.'],
    [/cloud|aws|docker|ecs|lambda|sqs|sns|rds|nube/, 'Her infrastructure experience includes AWS, Docker, ECS, Lambda, SQS/SNS and RDS. She is deepening her expertise in cloud architecture, platform engineering and security.'],
    [/experience|experiencia|work|trabaj|test|sdet|quality/, 'Zanete builds and maintains production systems and works across engineering and test automation. She develops internal tools and improves reliability, integration testing and testability. Employers, dates and years of experience have not been published here.'],
    [/project|proyecto|case study/, 'The Projects section presents exploration areas in cloud platforms and AI automation. They are not completed published case studies. Detailed projects will be added when ready to share.'],
    [/ai|automation|automat|intelligen|inteligencia/, 'She is exploring AI-assisted development, workflow automation and AI-enabled applications. The portfolio does not claim an AI Architect role or completed AI projects.'],
    [/contact|github|email|linkedin|hire|available|disponib|contrat/, 'Connect through GitHub: https://github.com/ZaneteHirona. Email, LinkedIn and availability are not provided here. This chat does not send messages to Zanete.'],
    [/about|who|quien|sobre|zanete/, 'Zanete is a Software Engineer with experience in backend development, cloud infrastructure, distributed systems and engineering quality, growing toward cloud platforms and practical AI integration.']
  ];
  function open(value) {
    panel.hidden = !value;
    toggle.setAttribute('aria-expanded', String(value));
    (value ? input : toggle).focus();
  }
  function append(text, visitor = false) {
    const p = document.createElement('p');
    p.textContent = text;
    if (visitor) p.className = 'visitor';
    log.append(p);
    while (log.children.length > 40) log.firstElementChild.remove();
    log.scrollTop = log.scrollHeight;
  }
  function ask(question) {
    if (!question.trim()) return;
    append(question.trim(), true);
    const text = question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const topic = topics.find(([pattern]) => pattern.test(text));
    append(topic ? topic[1] : 'I do not have that information in the portfolio. Ask about technologies, experience, cloud, projects, current focus or contact. For other questions, connect with Zanete on GitHub.');
    input.value = '';
  }
  toggle.addEventListener('click', () => open(panel.hidden));
  document.querySelector('#chat-close').addEventListener('click', () => open(false));
  panel.addEventListener('keydown', (e) => { if (e.key === 'Escape') open(false); });
  document.querySelector('#chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    ask(input.value);
    input.focus();
  });
  document.querySelectorAll('#chat-options button').forEach((b) => b.addEventListener('click', () => ask(b.textContent)));
})();
