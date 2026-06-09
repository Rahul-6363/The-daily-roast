export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#050403', color: '#fcfcfc', padding: '5rem 2rem 2rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '4rem' }}>
        
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem' }}>The Daily Roast</h2>
          <p style={{ opacity: 0.6, fontSize: '0.9rem', maxWidth: '300px' }}>
            Elevating your daily ritual with uncompromising quality and passion.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
          <div>
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1.5rem', color: '#b77b4c' }}>Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.8 }}>
              <li><a href="#" style={{ transition: 'opacity 0.2s' }}>Menu</a></li>
              <li><a href="#" style={{ transition: 'opacity 0.2s' }}>About</a></li>
              <li><a href="#" style={{ transition: 'opacity 0.2s' }}>Gallery</a></li>
              <li><a href="#" style={{ transition: 'opacity 0.2s' }}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1.5rem', color: '#b77b4c' }}>Social</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.8 }}>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Pinterest</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>

      </div>

      <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }}>
        © 2026 The Daily Roast. All rights reserved.
      </div>
    </footer>
  );
}
