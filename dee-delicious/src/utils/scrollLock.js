let scrollLockCounter = 0;

export function lockScroll() {
  scrollLockCounter += 1;
  document.body.style.overflow = "hidden";
}

export function unlockScroll() {
  scrollLockCounter -= 1;
  if (scrollLockCounter <= 0) {
    scrollLockCounter = 0;
    document.body.style.overflow = "";
  }
}
