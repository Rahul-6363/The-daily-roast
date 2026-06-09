import { motion } from 'framer-motion';

const reviews = [
  {
    text: "The espresso here is unlike anything I've had in Bangalore. The crema is thick, the flavor complex — it's the kind of cup that makes you rethink everything you knew about coffee.",
    name: 'Arjun M.',
    role: 'Coffee Enthusiast',
    rating: '★★★★★',
    location: 'Indiranagar',
  },
  {
    text: "I come here every single morning. The cappuccino is consistently perfect and the croissants come out of the oven just as I arrive. It's become a ritual I genuinely look forward to.",
    name: 'Priya K.',
    role: 'Regular Customer',
    rating: '★★★★★',
    location: 'Koramangala',
  },
  {
    text: "We booked the space for a team offsite and the experience was flawless. The mocha kept our team going all day and the cheesecake was the highlight. Will absolutely be back.",
    name: 'Rahul S.',
    role: 'Product Manager',
    rating: '★★★★★',
    location: 'HSR Layout',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" style={{ padding: '10rem 2rem', backgroundColor: '#1a120b', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontSize: '0.72rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#b77b4c',
              fontFamily: 'var(--font-body)',
              marginBottom: '1.5rem',
            }}
          >
            What Guests Say
          </motion.p>
          <motion.h2
            className="display-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Stories Over Coffee.
          </motion.h2>
        </div>

        {/* Reviews grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              style={{
                padding: '2.5rem',
                backgroundColor: 'rgba(255,255,255,0.03)',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Stars */}
              <div style={{ color: '#e5b05c', fontSize: '1rem', letterSpacing: '3px' }}>
                {review.rating}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  opacity: 0.85,
                  flex: 1,
                }}
              >
                "{review.text}"
              </p>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.07)' }} />

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#fcfcfc', marginBottom: '0.2rem' }}>
                    {review.name}
                  </p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', opacity: 0.45, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {review.role}
                  </p>
                </div>
                <span
                  style={{
                    padding: '0.3rem 0.9rem',
                    borderRadius: '20px',
                    border: '1px solid rgba(183,123,76,0.3)',
                    fontSize: '0.7rem',
                    color: '#b77b4c',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {review.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid rgba(255,255,255,0.07)',
            backgroundColor: 'rgba(255,255,255,0.02)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              color: '#e5b05c',
              lineHeight: 1,
              marginBottom: '0.5rem',
            }}
          >
            4.9
          </div>
          <div style={{ color: '#e5b05c', fontSize: '1.2rem', letterSpacing: '4px', marginBottom: '0.8rem' }}>★★★★★</div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', opacity: 0.45, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Based on 480+ verified reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
