export default function SectionHeader({ eyebrow, title, intro }) {
  return (
    <div className="mb-3" style={{ maxWidth: 760 }}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      {title && <h2 className="display-5 font-serif">{title}</h2>}
      {intro && (
        <p className="mt-3 fs-5 text-muted-soft" style={{ letterSpacing: 'normal' }}>
          {intro}
        </p>
      )}
    </div>
  )
}