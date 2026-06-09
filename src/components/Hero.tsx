import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, #1a120b 0%, #0b0908 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Floating particles background effect */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              backgroundColor: '#b77b4c',
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div style={{ zIndex: 10, textAlign: 'center', padding: '2rem' }}>
        <motion.h1 
          className="display-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '1rem', background: 'linear-gradient(to right, #fcfcfc, #b77b4c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          THE DAILY ROAST
        </motion.h1>
        
        <motion.h2
          className="sub-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '2rem', fontStyle: 'italic', color: '#e5b05c' }}
        >
          Crafted Daily. Served Beautifully.
        </motion.h2>

        <motion.p
          className="description-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          style={{ margin: '0 auto 3rem auto' }}
        >
          Experience handcrafted coffee, artisan pastries, and unforgettable flavors.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, backgroundColor: '#fcfcfc', color: '#0b0908' }}
          transition={{ duration: 0.5 }}
          style={{
            padding: '1rem 3rem',
            fontSize: '1.1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: 'transparent',
            color: '#fcfcfc',
            border: '1px solid #b77b4c',
            borderRadius: '30px',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            transition: 'all 0.3s ease'
          }}
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
          }}
        >
          Explore Menu
        </motion.button>
      </div>

      <motion.div
        style={{ position: 'absolute', bottom: '2rem', color: '#b77b4c' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
