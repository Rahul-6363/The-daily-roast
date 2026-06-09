import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visit" style={{ padding: '10rem 2rem', backgroundColor: '#0b0908', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        
        <motion.div 
          style={{ flex: '1 1 400px' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="display-title" style={{ marginBottom: '2rem' }}>Find Your Favorite Corner.</h2>
          <p className="description-text" style={{ marginBottom: '3rem' }}>
            Immerse yourself in the warm evening café atmosphere.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#b77b4c', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-body)' }}>Location</h4>
              <p style={{ opacity: 0.8 }}>123 Coffeehouse Lane,<br/>Indiranagar, Bangalore 560038</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#b77b4c', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-body)' }}>Opening Hours</h4>
              <p style={{ opacity: 0.8 }}>Mon - Fri: 7:00 AM - 9:00 PM<br/>Sat - Sun: 8:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#b77b4c', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-body)' }}>Contact</h4>
              <p style={{ opacity: 0.8 }}>hello@thedailyroast.com<br/>+91 98765 43210</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ flex: '1 1 400px', position: 'relative', height: '500px', borderRadius: '20px', overflow: 'hidden', backgroundColor: '#1a120b' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Mock Map Background */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, backgroundImage: 'radial-gradient(#b77b4c 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <motion.div
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#e5b05c' }}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.6, duration: 1, delay: 0.8 }}
          >
            <MapPin size={48} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
