document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Toggle ---
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Audio Showreel Player Engine ---
  const audioCards = document.querySelectorAll('.audio-card');
  const allAudios = [];

  audioCards.forEach(card => {
    const audio = card.querySelector('audio');
    const playBtn = card.querySelector('.play-toggle-btn');
    const iconPlay = card.querySelector('.icon-play');
    const iconPause = card.querySelector('.icon-pause');
    const progressSlider = card.querySelector('.progress-slider');
    const currentTimeEl = card.querySelector('.time-current');
    const durationEl = card.querySelector('.time-duration');
    const volSlider = card.querySelector('.vol-slider');
    const volBtn = card.querySelector('.vol-btn');
    const iconVolHigh = card.querySelector('.icon-vol-high');
    const iconVolMuted = card.querySelector('.icon-vol-muted');

    if (!audio) return;
    allAudios.push(audio);

    let prevVolume = 1;

    function formatTime(seconds) {
      if (isNaN(seconds) || seconds === Infinity) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Set duration once metadata is loaded
    audio.addEventListener('loadedmetadata', () => {
      if (durationEl) durationEl.textContent = formatTime(audio.duration);
    });

    // Play/Pause Click Handler
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (audio.paused) {
          // Pause all other audio tracks first
          allAudios.forEach(otherAudio => {
            if (otherAudio !== audio) {
              otherAudio.pause();
            }
          });
          audio.play().catch(e => console.log('Audio playback prevented:', e));
        } else {
          audio.pause();
        }
      });
    }

    // Sync Play State to Icons
    audio.addEventListener('play', () => {
      if (iconPlay) iconPlay.style.display = 'none';
      if (iconPause) iconPause.style.display = 'block';
    });

    audio.addEventListener('pause', () => {
      if (iconPlay) iconPlay.style.display = 'block';
      if (iconPause) iconPause.style.display = 'none';
    });

    // Update Progress
    audio.addEventListener('timeupdate', () => {
      if (!isNaN(audio.duration) && audio.duration > 0) {
        const percent = (audio.currentTime / audio.duration) * 100;
        if (progressSlider) progressSlider.value = percent;
        if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
      }
    });

    // Scrubber Seeking
    if (progressSlider) {
      progressSlider.addEventListener('input', () => {
        if (!isNaN(audio.duration) && audio.duration > 0) {
          audio.currentTime = (progressSlider.value / 100) * audio.duration;
        }
      });
    }

    // Volume Slider
    if (volSlider) {
      volSlider.addEventListener('input', () => {
        const val = volSlider.value / 100;
        audio.volume = val;
        updateVolIcons(val);
      });
    }

    // Mute Toggle
    if (volBtn) {
      volBtn.addEventListener('click', () => {
        if (audio.volume > 0) {
          prevVolume = audio.volume;
          audio.volume = 0;
          if (volSlider) volSlider.value = 0;
          updateVolIcons(0);
        } else {
          audio.volume = prevVolume || 1;
          if (volSlider) volSlider.value = (prevVolume || 1) * 100;
          updateVolIcons(audio.volume);
        }
      });
    }

    function updateVolIcons(vol) {
      if (vol === 0) {
        if (iconVolHigh) iconVolHigh.style.display = 'none';
        if (iconVolMuted) iconVolMuted.style.display = 'block';
      } else {
        if (iconVolHigh) iconVolHigh.style.display = 'block';
        if (iconVolMuted) iconVolMuted.style.display = 'none';
      }
    }

    // Track Ended
    audio.addEventListener('ended', () => {
      if (iconPlay) iconPlay.style.display = 'block';
      if (iconPause) iconPause.style.display = 'none';
      if (progressSlider) progressSlider.value = 0;
      if (currentTimeEl) currentTimeEl.textContent = '0:00';
    });
  });

  // --- Contact & Free Mix Form Handler ---
  const contactForm = document.getElementById('projectInquiryForm');
  const formSuccess = document.getElementById('formSuccessMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      const formData = new FormData(contactForm);

      try {
        // Send via Web3Forms free endpoint or Formspree
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          contactForm.reset();
          if (formSuccess) formSuccess.style.display = 'block';
          submitBtn.textContent = 'Message Sent!';
        } else {
          // Graceful fallback to mailto
          fallbackMailto(formData);
        }
      } catch (err) {
        fallbackMailto(formData);
      } finally {
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }, 5000);
      }
    });
  }

  function fallbackMailto(formData) {
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const service = formData.get('service') || '';
    const trackLink = formData.get('track_link') || '';
    const message = formData.get('message') || '';

    const subject = encodeURIComponent(`New RJC Audio Inquiry: ${service} (${name})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\nTrack Link: ${trackLink}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:rob@rjcmusicproduction.co.uk?subject=${subject}&body=${body}`;
    if (formSuccess) {
      formSuccess.textContent = 'Your email client has opened. Please send the email to complete your inquiry.';
      formSuccess.style.display = 'block';
    }
  }
});
