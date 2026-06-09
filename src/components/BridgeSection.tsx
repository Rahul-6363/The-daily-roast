import { motion } from 'framer-motion';

export type BridgeVariant = 'stats' | 'quote' | 'process' | 'seasonal';

interface BridgeSectionProps {
  variant: BridgeVariant;
}

const statsData = [
  { value: '300+', label: 'Hand-selected beans' },
  { value: '9 bar', label: 'Extraction pressure' },
  { value: '25s', label: 'Perfect pull time' },
  { value: '4°C', label: 'Milk temperature' },
];

const processSteps = [
  { step: '01', title: 'Source', desc: 'Single-origin beans, ethically sourced from Colombian highlands.' },
  { step: '02', title: 'Roast', desc: 'Small-batch roasting to unlock the full flavor spectrum.' },
  { step: '03', title: 'Brew', desc: 'Precision extraction by our trained baristas, every time.' },
  { step: '04', title: 'Serve', desc: 'Delivered fresh, within moments of being crafted.' },
];

const seasonalTags = [
  'Almond Croissant', 'Matcha Latte', 'Berry Danish',
  'Salted Caramel', 'Hazelnut Mocha', 'Avocado Toast',
  'Cold Brew', 'Cardamom Chai',
];

export default function BridgeSection({ variant }: BridgeSectionProps) {
  if (variant === 'stats') {
    return (
      <section
        style={{
          padding: '7rem 2rem',
          backgroundColor: '#0b0908',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#b77b4c',
              marginBottom: '4rem',
            }}
          >
            The Science of Coffee
          </motion.p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '3rem 5rem',
            }}
          >
            {statsData.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                style={{ textAlign: 'center', flex: '1 1 160px', maxWidth: '220px' }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: '#e5b05c',
                    marginBottom: '0.5rem',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    opacity: 0.55,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'quote') {
    return (
      <section
        style={{
          padding: '8rem 2rem',
          backgroundColor: '#1a120b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: '780px', width: '100%', textAlign: 'center' }}>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              height: '1px',
              backgroundColor: '#b77b4c',
              marginBottom: '3rem',
              transformOrigin: 'left',
            }}
          />
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
              fontStyle: 'italic',
              lineHeight: 1.45,
              color: '#fcfcfc',
              margin: 0,
            }}
          >
            "Every cup begins as a conversation.
            <br />
            Ours begins with yours."
          </motion.blockquote>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
            style={{
              height: '1px',
              backgroundColor: '#b77b4c',
              marginTop: '3rem',
              transformOrigin: 'right',
            }}
          />
        </div>
      </section>
    );
  }

  if (variant === 'process') {
    return (
      <section style={{ padding: '8rem 2rem', backgroundColor: '#0b0908' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              textAlign: 'center',
              marginBottom: '5rem',
              color: '#fcfcfc',
            }}
          >
            From Roastery to Table.
          </motion.h3>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
            }}
          >
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                style={{
                  flex: '1 1 220px',
                  maxWidth: '255px',
                  padding: '2.5rem',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.8rem',
                    color: '#b77b4c',
                    marginBottom: '1rem',
                    opacity: 0.4,
                    lineHeight: 1,
                  }}
                >
                  {s.step}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    marginBottom: '0.8rem',
                    color: '#fcfcfc',
                  }}
                >
                  {s.title}
                </h4>
                <p
                  style={{
                    opacity: 0.6,
                    fontSize: '0.92rem',
                    lineHeight: 1.7,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // seasonal
  return (
    <section
      style={{
        padding: '8rem 2rem',
        backgroundColor: '#0b0908',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#b77b4c',
            marginBottom: '2rem',
            fontFamily: 'var(--font-body)',
          }}
        >
          Seasonal Specials
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3.8rem)',
            marginBottom: '3.5rem',
            lineHeight: 1.2,
            color: '#fcfcfc',
          }}
        >
          Made Fresh.
          <br />
          Every Single Day.
        </motion.h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.9rem',
            justifyContent: 'center',
          }}
        >
          {seasonalTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              style={{
                padding: '0.65rem 1.6rem',
                borderRadius: '50px',
                border: '1px solid rgba(183,123,76,0.45)',
                fontSize: '0.88rem',
                letterSpacing: '0.05em',
                fontFamily: 'var(--font-body)',
                color: '#e5b05c',
                display: 'inline-block',
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
