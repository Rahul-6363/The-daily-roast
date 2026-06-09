import { motion } from 'framer-motion';

interface RecipeStep {
  step: string;
  desc: string;
}

interface ItemInfo {
  name: string;
  tagline: string;
  price: { size: string; amount: string }[];
  description: string;
  origin?: string;
  allergens?: string;
  calories?: string;
  recipe: RecipeStep[];
  pairsWith: string[];
  accentColor: string;
  bgColor: string;
}

interface ItemInfoPanelProps {
  item: ItemInfo;
}

export const itemsData: Record<string, ItemInfo> = {
  espresso: {
    name: 'Espresso',
    tagline: 'The soul of every great cup.',
    price: [
      { size: 'Single Shot', amount: '₹180' },
      { size: 'Double Shot', amount: '₹240' },
      { size: 'Ristretto', amount: '₹220' },
    ],
    description:
      'Our espresso is crafted from single-origin Colombian Supremo beans, sourced from the highland farms of Huila at 1,800m elevation. Each shot is pulled at precisely 9 bar of pressure for 25–28 seconds, yielding a thick, golden crema layered over a richly complex body with notes of dark chocolate, dried cherry, and roasted hazelnut.',
    origin: 'Huila, Colombia — 1,800m elevation',
    allergens: 'None',
    calories: '5–10 kcal per shot',
    recipe: [
      { step: '01 — Grind', desc: 'Freshly ground at 200–250 microns on demand, never pre-ground.' },
      { step: '02 — Dose', desc: '18g in the portafilter, tamped at exactly 30 lbs of pressure.' },
      { step: '03 — Extract', desc: '9 bar, 93 °C water forced through the puck for 26 seconds.' },
      { step: '04 — Serve', desc: 'Poured immediately into a pre-warmed demitasse cup.' },
    ],
    pairsWith: ['Dark chocolate', 'Biscotti', 'Lemon zest'],
    accentColor: '#e5b05c',
    bgColor: '#0b0908',
  },
  cappuccino: {
    name: 'Cappuccino',
    tagline: 'Balance perfected. Morning elevated.',
    price: [
      { size: 'Regular (180ml)', amount: '₹280' },
      { size: 'Large (240ml)', amount: '₹330' },
      { size: 'Iced', amount: '₹310' },
    ],
    description:
      'A classic Italian ratio of equal parts espresso, steamed milk, and dense microfoam — our cappuccino is a study in harmony. Made with locally sourced full-cream milk steamed to exactly 65 °C, it delivers a velvety texture that reveals our espresso\'s natural sweetness without overpowering it. Finished with a leaf or rosette by our trained baristas.',
    origin: 'Milk: Nandini, Karnataka. Beans: Coorg, India',
    allergens: 'Milk (dairy)',
    calories: '90–120 kcal',
    recipe: [
      { step: '01 — Pull Shot', desc: 'A double ristretto forms the concentrated espresso base.' },
      { step: '02 — Steam Milk', desc: 'Full-cream milk steamed to 65 °C with dense, silky microfoam.' },
      { step: '03 — Pour', desc: 'Milk poured in thirds — liquid first, microfoam last for texture.' },
      { step: '04 — Finish', desc: 'Latte art poured on top — a rosette or tulip for every cup.' },
    ],
    pairsWith: ['Butter croissant', 'Almond biscotti', 'Cinnamon cake'],
    accentColor: '#b77b4c',
    bgColor: '#1a120b',
  },
  mocha: {
    name: 'Mocha',
    tagline: 'Luxury in a cup. Coffee meets chocolate.',
    price: [
      { size: 'Regular (280ml)', amount: '₹340' },
      { size: 'Large (360ml)', amount: '₹390' },
      { size: 'Iced Mocha', amount: '₹360' },
    ],
    description:
      'The Daily Roast Mocha begins with our signature double espresso, blended with house-made 72% Belgian dark chocolate sauce — never syrup. Fresh steamed milk and a cloud of whipped cream finish the cup, making every sip a layered experience of bitter, sweet, and creamy in perfect proportion. A guilty pleasure that doesn\'t compromise.',
    origin: 'Chocolate: Callebaut, Belgium. Espresso: Colombia',
    allergens: 'Milk (dairy), Cocoa',
    calories: '280–340 kcal',
    recipe: [
      { step: '01 — Chocolate Base', desc: '20g of 72% dark chocolate sauce is placed at the cup\'s base.' },
      { step: '02 — Espresso', desc: 'Double shot poured hot over the chocolate and stirred to blend.' },
      { step: '03 — Steam & Pour', desc: 'Steamed full-cream milk poured to create a creamy emulsion.' },
      { step: '04 — Top', desc: 'Finished with house whipped cream and a dusting of cocoa powder.' },
    ],
    pairsWith: ['Hazelnut cookie', 'Brownie', 'Orange peel'],
    accentColor: '#c07941',
    bgColor: '#0b0908',
  },
  croissant: {
    name: 'Butter Croissant',
    tagline: 'Hundreds of layers. One perfect bite.',
    price: [
      { size: 'Plain Butter', amount: '₹180' },
      { size: 'Almond Croissant', amount: '₹230' },
      { size: 'Chocolate Croissant', amount: '₹220' },
    ],
    description:
      'Baked on-site every morning starting at 5 AM, our croissants follow a traditional French lamination process with 27 layers of hand-rolled dough and cultured European butter. The result: a shell that shatters at the first bite, giving way to an impossibly tender, honeycomb interior with a rich, buttery aroma that fills the café every morning.',
    origin: 'French lamination method. Butter: Amul Extra Creamy',
    allergens: 'Gluten (wheat), Milk (dairy), Eggs',
    calories: '280–310 kcal',
    recipe: [
      { step: '01 — Détrempe', desc: 'Dough made with flour, yeast, milk and a touch of sugar. Rested overnight.' },
      { step: '02 — Laminate', desc: 'European butter block folded in — 3 turns creating 27 distinct layers.' },
      { step: '03 — Shape & Proof', desc: 'Rolled, cut, and shaped by hand. Proofed for 2 hours until puffy.' },
      { step: '04 — Bake', desc: 'Baked at 200 °C for 18 minutes to a deep, mahogany golden crust.' },
    ],
    pairsWith: ['Double espresso', 'Café au lait', 'Fresh fruit jam'],
    accentColor: '#e5b05c',
    bgColor: '#1a120b',
  },
  'blueberry-cheesecake': {
    name: 'Blueberry Cheesecake',
    tagline: 'Creamy. Tangy. A dessert worth remembering.',
    price: [
      { size: 'Single Slice (150g)', amount: '₹320' },
      { size: 'Double Slice (300g)', amount: '₹580' },
      { size: 'Whole Cake (pre-order)', amount: '₹2,400' },
    ],
    description:
      'A New York-style baked cheesecake on a buttered digestive biscuit base, topped with a handmade blueberry compote using fresh seasonal blueberries. We use premium cream cheese, fresh eggs, and a hint of lemon zest to achieve that signature smooth, dense creaminess. Chilled for 12 hours before serving — patience is part of the recipe.',
    origin: 'Blueberries: Himachal Pradesh. Cream cheese: Amul',
    allergens: 'Milk (dairy), Eggs, Gluten (wheat)',
    calories: '420–460 kcal per slice',
    recipe: [
      { step: '01 — Biscuit Base', desc: 'Crushed digestives mixed with melted butter, pressed and chilled firm.' },
      { step: '02 — Cheesecake Batter', desc: 'Cream cheese, eggs, sugar and lemon zest beaten smooth, poured over base.' },
      { step: '03 — Bake & Cool', desc: 'Baked in a water bath at 160 °C for 55 min. Rested in oven to prevent cracks.' },
      { step: '04 — Blueberry Compote', desc: 'Fresh blueberries, sugar and lemon juice reduced to a glossy topping.' },
    ],
    pairsWith: ['Cappuccino', 'Chamomile tea', 'Cold brew'],
    accentColor: '#a08bbf',
    bgColor: '#0b0908',
  },
};

export default function ItemInfoPanel({ item }: ItemInfoPanelProps) {
  return (
    <section
      style={{
        backgroundColor: item.bgColor,
        padding: '8rem 2rem 10rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: `radial-gradient(circle, ${item.accentColor}0d 0%, transparent 65%)`,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '5rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: item.accentColor,
                marginBottom: '0.8rem',
              }}
            >
              Featured Item
            </p>
            <h2
              className="display-title"
              style={{ color: '#fcfcfc', marginBottom: '0.6rem' }}
            >
              {item.name}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                color: item.accentColor,
                opacity: 0.9,
              }}
            >
              {item.tagline}
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            {item.calories && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: item.accentColor, marginBottom: '0.3rem' }}>{item.calories}</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, fontFamily: 'var(--font-body)' }}>Calories</div>
              </div>
            )}
            {item.origin && (
              <div style={{ textAlign: 'center', maxWidth: '160px' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#fcfcfc', marginBottom: '0.3rem', opacity: 0.8 }}>{item.origin}</div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5, fontFamily: 'var(--font-body)' }}>Origin</div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Main Grid */}
        <div
          className="info-panel-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: item.accentColor,
                marginBottom: '1.2rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              About
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.97rem',
                lineHeight: 1.85,
                opacity: 0.75,
              }}
            >
              {item.description}
            </p>
            {item.allergens && (
              <p
                style={{
                  marginTop: '1.5rem',
                  fontSize: '0.75rem',
                  opacity: 0.4,
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '0.05em',
                }}
              >
                Allergens: {item.allergens}
              </p>
            )}
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.12 }}
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: item.accentColor,
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              Pricing
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {item.price.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 0',
                    borderBottom: i < item.price.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', opacity: 0.75 }}>{p.size}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.3rem',
                      color: item.accentColor,
                    }}
                  >
                    {p.amount}
                  </span>
                </div>
              ))}
            </div>
            {/* Pairs with */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, fontFamily: 'var(--font-body)', marginBottom: '1rem' }}>Pairs Well With</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {item.pairsWith.map((pair, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '50px',
                      border: `1px solid ${item.accentColor}55`,
                      fontSize: '0.8rem',
                      color: item.accentColor,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {pair}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recipe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.24 }}
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <p
              style={{
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: item.accentColor,
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-body)',
              }}
            >
              How It's Made
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {item.recipe.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: `1px solid ${item.accentColor}55`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <span style={{ fontSize: '0.65rem', color: item.accentColor, fontFamily: 'var(--font-body)' }}>{i + 1}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: item.accentColor, marginBottom: '0.3rem', opacity: 0.85 }}>
                      {r.step.split('—')[1]?.trim() || r.step}
                    </p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', opacity: 0.65, lineHeight: 1.65 }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
