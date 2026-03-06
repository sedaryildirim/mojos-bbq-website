import { Location, MenuCategory, Review } from "./types";

export const LOCATIONS: Location[] = [
  {
    id: 'lamai',
    island: 'KOH SAMUI',
    area: 'LAMAI',
    hours: 'Mon-Sat: 15:00 - 23:30, Sun: 12:00 - 23:30',
    special: 'Sun Roast From: 12:00 - 18:00, Every Sunday',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=9.464107346757865,100.0434715411214',
    embedUrl: 'https://maps.google.com/maps?q=9.464107346757865,100.0434715411214&t=&z=15&ie=UTF8&iwloc=&output=embed',
    orderText: 'ORDER LAMAI',
    deliveryUrl: 'https://r.grab.com/g/6-20260305_173231_F8AD6EACD64A4405923AA30E3C5FE29D_MEXMPS-3-C72XAZBYFBUCFE'
  },
  {
    id: 'chaloklum',
    island: 'KOH PHANGAN',
    area: 'CHALOKLUM',
    hours: 'Daily: 12:00 - 22:30',
    special: 'Sun Roast From: 12:00 - 18:00, Every Sunday',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=9.786744855709996,100.00767679548328',
    embedUrl: 'https://maps.google.com/maps?q=9.786744855709996,100.00767679548328&t=&z=15&ie=UTF8&iwloc=&output=embed',
    orderText: 'ORDER CHALOKLUM',
    deliveryUrl: 'https://delivery-kpg.com/stores/mojos-chaloklum'
  },
  {
    id: 'food-court',
    island: 'KOH PHANGAN',
    area: 'THONG SALA FOOD COURT',
    hours: 'Daily: 12:30 - 22:00',
    special: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=9.709672218820465,99.99110258345121',
    embedUrl: 'https://maps.google.com/maps?q=9.709672218820465,99.99110258345121&t=&z=15&ie=UTF8&iwloc=&output=embed',
    orderText: 'ORDER FOOD COURT',
    deliveryUrl: 'https://delivery-kpg.com/stores/mojos-thongsala'
  },
  {
    id: 'night-market',
    island: 'KOH PHANGAN',
    area: 'BAN TAI NIGHT MARKET',
    hours: 'Daily 17:00 - 23:00',
    special: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=9.699976925868516,100.02452592762923',
    embedUrl: 'https://maps.google.com/maps?q=9.699976925868516,100.02452592762923&t=&z=15&ie=UTF8&iwloc=&output=embed',
    orderText: 'ORDER NIGHT MARKET',
    deliveryUrl: 'https://delivery-kpg.com/stores/mojos-baan-tai'
  }
];

export const MENU: MenuCategory[] = [
  {
    id: 'starters',
    number: '01',
    title: 'KICK STARTERS',
    watermark: 'STARTERS',
    sections: [
      {
        name: 'WINGS & THINGS',
        items: [
          { name: 'CHICKEN TENDERS', price: 200 },
          { name: 'SOUTHERN FRIED WINGS', price: 240 }
        ]
      },
      {
        name: 'TACOS',
        items: [
          { name: 'BRISKET', price: 190 },
          { name: 'PULLED PORK', price: 160 },
          { name: 'FRIED CHICKEN', price: 130 }
        ]
      },
      {
        name: 'LOADED FRIES',
        items: [
          { name: 'MOJO', price: 160 },
          { name: 'BRISKET', price: 380 },
          { name: 'PULLED PORK', price: 300 },
          { name: 'CHIPOTLE CHICKEN', price: 260 }
        ]
      }
    ]
  },
  {
    id: 'burgers',
    number: '02',
    title: 'BURGERS',
    watermark: 'BURGERS',
    subtitle: 'ADD FRIES FOR 80',
    sections: [
      {
        items: [
          { name: 'MOJO CLASSIC', price: 300 },
          { name: 'BACON CHEESE', price: 310 },
          { name: 'BLUE CHEESE', price: 350 },
          { name: 'STHN FRIED CHICKEN', price: 290 },
          { name: 'THE PITMASTER BRISKET', price: 410 },
          { name: 'PULLED PORK BURGER', price: 290 },
          { name: 'VEGE STACK', price: 260 }
        ]
      }
    ]
  },
  {
    id: 'sweets',
    number: '03',
    title: 'THE SWEET STUFF',
    watermark: 'DESSERTS',
    sections: [
      {
        name: 'DESSERTS',
        items: [
          { name: 'HOT CHOCO BROWNIE', price: 270 },
          { name: 'BASQUE CHEESECAKE', price: 260 }
        ]
      },
      {
        name: 'THICK SHAKES',
        items: [
          { name: 'HONEYCOMB MALT', price: 200 },
          { name: 'BROWNIE + CHOC', price: 200 },
          { name: 'SALTED CARAMEL', price: 180 }
        ]
      }
    ]
  },
  {
    id: 'sunday-roast',
    number: '04',
    title: 'SUNDAY ROAST',
    watermark: 'ROAST',
    subtitle: 'AVAILABLE SUNDAYS 12:00 - 18:00 // LAMAI & CHALOKLUM ONLY',
    sections: [
      {
        items: [
          { name: 'CHICKEN', price: 490 },
          { name: 'LAMB', price: 590 },
          { name: 'BEEF', price: 590 },
          { name: 'MIXED', price: 590 },
          { name: 'LITTLE MOJOS', price: 320 }
        ]
      }
    ]
  }
];

export const FEED_IMAGES = [
  '/brisket-loaded-fries.jpg',
  '/buttermilk-chicken-taco.jpg',
  '/chicken-loaded-fries.jpg',
  '/chicken-tenders.jpg',
  '/souther-friend-wings-being-grabbed.jpg',
  '/southern-fried-wings.jpg'
];

export const REVIEWS: Review[] = [
  {
    name: "Michael Gorodi",
    text: "Been here 3+ years and there’s very few restaurants on this island that are actually worth it… I just added Mojos to my list. Insanely good food from start to finish - generous portions and top service. Worth every penny!",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Grace",
    text: "Must visit! We were craving some western food this did not disappoint. We got all three tacos and chicken loaded fries, delicious! Staff were super attentive. If you’re in the area definitely visit.",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Mia Amawasu",
    text: "Great burger place in Lamai! The burger was juicy and flavorful, fries were crispy and delicious. Nice atmosphere, friendly staff, and good location near the beach. Highly recommended!",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Lourens Bam",
    text: "This is by far one of the best roasts I’ve had on the island, and I’ve been a resident here for 6 years. Absolutely mouthwatering and delicious—really enjoyed it and will definitely make this a regular spot!",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Maddie Stride",
    text: "Best Roast I have had in 4+ years living in Thailand. I highly recommend this place for anyone craving a proper, generous Sunday roast.",
    rating: 5,
    location: "Koh Samui, Lamai"
  },
  {
    name: "Yanisa",
    text: "Amazing food every time. The Sunday roast is delicious, the burgers are juicy, and the beef ribs are full of flavour. The staff are super friendly and welcoming.",
    rating: 5,
    location: "Koh Samui, Lamai"
  }
];

