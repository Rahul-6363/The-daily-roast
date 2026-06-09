import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '10rem 2rem',
        backgroundColor: '#fcfcfc',
        color: '#1a120b',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.h2 
          className="display-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '3rem', color: '#1a120b' }}
        >
          More Than Coffee.
        </motion.h2>

        <motion.p
          className="description-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
            lineHeight: 1.8, 
            opacity: 0.8,
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic'
          }}
        >
          At The Daily Roast, every ingredient is selected with care, every cup is handcrafted with passion, and every visit becomes part of a story worth sharing.
        </motion.p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.6 }}
        style={{
          marginTop: '5rem',
          width: '1px',
          height: '100px',
          backgroundColor: '#b77b4c'
        }}
      />
    </section>
  );
}
