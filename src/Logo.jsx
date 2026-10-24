export default function Logo({ size = 40, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Logo Colégio Tíria">
      <circle cx="32" cy="32" r="31" fill="#4F0341" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M14 40c6-3 12-3 18 1 6-4 12-4 18-1V24c-6-3-12-3-18 1-6-4-12-4-18-1z" fill="#FFFFFF" />
      <path d="M32 25v16" stroke="#4F0341" strokeWidth="2" />
      <path d="M22 18a10 10 0 0 1 20 0" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}
