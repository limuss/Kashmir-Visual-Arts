
import { ArtForm, Artisan } from './types';

export const ART_FORMS: ArtForm[] = [
  {
    id: 'papier-mache',
    name: 'Papier-Mâché',
    shortDescription: 'Intricate hand-painted crafts.',
    fullDescription: 'Papier-Mâché, or "Naqash", is a traditional Kashmiri art form that involves molding paper pulp into decorative objects and hand-painting them with traditional motifs. Passed down through generations, it symbolizes Kashmiri culture and artistic heritage. This intricate craft originated in Kashmir centuries ago, blending local materials with Persian influences brought by Mughal artisans. The process begins with layering strips of paper soaked in a mixture of flour paste and water, shaped into forms like vases, bowls, and decorative boxes.',
    image: 'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?q=80&w=1000&auto=format&fit=crop',
    process: [
      { title: '1. Preparing the Pulp', description: 'Soak and disintegrate scrap paper.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop' },
      { title: '2. Molding the Object', description: 'Shape and dry pulp atop molds.', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop' },
      { title: '3. Smoothing', description: 'Sand and smooth the dried surface.', image: 'https://images.unsplash.com/photo-1565193298357-bb036323c932?w=400&h=300&fit=crop' },
      { title: '4. Hand-Painting', description: 'Detailed hand-painted ornamentation.', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop' }
    ],
    products: [
      { name: 'Decorative Boxes', image: 'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=400&fit=crop' },
      { name: 'Vases', image: 'https://images.unsplash.com/photo-1581781870027-04212e231e96?w=400&h=400&fit=crop' },
      { name: 'Ornamental Eggs', image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop' },
      { name: 'Picture Frames', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=400&fit=crop' }
    ]
  },
  {
    id: 'pashmina',
    name: 'Pashmina Weaving',
    shortDescription: 'Luxurious woolen shawls.',
    fullDescription: 'The legendary Kashmiri shawl made from the finest cashmere wool. Pashmina is renowned worldwide for its warmth and delicate feel.',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop'
  },
  {
    id: 'carpet',
    name: 'Carpet Weaving',
    shortDescription: 'Traditional Kashmiri Carpets.',
    fullDescription: 'Hand-knotted silk and wool rugs with deep cultural patterns. These carpets are a testament to patience and artistic precision.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop'
  },
  {
    id: 'sozni',
    name: 'Sozni Embroidery',
    shortDescription: 'Exquisite Needlework.',
    fullDescription: 'The finest needle embroidery used on high-end Pashmina. Sozni requires immense focus and years of training.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop'
  },
  {
    id: 'wood-carving',
    name: 'Walnut Wood Carving',
    shortDescription: 'Ornate Woodwork.',
    fullDescription: 'Masterful carving on seasoned walnut wood. Kashmir is one of the few places where walnut wood carving is still practiced with such detail.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
  },
  {
    id: 'namda',
    name: 'Namda & Gabba',
    shortDescription: 'Felted & Embroidered Rugs.',
    fullDescription: 'Unique felted wool crafts for home decor. Namda is a centuries-old tradition of creating floor coverings without weaving.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop'
  }
];

export const ARTISANS: Artisan[] = [
  {
    id: 'ali-mir',
    name: 'Ali Ahmad Mir',
    role: 'Papier-Mâché Artist',
    experience: '30 Years Experience',
    experienceYears: 30,
    age: 52,
    location: 'Srinagar',
    artworksCount: 120,
    bio: 'Ali is a third-generation master of the Naqash tradition, known for his signature floral "Hazara" patterns.',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&h=500&fit=crop',
    specialties: ['Floral Motifs', 'Gold Leafing', 'Varnish Techniques'],
    status: 'live',
    artworks: [
      {
        id: 'aw-1',
        title: 'Celestial Hazara Vase',
        description: 'A hand-painted papier-mâché vase featuring 1000 flowers in natural gold and indigo pigment.',
        price: '₹24,500',
        image: 'https://images.unsplash.com/photo-1581781870027-04212e231e96?w=800&fit=crop',
        status: 'live'
      },
      {
        id: 'aw-2',
        title: 'Mughal Courtyard Box',
        description: 'Large storage chest depicting a royal court scene with intricate 24k gold leafing.',
        price: '₹18,200',
        image: 'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=800&fit=crop',
        status: 'live'
      }
    ]
  },
  {
    id: 'shabir-bano',
    name: 'Shabir Bano',
    role: 'Pashmina Weaver',
    experience: '25 Years Experience',
    experienceYears: 25,
    age: 48,
    location: 'Ganderbal',
    artworksCount: 85,
    bio: 'Shabir specializes in the "Kani" weaving technique, translating complex coded scripts into breathtaking shawl patterns.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop',
    specialties: ['Kani Weaving', 'Wool Sorting', 'Natural Dyeing'],
    status: 'live',
    artworks: [
      {
        id: 'aw-3',
        title: 'Royal Kani Shawl',
        description: 'Authentic 100% Pashmina wool with hand-woven Kani patterns that took 8 months to complete.',
        price: '₹85,000',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&fit=crop',
        status: 'live'
      }
    ]
  },
  {
    id: 'rafiq-lone',
    name: 'Rafiq Lone',
    role: 'Carpet Weaver',
    experience: '40 Years Experience',
    experienceYears: 40,
    age: 64,
    location: 'Srinagar',
    artworksCount: 45,
    bio: 'Rafiq has dedicated four decades to the loom, preserving the ancient Persian designs that arrived in Kashmir via the Silk Road.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&h=500&fit=crop',
    specialties: ['Hand-knotted Silk', 'Taleem Reading', 'Rug Finishing'],
    status: 'live',
    artworks: []
  },
  {
    id: 'sajjad-hussain',
    name: 'Sajjad Hussain',
    role: 'Walnut Wood Carver',
    experience: '18 Years Experience',
    experienceYears: 18,
    age: 42,
    location: 'Anantnag',
    artworksCount: 200,
    bio: 'Sajjad is known for his deep "Undercut" carving style, bringing three-dimensional life to seasoned walnut planks.',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=500&fit=crop',
    specialties: ['Deep Relief Carving', 'Furniture Design', 'Wood Seasoning'],
    status: 'live',
    artworks: []
  }
];
