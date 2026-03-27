anime({
  targets: ['.profile', '.separator', '.bio', '.social-links', '.footer'],
  opacity: [0, 1],
  translateY: [8, 0],
  duration: 600,
  delay: anime.stagger(80, { start: 150 }),
  easing: 'easeOutCubic',
});

anime({
  targets: 'h1',
  filter: ['blur(8px)', 'blur(0px)'],
  duration: 800,
  delay: 200,
  easing: 'easeOutCubic',
});
