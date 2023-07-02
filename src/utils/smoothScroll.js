// Variables to control the scroll behavior
const scrollSpeed = 3;  // Adjust the scroll speed (lower value = slower scroll)
let isScrolling = false;

// Disable default scroll behavior
export function disableScroll() {
   document.addEventListener('touchmove', preventDefault, { passive: false });
   document.addEventListener('wheel', preventDefault, { passive: false });
}

// Enable default scroll behavior
export function enableScroll() {
   document.removeEventListener('touchmove', preventDefault);
   document.removeEventListener('wheel', preventDefault);
}

// Prevent default scroll/touch behavior
function preventDefault(event) {
   event.preventDefault();
}

// Smooth scroll function
export function smoothScroll(targetPosition) {
   if (isScrolling) return;

   isScrolling = true;
   const currentPosition = window.scrollY;
   const distance = targetPosition - currentPosition;
   const duration = Math.abs(distance / scrollSpeed);

   let start;

   function step(timestamp) {

      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeInOutCubic(progress); // Apply easing function

      window.scrollTo(0, currentPosition + distance * easedProgress);

      if (elapsed < duration) {
         window.requestAnimationFrame(step);
      } else {
         isScrolling = false;
      }
   }
   window.requestAnimationFrame(step);
}

// Easing function for smooth animation
function easeInOutCubic(t) {
   return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;;
}

