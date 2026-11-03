// Utility to handle railway announcement audio with Web Audio API chime fallback
export function playRailwayAnnouncement(onEnded, onProgress) {
  let isCancelled = false;

  // Function to play classic Indian Railways 2-tone station chime (Ding... Dong...)
  const playStationChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Note 1: High bell chime (E5 ~ 659Hz)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, ctx.currentTime);
      gain1.gain.setValueAtTime(0.2, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.85);

      // Note 2: Low chime (C5 ~ 523.25Hz) after 0.4s
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(523.25, ctx.currentTime + 0.35);
      gain2.gain.setValueAtTime(0.22, ctx.currentTime + 0.35);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.start(ctx.currentTime + 0.35);
      osc2.stop(ctx.currentTime + 1.25);
    } catch (e) {
      console.warn('Web Audio chime not supported', e);
    }
  };

  const audio = new Audio('/announcement.mp3');
  let audioPlayed = false;

  const handleFallback = () => {
    if (isCancelled) return;
    playStationChime();
    // Simulate natural speaking duration ~7 seconds for reading Hindi announcement
    const duration = 7500;
    const start = Date.now();
    const interval = setInterval(() => {
      if (isCancelled) {
        clearInterval(interval);
        return;
      }
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      if (onProgress) onProgress(progress);
      if (progress >= 1) {
        clearInterval(interval);
        if (onEnded) onEnded();
      }
    }, 100);
  };

  audio.addEventListener('play', () => {
    audioPlayed = true;
  });

  audio.addEventListener('timeupdate', () => {
    if (audio.duration && onProgress) {
      onProgress(audio.currentTime / audio.duration);
    }
  });

  audio.addEventListener('ended', () => {
    if (!isCancelled && onEnded) onEnded();
  });

  audio.addEventListener('error', () => {
    console.info('announcement.mp3 not found or failed; using synthetic chime and caption timer.');
    handleFallback();
  });

  // Try playing the mp3 file
  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.info('Audio play error, falling back to chime & caption timer:', err);
      handleFallback();
    });
  }

  return () => {
    isCancelled = true;
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch (_) {}
  };
}

