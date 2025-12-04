<script>
  import { onMount } from 'svelte';
  import Swiper from 'swiper';
  import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';

  let swiper = null;
  let currentSlide = 0;
  let totalSlides = 5;

  const slideNames = [
    'riesgo-1-portada',
    'riesgo-2-tecnico',
    'riesgo-3-etico',
    'riesgo-4-social',
    'riesgo-5-cta'
  ];

  onMount(() => {
    // Initialize Swiper
    swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Keyboard, Mousewheel],
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      mousewheel: {
        forceToAxis: true,
        sensitivity: 1,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: (swiper) => {
          currentSlide = swiper.activeIndex;
          updateHash(slideNames[swiper.activeIndex]);
        },
      },
      hashNavigation: {
        watchState: true,
        replaceState: true,
      },
    });

    // Handle hash navigation on load
    const hash = window.location.hash.slice(1);
    const slideIndex = slideNames.indexOf(hash);
    if (slideIndex !== -1) {
      swiper.slideTo(slideIndex);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      const slideIndex = slideNames.indexOf(hash);
      if (slideIndex !== -1 && slideIndex !== currentSlide) {
        swiper.slideTo(slideIndex);
      }
    });
  });

  function updateHash(slideName) {
    window.location.hash = `#/${slideName}`;
  }

  function goToSlide(index) {
    if (swiper) {
      swiper.slideTo(index);
    }
  }

  function nextSlide() {
    if (swiper) {
      swiper.slideNext();
    }
  }

  function prevSlide() {
    if (swiper) {
      swiper.slidePrev();
    }
  }
</script>

<div class="presentation-container">
  <div class="swiper">
    <div class="swiper-wrapper">
      <slot />
    </div>

    <!-- Navigation Dots -->
    <div class="swiper-pagination"></div>

    <!-- Navigation Buttons -->
    <button
      class="swiper-button-prev nav-btn nav-btn-prev"
      title="Diapositiva anterior"
      on:click={prevSlide}
    >
      <ChevronLeft size={28} strokeWidth={2.5} />
    </button>

    <button
      class="swiper-button-next nav-btn nav-btn-next"
      title="Siguiente diapositiva"
      on:click={nextSlide}
    >
      <ChevronRight size={28} strokeWidth={2.5} />
    </button>
  </div>

  <!-- Slide Counter -->
  <div class="slide-counter">
    <span class="counter-number">{currentSlide + 1}</span>
    <span class="counter-separator">/</span>
    <span class="counter-total">{totalSlides}</span>
  </div>
</div>

<style>
  .presentation-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: var(--color-base-dark);
    overflow: hidden;
  }

  .swiper {
    width: 100%;
    height: 100%;
    --swiper-theme-color: var(--color-electric);
  }

  :global(.swiper-slide) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-behavior: smooth;
  }

  /* Navigation Buttons */
  .nav-btn {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    width: 50px;
    height: 50px;
    background: rgba(30, 58, 138, 0.6);
    border: 2px solid var(--color-electric);
    border-radius: var(--radius-md);
    color: var(--color-neutral-light);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-base);
    backdrop-filter: blur(8px);
  }

  .nav-btn:hover {
    background: rgba(30, 58, 138, 0.9);
    border-color: var(--color-accent-bright);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    transform: translateY(-50%) scale(1.1);
  }

  .nav-btn-prev {
    left: var(--spacing-2xl);
  }

  .nav-btn-next {
    right: var(--spacing-2xl);
  }

  /* Pagination Dots */
  :global(.swiper-pagination) {
    bottom: var(--spacing-3xl) !important;
    z-index: 100;
  }

  :global(.swiper-pagination-bullet) {
    width: 12px;
    height: 12px;
    background: rgba(96, 165, 250, 0.4);
    opacity: 0.6;
    transition: all var(--transition-base);
    border: 2px solid transparent;
  }

  :global(.swiper-pagination-bullet:hover) {
    background: var(--color-electric);
    transform: scale(1.2);
  }

  :global(.swiper-pagination-bullet-active) {
    background: var(--color-accent-bright);
    width: 32px;
    border-radius: 6px;
    opacity: 1;
  }

  /* Slide Counter */
  .slide-counter {
    position: fixed;
    bottom: var(--spacing-xl);
    right: var(--spacing-2xl);
    z-index: 100;
    font-family: var(--font-mono);
    font-size: 1.25rem;
    color: var(--color-electric);
    display: flex;
    gap: var(--spacing-sm);
    align-items: center;
    background: rgba(30, 58, 138, 0.4);
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-md);
    border: 1px solid rgba(96, 165, 250, 0.2);
    backdrop-filter: blur(8px);
  }

  .counter-separator {
    color: var(--color-neutral-light);
    opacity: 0.5;
  }

  .counter-total {
    color: var(--color-neutral-light);
    opacity: 0.7;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .nav-btn {
      width: 40px;
      height: 40px;
    }

    .nav-btn-prev {
      left: var(--spacing-lg);
    }

    .nav-btn-next {
      right: var(--spacing-lg);
    }

    .slide-counter {
      bottom: var(--spacing-lg);
      right: var(--spacing-lg);
      font-size: 1rem;
      padding: var(--spacing-sm) var(--spacing-md);
    }
  }

  @media (max-width: 480px) {
    .nav-btn {
      width: 36px;
      height: 36px;
    }

    :global(.swiper-pagination) {
      bottom: var(--spacing-xl) !important;
    }

    .slide-counter {
      bottom: var(--spacing-md);
      right: var(--spacing-md);
      font-size: 0.9rem;
    }
  }
</style>
