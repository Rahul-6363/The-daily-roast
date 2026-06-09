import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import CanvasSequence from './components/CanvasSequence';
import BridgeSection from './components/BridgeSection';
import ItemInfoPanel, { itemsData } from './components/ItemInfoPanel';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import VisitUs from './components/VisitUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const espressoText = [
  {
    title: "ESPRESSO",
    subtitle: "Pure Craft.",
    smallTexts: ["Freshly roasted beans.", "Expert extraction.", "Uncompromising flavor."],
    startProgress: 0,
    endProgress: 0.25
  },
  {
    title: "",
    subtitle: "Every Drop Matters.",
    smallTexts: ["Bold aromas.", "Golden crema.", "Perfect balance."],
    startProgress: 0.25,
    endProgress: 0.5
  },
  {
    title: "",
    subtitle: "Intense. Rich. Unforgettable.",
    smallTexts: ["A sensory experience crafted by passionate baristas."],
    startProgress: 0.5,
    endProgress: 0.75
  },
  {
    title: "",
    subtitle: "The Perfect Shot.",
    smallTexts: ["Designed for those who appreciate authenticity."],
    startProgress: 0.75,
    endProgress: 1.0
  }
];

const capText = [
  {
    title: "CAPPUCCINO",
    subtitle: "Velvety Smooth.",
    smallTexts: ["The perfect harmony of espresso and milk."],
    startProgress: 0,
    endProgress: 0.25
  },
  {
    title: "",
    subtitle: "Silky Microfoam.",
    smallTexts: ["Handcrafted with precision."],
    startProgress: 0.25,
    endProgress: 0.5
  },
  {
    title: "",
    subtitle: "Comfort In Every Sip.",
    smallTexts: ["Creamy texture.", "Balanced flavor.", "Timeless elegance."],
    startProgress: 0.5,
    endProgress: 0.75
  },
  {
    title: "",
    subtitle: "Crafted Daily.",
    smallTexts: ["Every cup tells a story."],
    startProgress: 0.75,
    endProgress: 1.0
  }
];

const mochaText = [
  {
    title: "MOCHA",
    subtitle: "Chocolate Meets Coffee.",
    smallTexts: ["Luxury redefined."],
    startProgress: 0,
    endProgress: 0.25
  },
  {
    title: "",
    subtitle: "Deep Cocoa.",
    smallTexts: ["Rich espresso.", "Premium chocolate."],
    startProgress: 0.25,
    endProgress: 0.5
  },
  {
    title: "",
    subtitle: "Indulgence.",
    smallTexts: ["Creamy.", "Bold.", "Satisfying."],
    startProgress: 0.5,
    endProgress: 0.75
  },
  {
    title: "",
    subtitle: "The Ultimate Fusion.",
    smallTexts: ["A masterpiece of flavor."],
    startProgress: 0.75,
    endProgress: 1.0
  }
];

const croText = [
  {
    title: "CROISSANT",
    subtitle: "Fresh From The Oven.",
    smallTexts: ["Flaky perfection."],
    startProgress: 0,
    endProgress: 0.25
  },
  {
    title: "",
    subtitle: "Hundreds Of Layers.",
    smallTexts: ["Butter.", "Time.", "Technique."],
    startProgress: 0.25,
    endProgress: 0.5
  },
  {
    title: "",
    subtitle: "Golden & Crisp.",
    smallTexts: ["Every bite melts effortlessly."],
    startProgress: 0.5,
    endProgress: 0.75
  },
  {
    title: "",
    subtitle: "French Perfection.",
    smallTexts: ["Simple ingredients.", "Extraordinary results."],
    startProgress: 0.75,
    endProgress: 1.0
  }
];

const blueText = [
  {
    title: "BLUEBERRY CHEESECAKE",
    subtitle: "Pure Indulgence.",
    smallTexts: ["Rich and creamy."],
    startProgress: 0,
    endProgress: 0.25
  },
  {
    title: "",
    subtitle: "Fresh Blueberries.",
    smallTexts: ["Sweet.", "Tangy.", "Balanced."],
    startProgress: 0.25,
    endProgress: 0.5
  },
  {
    title: "",
    subtitle: "Silky Texture.",
    smallTexts: ["Every layer crafted with care."],
    startProgress: 0.5,
    endProgress: 0.75
  },
  {
    title: "",
    subtitle: "Made To Delight.",
    smallTexts: ["A dessert worth remembering."],
    startProgress: 0.75,
    endProgress: 1.0
  }
];

function App() {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />

        <CanvasSequence
          id="espresso"
          folder="espresso"
          frameCount={300}
          bgColor="var(--color-espresso)"
          textSequences={espressoText}
        />
        <ItemInfoPanel item={itemsData['espresso']} />

        <BridgeSection variant="stats" />

        <CanvasSequence
          id="cappuccino"
          folder="cap"
          frameCount={300}
          bgColor="var(--color-caramel)"
          textSequences={capText}
        />
        <ItemInfoPanel item={itemsData['cappuccino']} />

        <BridgeSection variant="quote" />

        <CanvasSequence
          id="mocha"
          folder="mocha"
          frameCount={300}
          bgColor="var(--color-mocha)"
          textSequences={mochaText}
        />
        <ItemInfoPanel item={itemsData['mocha']} />

        <BridgeSection variant="process" />

        <CanvasSequence
          id="croissant"
          folder="cro"
          frameCount={300}
          bgColor="var(--color-croissant)"
          textSequences={croText}
        />
        <ItemInfoPanel item={itemsData['croissant']} />

        <BridgeSection variant="seasonal" />

        <CanvasSequence
          id="blueberry-cheesecake"
          folder="blue"
          frameCount={300}
          bgColor="var(--color-blueberry)"
          textSequences={blueText}
        />
        <ItemInfoPanel item={itemsData['blueberry-cheesecake']} />

        <About />
        <Menu />
        <Reviews />
        <VisitUs />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
