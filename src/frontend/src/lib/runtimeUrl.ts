/**
 * Returns the current page URL at runtime.
 * This ensures share/copy functionality works on both default canister URLs and custom domains.
 */
export function getCurrentPageUrl(): string {
  return window.location.href;
}
