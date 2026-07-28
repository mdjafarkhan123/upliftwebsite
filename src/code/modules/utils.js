/**
 * utils.js
 * Shared utility functions used across modules.
 * Import from here — never duplicate in individual modules.
 */

/**
 * Throttle a function to fire at most once per `delay` ms.
 * Guarantees a final call after the last invocation settles.
 *
 * @param {Function} func
 * @param {number} delay - milliseconds
 * @returns {Function}
 */
export function throttle(func, delay) {
    let timeoutId = null;
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();
        const timeSinceLastCall = now - lastCall;

        if (timeSinceLastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastCall = Date.now();
                func.apply(this, args);
            }, delay - timeSinceLastCall);
        }
    };
}
