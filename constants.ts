// Tailwind's JIT scanner only picks up class names that appear literally
// in the source, so `delay-${idx * 100}` produces no CSS in a production
// build. These lookups keep the staggered-reveal effect using classes
// that are guaranteed to be generated.
export const CARD_DELAYS = ["delay-100", "delay-200", "delay-300"] as const;

export const CERT_DELAYS = [
  "delay-150",
  "delay-300",
  "delay-500",
  "delay-700",
] as const;
