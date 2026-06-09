import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    name: 'Espresso',
    desc: 'Single-origin Colombian. 18g, 26s pull, golden crema.',
    price: 'from ₹180',
    tag: 'Bestseller',
    color: '#b77b4c',
    emoji: '☕',
  },
  {
    name: 'Cappuccino',
    desc: 'Double ristretto, silky microfoam, latte art finish.',
    price: 'from ₹280',
    tag: 'Staff Pick',
    color: '#e5b05c',
    emoji: '☕',
  },
  {
    name: 'Mocha',
    desc: '72% Belgian dark chocolate sauce, espresso, whipped cream.',
    price: 'from ₹340',
    tag: 'Indulgent',
    color: '#c07941',
    emoji: '🍫',
  },
  {
    name: 'Butter Croissant',
    desc: 'Baked 5 AM daily. 27-layer French lamination, cultured butter.',
    price: 'from ₹180',
    tag: 'Fresh Daily',
    color: '#d4a853',
    emoji: '🥐',
  },
  {
    name: 'Blueberry Cheesecake',
    desc: 'NY-style baked cheesecake, fresh Himachal blueberry compote.',
    price: 'from ₹320',
    tag: 'House Special',
    color: '#a08bbf',
    emoji: '🫐',
  },
];

function MenuCard({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{
        scale: 1.04,
        boxShadow: `0 20px 60px ${item.color}28`,
        borderColor: `${item.color}70`,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        width: '100%',
        maxWidth: '280px',
        padding: '2.5rem 2rem',
        borderRadius: '20px',
        background: 'linear-gradient(160deg, #1a1614, #0b0908)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255,255,255,0.06)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Tag */}
      <div
        style={{
          position: 'absolute',
          top: '1.2rem',
          right: '1.2rem',
          padding: '0.3rem 0.8rem',
          borderRadius: '20px',
          border: `1px solid ${item.color}60`,
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: item.color,
          fontFamily: 'var(--font-body)',
          transform: 'translateZ(30px)',
        }}
      >
        {item.tag}
      </div>

      {/* Icon circle */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: `${item.color}20`,
          border: `1px solid ${item.color}40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
          fontSize: '1.4rem',
          transform: 'translateZ(40px)',
        }}
      >
        {item.emoji}
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.4rem',
          marginBottom: '0.7rem',
          color: '#fcfcfc',
          transform: 'translateZ(30px)',
        }}
      >
        {item.name}
      </h3>
      <p
        style={{
          opacity: 0.55,
          fontSize: '0.84rem',
          lineHeight: 1.65,
          fontFamily: 'var(--font-body)',
          marginBottom: '1.8rem',
          transform: 'translateZ(20px)',
        }}
      >
        {item.desc}
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.2rem',
          transform: 'translateZ(20px)',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            color: item.color,
          }}
        >
          {item.price}
        </span>
        <span
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            opacity: 0.4,
            fontFamily: 'var(--font-body)',
          }}
        >
          View Details ↓
        </span>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  return (
    <section id="menu" style={{ padding: '10rem 2rem', backgroundColor: '#0b0908', color: '#fcfcfc', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
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
          Crafted With Intention
        </motion.p>
        <motion.h2
          className="display-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '1rem' }}
        >
          Featured Menu
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            maxWidth: '420px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Every item made from scratch. Every ingredient sourced with purpose.
        </motion.p>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          maxWidth: '1300px',
          margin: '5rem auto 0',
          perspective: '1000px',
        }}
      >
        {items.map((item, index) => (
          <MenuCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
