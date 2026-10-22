/** Small brand marks for the social links (simple paths, no icon font). */
export function SocialIcon({ network, className = "h-4 w-4" }: { network: string; className?: string }) {
  const n = network.toLowerCase();
  if (n === "facebook")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z" />
      </svg>
    );
  if (n === "x" || n === "twitter")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z" />
      </svg>
    );
  if (n === "google")
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M12.2 10.6v3h4.3c-.2 1.1-1.4 3.3-4.3 3.3-2.6 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.5 0 2.5.6 3 1.2l2.1-2C16 5.2 14.3 4.4 12.2 4.4 8 4.4 4.6 7.8 4.6 12s3.4 7.6 7.6 7.6c4.4 0 7.3-3.1 7.3-7.4 0-.5 0-.9-.1-1.3h-7.2z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}
