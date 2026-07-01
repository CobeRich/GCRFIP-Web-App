type AtmosphereVariant =
  | 'home'
  | 'about'
  | 'programme'
  | 'research'
  | 'resources'
  | 'news'
  | 'get-involved'
  | 'contact'

type PageAtmosphereProps = {
  variant: AtmosphereVariant
}

export default function PageAtmosphere({ variant }: PageAtmosphereProps) {
  return (
    <div aria-hidden className={`page-atmosphere page-atmosphere--${variant}`}>
      <span className="layer layer-a" />
      <span className="layer layer-b" />
      <span className="layer layer-c" />
      <span className="pulse pulse-1" />
      <span className="pulse pulse-2" />
      <span className="pulse pulse-3" />
    </div>
  )
}
