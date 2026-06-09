import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const inputStyle: React.CSSProperties = {
  flex: '1 1 200px',
  padding: '1rem 1.4rem',
  backgroundColor: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  color: '#fcfcfc',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  width: '100%',
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', date: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', date: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const fieldStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === field ? 'rgba(183,123,76,0.7)' : 'rgba(255,255,255,0.1)',
  });

  return (
    <section
      id="contact"
      style={{
        padding: '10rem 2rem',
        backgroundColor: '#1a120b',
        color: '#fcfcfc',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(183,123,76,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#b77b4c',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          Reserve Your Spot
        </motion.p>

        <motion.h2
          className="display-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '1.5rem', textAlign: 'center' }}
        >
          Make A Reservation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.65 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            marginBottom: '4rem',
            maxWidth: '500px',
            margin: '0 auto 4rem auto',
          }}
        >
          Reserve your corner, plan a celebration, or simply say hello. We'd love to hear from you.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}
        >
          <div style={{ display: 'flex', gap: '1.4rem', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              required
              style={fieldStyle('name')}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              required
              style={fieldStyle('email')}
            />
          </div>

          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            onFocus={() => setFocused('date')}
            onBlur={() => setFocused(null)}
            style={{
              ...fieldStyle('date'),
              colorScheme: 'dark',
            }}
          />

          <textarea
            placeholder="Your message or special requests..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            rows={5}
            required
            style={{
              ...fieldStyle('message'),
              resize: 'vertical',
              minHeight: '140px',
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.5rem' }}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '1rem 3.5rem',
                background: sent ? '#2a6a3a' : 'transparent',
                border: sent ? '1px solid #4caf50' : '1px solid #b77b4c',
                borderRadius: '30px',
                color: '#fcfcfc',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'background 0.3s, border-color 0.3s',
              }}
            >
              {sent ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
