
import { ArtForm, Artisan, Story } from './types';

export const STORIES: Story[] = [
  {
    id: 'story-1',
    title: 'The Last Master of Sakhtsazi',
    excerpt: 'An intimate look at the life of Ali Ahmad Mir, one of the few remaining artisans who still practices the traditional molding process of Papier-Mâché.',
    image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/11/03/142345.jpg',
    category: 'Artisan Profile',
    date: 'March 20, 2024'
  },
  {
    id: 'story-2',
    title: 'From Persia to the Valley: A Sufi Legacy',
    excerpt: 'Tracing the 14th-century journey of Mir Sayyid Ali Hamadani and how he transformed the cultural landscape of Kashmir.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop',
    category: 'History',
    date: 'February 15, 2024'
  },
  {
    id: 'story-3',
    title: 'The Science of Softness: The Pashmina Fiber',
    excerpt: 'Why the wool from the Himalayan Ibex is considered the "Fiber for Kings" and how it survives the harshest winters.',
    image: 'https://www.pashmina.com/_next/image/?url=https%3A%2F%2Fblog.pashmina.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fazhz.jpg&w=1920&q=75',
    category: 'Research',
    date: 'January 10, 2024'
  }
];

export const ART_FORMS: ArtForm[] = [
  {
    id: 'papier-mache',
    name: 'Papier-Mâché',
    shortDescription: 'Intricate hand-painted crafts made from "chewed paper".',
    fullDescription: 'Papier-mache is an age-old craft introduced to the Kashmir valley by Mir Sayyid Ali Hamadani in the 14th century. Deeply interwoven with Kashmiri culture, this "chewed paper" art involves two distinct stages: Sakhtsazi (molding) and Naqashi (painting). While it remains a staple of the global ornamental market, it is currently considered a "dying art" of Kashmir, with artisans struggling to preserve its legacy amidst modern economic challenges.',
    image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/12/14/167272.jpg',
    process: [
      { 
        title: '1. Sakhtsazi (Preparation)', 
        description: 'The initial stage of preparation includes making the figurine from a mixture of paper pulp with the help of rice straw and copper sulfate.', 
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop' 
      },
      { 
        title: '2. Naqashi (Decoration)', 
        description: 'In the final step, several coats of paint are applied and the figurine is decorated. Artists prefer to use organic colors to paint their mesmerizing products manually.', 
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop' 
      }
    ],
    usage: {
      text: "Papier-mache products feature a wide range of items from **traditional houseboats and decorative boxes** to modern ornaments like **Christmas trees, wall clocks, photo frames, and wind chimes**. \n\nSome artisans produce **rahles** (small reading desks for reciting the Quran) and **Quran boxes**, inscribing them with sacred verses. These decorative pieces add a mystic style and aesthetic spark to walls and showcases, making them highly sought after by tourists and international markets, particularly in Europe.",
      images: [
        'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=400&fit=crop',
        'https://images.unsplash.com/photo-1581781870027-04212e231e96?w=400&h=400&fit=crop'
      ]
    },
    significance: {
      text: "The craft is closely associated with the **advent of Islam in Kashmir** and holds considerable religious relevance. Introduced by **Mir Sayyid Ali Hamadani**, it became a core artistic profession deeply interwoven with the culture and tradition of Kashmiri society. Beyond its artistic value, it has historically generated employment for thousands of households, serving as a vital way of preserving the people's history and lifestyle.",
      images: [
        'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&h=300&fit=crop'
      ]
    },
    lore: {
      text: "Introduced in the 14th century by the Sufi Muslim **Mir Sayyid Ali Hamadani**, also known as **'Shah-e-Hamadan'** (King of Hamadan), who arrived from Persia with skilled craftsmen. This legacy has been passed from one generation to another for centuries, carrying with it the mystic style and unique cultural heritage of the valley.",
      images: [
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
      ]
    },
    history: {
      text: "Originating in the 14th century, Papier-mache has survived through various eras, including the **Mughal period**, where it was used to depict historical court scenes. However, it is now considered a **dying art**. Recent challenges including unprecedented floods, political shifts, and the global pandemic have severely hit the artisans, with many struggling to make ends meet on meager daily earnings. The craft's survival now increasingly depends on **e-commerce** and international support.",
      images: [
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop'
      ]
    },
    design: {
      text: "Designs feature intricate depictions of **Kashmir flora and fauna**, including birds and animals. Common themes include flowers and jungle motifs, with special emphasis on Kashmiri symbols like the **chinar leaf and almond shapes**. Some master artisans bring life to historical scenes from **Mughal courts** and depict **Persian poetry**, giving the products a sumptuous and unique mystic appeal.",
      images: [
        'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=300&fit=crop'
      ]
    },
    products: [
      { name: 'Decorative Boxes', image: 'https://images.unsplash.com/photo-1590004953392-5aba2e72269a?w=400&h=400&fit=crop' },
      { name: 'Vases', image: 'https://images.unsplash.com/photo-1581781870027-04212e231e96?w=400&h=400&fit=crop' },
      { name: 'Ornamental Eggs', image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=400&h=400&fit=crop' },
      { name: 'Quran Boxes', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop' }
    ]
  },
  {
    id: 'pashmina',
    name: 'Pashmina Weaving',
    shortDescription: 'Luxurious woolen shawls.',
    fullDescription: "The shawls in Kashmir are woven from fine wool or other animal fleece. It is colloquially known as 'Jamawar', when it was woven in yards. This was because the Maharajas and nobility by the yard or 'Jam' purchased it. It was then stitched into robes or gowns called 'Jama'. Kani shawls, on the other hand, were called so when finely embroidered with a Kani or wooden needles.",
    image: 'https://www.pashmina.com/_next/image/?url=https%3A%2F%2Fblog.pashmina.com%2Fwp-content%2Fuploads%2F2018%2F05%2Fazhz.jpg&w=1920&q=75',
    usage: {
      text: "In its earliest days, this remarkable fabric was predominantly utilized to create ceremonial robes for royal families. Its immense popularity was driven by the scarcity and complexity of its patterns, alongside its practical benefits. **Kashmiri shawls were highly coveted for their superior insulation and were preserved as precious family treasures**, frequently passed down through the ages.\n\nThe history of **Pashmina** is rooted in ancient times, with its origins linked to the period of the Mahabharata. **During historical times, these shawls were held in high regard by emperors, kings, princes, and various members of the nobility.** This luxurious material was famously referred to as the **'FIBER FOR KINGS'**. Its development began long ago among the mountain-dwelling people of Nepal, who depended on these hand-crafted textiles for warmth and survival during their travels. In both rugged mountain terrains and warmer regions, weaving was an essential skill for producing durable and comfortable clothing. **Nowadays, expert male craftsmen are dedicated to the art of embroidering these Kashmiri shawls.** In recent years, the Western market has seen a surge in Pashmina's popularity as its soft, luxurious feel has been rediscovered. Today, fashion authorities consider it a fundamental element of any wardrobe, comparable in status to the iconic little black dress.",
      images: [
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop',
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop'
      ]
    },
    significance: {
      text: "The term **'Shawl'** is derived from the Persian word **'Shal'**, which describes a length of fine woolen fabric used as a garment. For centuries, and especially until the late 19th century, shawl weaving was the **economic backbone of Kashmir**. The creation of a single shawl is a labor of love, often requiring **two master weavers and 3 to 6 months of meticulous work**, depending on the complexity of the patterns.\n\nTo withstand the brutal cold at altitudes **exceeding 15,000 feet**, a unique species of mountain goat develops a protective undercoat of exceptionally fine, soft wool known as **Pashmina**, or **'Cashmere'** globally. Historically, this precious wool was brought into Kashmir by caravans from **Western Tibet and Kirghizia**. Every gram of this wool was treated with extreme care, being meticulously weighed and distributed to specialized spinners and dyers.\n\nThe most exquisite wool is harvested from the underbelly of the **Himalayan Ibex**. During the summer months, these goats rub against rocks and shrubs, leaving behind a fine, shorthaired fleece. This rare material, known as **Asli Tus**, is prized for its **silky texture, incredible lightness, and superior warmth**. The legendary **'ring shawls'** are so fine that they can be effortlessly pulled through a small thumb ring.\n\nThe production of a Kashmiri shawl involves an **extreme division of labor**, with dozens of specialists contributing to a single piece. This includes wool brokers, women who clean and spin the fleece, and men who dye the yarn, prepare the warp, and **thread the heddles**. The **Naqqash (designer)** is held in the highest regard, often earning more than the weavers themselves. They are responsible for drawing the patterns and transcribing the **taalim (coded weaving guides)**. Historically, these shawls were highly sought after by the **Nawabs of Oudh, Rajput princes, and the elite of Hyderabad**, who wore them as elaborate **Jamas and Angarkhas**. Their fame even reached **Russia**, where they were used as royal wall hangings, and it is famously noted that **Empress Josephine of France owned a collection of approximately 400 shawls.**",
      images: [
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1581781870027-04212e231e96?w=400&h=300&fit=crop'
      ]
    },
    lore: {
      text: "The origins of Pashmina are steeped in antiquity, with its earliest recorded presence found in the venerable Indian epic, the **Mahabharata, dating back to the 6th to 4th centuries BC**. These exquisite textiles were once the exclusive domain of royalty, often presented as gifts to secure the patronage of powerful monarchs and nobility. While the precise beginnings of shawl weaving remain somewhat veiled in history, significant mentions appear in other foundational texts like the **Ramayana and the Atharvaveda**. Furthermore, ancient Buddhist manuscripts also document these woolen treasures within their historical inventories of fine garments.",
      images: [
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop'
      ]
    },
    history: {
      text: "The legendary **'King of all Wools'** has its roots deeply embedded in the Kashmir Valley, with a heritage stretching back over **3,000 years**. Historically, this opulent fabric was the exclusive luxury of the elite, gracing the courts of **Caesar** and becoming a cherished possession of **Marie Antoinette**. **Emperor Napoleon** famously gifted a Kashmiri shawl to **Empress Josephine**, who eventually amassed a collection of nearly **400 shawls**, sparking a massive fashion trend across **France and Europe**.\n\nFormal records of Pashmina date back to between the **3rd century BC and 11th century AD**. However, it was **Sultan Zain-ul-Abadin**, the 15th-century ruler of Kashmir, who is credited as the true founder of the modern Pashmina industry by inviting master weavers from **Central Asia and Turkistan**. The craft further flourished under the patronage of **Mughal Emperors** like **Babur, Akbar, and Jahangir**. Akbar, in particular, was a great admirer, coining the name **'Paremnarm'** (supremely soft) for the fabric and introducing the **'Dhoshala'** style—two shawls stitched back-to-back.\n\nBy the 19th century, Kashmir's shawl industry was a global powerhouse, employing tens of thousands of weavers and spinners. In **1803**, the introduction of the **'Amlikar'** (embroidered) method by **Khwaja Yusuf** revolutionized production, making it faster and more affordable. Despite facing heavy taxation and political shifts under **British and Maharaja rule**, the art form persisted. Today, Pashmina remains an iconic symbol of timeless elegance, its durability and regal feel continuing to enchant the fashion world from **St. Petersburg to Paris**.",
      images: [
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop'
      ]
    },
    design: {
      text: "The **Pashmina fiber** is a marvel of nature, measuring a mere **15-19 microns** in thickness—nearly four times thinner than a human hair. Harvested from goats in the high-altitude Himalayan regions (**12,000 to 14,000 ft**), this wool possesses extraordinary **thermal conductivity**, allowing the animals to survive temperatures as low as **-40°C**. While pure Pashmina is the **'creme de la creme'** of cashmere, it is often blended with silk (in ratios like 70/30 or 50/50) to create a fabric that is both **supple and incredibly strong**.\n\nHistorically, the earliest shawls featured simple **colored stripes**, but over time, weavers began drawing inspiration from the natural world. **Floral motifs** became prominent, heavily influenced by **Persian aesthetics** and later, 19th-century European styles. Iconic designs include the **'Chand-dar' (Moon Shawl)**, characterized by a central medallion and corner quarters. Popular motifs such as **'Butis'** and **'Badam' (almond shapes)** are frequently used, sometimes superimposed to create depth. The **'Zebaish'** technique uses twill weave and black embroidery to outline motifs, sometimes resulting in a **'Dorukha' (two-faced)** shawl where both sides display different patterns.\n\nKashmiri weavers have mastered a vast vocabulary of motifs, including **'Gul-e-noor jehan'** (a flower favored by the Queen), **'Chinar' leaf patterns**, and architectural elements like **'Mihrab'**. The craft is categorized into several distinct types:\n\n1. **Kani Shawls:** The most celebrated variety, woven using small wooden sticks called **'tujies'**. The **'Kanika Jamawar'** is a royal variant so finely crafted that the front and back are indistinguishable.\n2. **Amlikor:** These feature exquisite **needle embroidery** using fine silk or cotton threads, often making the embroidery look like it was woven directly on the loom.\n3. **Saadi:** Beautifully simple, hand-woven Pashmina, which includes variations like **'Zooti'** (mixed natural colors) and **'Alwon'** (pure white, tightly woven).\n\nWhether it is a **'Do-shala'** (sold in pairs) or a **'Char-bagan'** (four-colored pieces joined together), each Pashmina is a unique masterpiece, reflecting the weaver's judgment and the timeless artistry of the Kashmir Valley.",
      images: [
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop'
      ]
    },
    types: {
      intro: "Kashmiri shawls are categorized into several distinct types based on their weaving techniques, patterns, and materials:",
      items: [
        {
          title: "1. Soodi",
          description: "A simple, non-patterned hand-woven fabric employing a four-shaft twill weave.",
          images: ['https://picsum.photos/seed/soudi1/400/300', 'https://picsum.photos/seed/soudi2/400/300']
        },
        {
          title: "2. Kani",
          description: "A highly decorative brocade textile woven using small wooden sticks called 'tujies'. The 'Kanika Jamawar' is a royal variant so finely crafted that the front and back are indistinguishable.",
          images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=300&fit=crop', 'https://picsum.photos/seed/kani2/400/300']
        },
        {
          title: "3. Amlikor",
          description: "Plain Pashmina embellished with very fine Kashmir silk or cotton thread embroidery, often mimicking the appearance of loom-woven patterns.",
          images: ['https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop', 'https://picsum.photos/seed/amlikor2/400/300']
        },
        {
          title: "4. Saadi or Seud",
          description: "Hand-woven Pashmina fabric, celebrated for its elegant simplicity.",
          images: ['https://picsum.photos/seed/saadi1/400/300']
        },
        {
          title: "5. Zooti",
          description: "A unique fabric created by mixing all the natural colors of Pashmina, resulting in an uneven, shaded aesthetic.",
          images: ['https://picsum.photos/seed/zooti1/400/300']
        },
        {
          title: "6. Busso",
          description: "Woven from thick Pashmina yarn, typically spun by apprentice weavers in villages.",
          images: ['https://picsum.photos/seed/busso1/400/300']
        },
        {
          title: "7. Tilitouso",
          description: "Crafted from double-ply yarn in the warp and single-ply in the weft, designed to resemble the legendary Shahtoosh shawl.",
          images: ['https://picsum.photos/seed/tilitouso1/400/300']
        },
        {
          title: "8. Alwon (Tafta)",
          description: "A tightly woven fabric made from naturally white yarn with a high warp count.",
          images: ['https://picsum.photos/seed/alwon1/400/300']
        },
        {
          title: "9. Do-shala",
          description: "Always sold in pairs, these shawls are a traditional staple of Kashmiri heritage.",
          images: ['https://picsum.photos/seed/doshala1/400/300']
        },
        {
          title: "10. Char-bagan",
          description: "Composed of four pieces in different colors neatly joined together, often featuring a central floral medallion.",
          images: ['https://picsum.photos/seed/charbagan1/400/300']
        },
        {
          title: "11. Kunj",
          description: "A variant where the central field is plain, but the four corners are ornamented with floral motifs.",
          images: ['https://picsum.photos/seed/kunj1/400/300']
        }
      ]
    }
  },
  {
    id: 'carpet',
    name: 'Carpet Weaving',
    shortDescription: 'Traditional Kashmiri Carpets.',
    fullDescription: 'Kashmiri carpet weaving is an age-old craft introduced to the Kashmir Valley during the 15th century under the patronage of Sultan Zain-ul-Abidin, also known as Budshah, while many traditional accounts also attribute its arrival to the revered Sufi saint Mir Sayyid Ali Hamadani. Deeply interwoven with Kashmir’s cultural identity, this hand-knotted art form reflects a remarkable fusion of Persian, Central Asian, and indigenous Kashmiri artistic traditions. Known locally as Kal baffi or Kaleen, Kashmiri carpets are celebrated worldwide for their intricate craftsmanship, luxurious materials, fine knot density, and symbolic motifs inspired by nature, spirituality, and everyday life in the valley.',
    image: '/Carpet Weaving/Kashmiri Carpets (Image Courtesy – Outlook India).webp',
    process: [
      {
        title: '1. Dyeing the Yarn',
        description: 'The process begins with dyeing high-quality silk or wool yarn using natural or synthetic pigments to achieve the rich, vibrant colors characteristic of Kashmiri rugs.',
        image: '/Carpet Weaving/Hanging the dyed yarn in the sun for drying.webp'
      },
      {
        title: '2. The Taleem (The Script)',
        description: 'Unique to Kashmir, weavers follow a coded script called \"Taleem\" which instructs them on every single knot\'s color and placement, ensuring perfect execution of complex designs.',
        image: '/Carpet Weaving/Encrypted language or Talim for the carpet weavers.webp'
      },
      {
        title: '3. Hand-Knotting (Kal-baffi)',
        description: 'Artisans sit at a large vertical loom, meticulously tie individual knots onto the warp. The density of these knots determines the quality and detail of the final carpet.',
        image: '/Carpet Weaving/The weaving process of the carpets.webp'
      }
    ],
    usage: {
      text: "Traditionally used in **royal courts and noble households**, Kashmiri carpets are now prized globally as **luxurious floor coverings and wall hangings**. They are often passed down as **family heirlooms**, increasing in value and beauty with age.\n\nBeyond their functional use, they are treated as **works of art**, frequently displayed in prestigious galleries and used in architectural landmarks like the **Jamia Masjid in Srinagar** to add a sense of sacred grandeur.",
      images: [
        '/Carpet Weaving/Carpet and columns inside of the Jamia Masjid, Srinagar, Jammu And Kashmir..jpg',
        '/Carpet Weaving/Traditional hand-knotted Kashmiri Carpets .webp'
      ]
    },
    significance: {
      text: "The craft is a **symbol of Kashmiri craftsmanship and patience**. It provides a livelihood for thousands of families and serves as a vital economic link between the valley and the international market. Each carpet tells a story of the **Silk Road heritage**, blending Persian and Indian influences into a unique local identity.",
      images: [
        '/Carpet Weaving/Family of Weavers (Image Courtesy _ Free Press Kashmir).webp',
        '/Carpet Weaving/Three women working on a carpet on loom; (Image Courtesy _ Scroll.in).jpg'
      ]
    },
    lore: {
      text: "Legend relates that the craft was introduced by **Sufi saints** who arrived from Persia with a retinue of skilled craftsmen. It is often said that a master weaver's carpet is a **'living map'** of their spiritual journey, with every knot representing a prayer or a moment of deep focus.",
      images: [
        '/Carpet Weaving/Excerpt from movie Jodha Akbar depicting Kashmiri carpet(2008);.webp'
      ]
    },
    history: {
      text: "Introduced in the 15th century by **Sultan Zain-ul-Abidin**, the industry flourished under **Mughal patronage**. Historical records from the early 1900s show that the techniques and tools remain largely unchanged, preserving a direct link to the medieval artistic traditions of Central Asia.",
      images: [
        '/Carpet Weaving/Weavers in Srinagar, Kashmir photographed by Frederick in c.1901; (Image Courtesy_ Kashmir Times).webp'
      ]
    },
    design: {
      text: "Kashmiri designs are famous for their intricate **floral arrangements**, including the iconic **Chinar leaf**, **Gulabdar (roses)**, and the **Zindah Gol (Tree of Life)**. The patterns are deeply symbolic, reflecting the valley's lush flora and the philosophical outlook of its people.",
      images: [
        '/Carpet Weaving/Different types of motifs and their meaning; (Image Courtesy_Carpets of Kashmir).png',
        '/Carpet Weaving/Zindah Gol or The tree of life Motif.webp',
        '/Carpet Weaving/Chinar Leaf motif on Kashmiri carpet.webp'
      ]
    },
    products: [
      { name: 'Woollen Carpet', image: '/Carpet Weaving/Woollen Carpet of Kashmir.webp' },
      { name: 'Silk Carpet', image: '/Carpet Weaving/he Kashmiri Silk Carpet .webp' },
      { name: 'Floral Rug', image: '/Carpet Weaving/A Kashmiri carpet including a wide range of floral patterns in Srinagar, Kashmir.jpg' },
      { name: 'Artisan Runner', image: '/Carpet Weaving/Kashmiri Silk Carpet; (Image Courtesy_Selvedge Magazine).jpg' }
    ]
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
    artworks: [
      {
        id: 'aw-carpet-1',
        title: 'Heirloom Silk Rug',
        description: 'A masterwork featuring 900 knots per square inch, illustrating the classic Persian garden motif.',
        price: '₹145,000',
        image: '/Carpet Weaving/he Kashmiri Silk Carpet .webp',
        status: 'live'
      },
      {
        id: 'aw-carpet-2',
        title: 'Traditional Woollen Kaleen',
        description: 'Hand-knotted woollen carpet with natural dyes, featuring the geometric Guls of the Central Asian tradition.',
        price: '₹62,000',
        image: '/Carpet Weaving/Woollen Carpet of Kashmir.webp',
        status: 'live'
      },
      {
        id: 'aw-carpet-3',
        title: 'Hand-Knotted Floral Carpet',
        description: 'Intricate floral patterns on a silk-wool blend, representing the signature Kashmiri craftsmanship.',
        image: '/Carpet Weaving/Traditional hand-knotted Kashmiri Carpets .webp',
        price: '₹88,000',
        status: 'live'
      }
    ]
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
