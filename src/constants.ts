export const LOCATIONS = [
  {
    id: 'lamai',
    island: 'KOH SAMUI',
    area: 'LAMAI',
    hours: 'Mon-Sat: 15:00 - 23:30',
    special: 'Sun Roast: 12:00 - 18:00',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=9.464107346757865,100.0434715411214',
    embedUrl: 'https://maps.google.com/maps?q=9.464107346757865,100.0434715411214&t=&z=15&ie=UTF8&iwloc=&output=embed',
    image: 'https://image.pollinations.ai/prompt/Brutalistic%20high-contrast%20moody%20food%20photography%20of%20smoked%20beef%20brisket',
    orderText: 'ORDER LAMAI'
  },
  {
    id: 'chaloklum',
    island: 'KOH PHANGAN',
    area: 'CHALOKLUM',
    hours: 'Daily: 12:00 - 22:30',
    special: 'Sun Roast: 12:00 - 18:00',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=9.786744855709996,100.00767679548328',
    embedUrl: 'https://maps.google.com/maps?q=9.786744855709996,100.00767679548328&t=&z=15&ie=UTF8&iwloc=&output=embed',
    image: 'https://image.pollinations.ai/prompt/Southern%20Fried%20Chicken%20Wings%20on%20black%20metal%20tray%20moody',
    orderText: 'ORDER CHALOKLUM'
  },
  {
    id: 'food-court',
    island: 'KOH PHANGAN',
    area: 'THONG SALA FOOD COURT',
    hours: 'Daily: 12:30 - 22:00',
    special: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=9.709672218820465,99.99110258345121',
    embedUrl: 'https://maps.google.com/maps?q=9.709672218820465,99.99110258345121&t=&z=15&ie=UTF8&iwloc=&output=embed',
    image: 'https://image.pollinations.ai/prompt/Buttermilk%20chicken%20tenders%20industrial%20style',
    orderText: 'ORDER FOOD COURT'
  },
  {
    id: 'night-market',
    island: 'KOH PHANGAN',
    area: 'BAN TAIN NIGHT MARKET',
    hours: 'Mon-Sun: 17:00 - 23:00',
    special: null,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=9.699976925868516,100.02452592762923',
    embedUrl: 'https://maps.google.com/maps?q=9.699976925868516,100.02452592762923&t=&z=15&ie=UTF8&iwloc=&output=embed',
    image: 'https://image.pollinations.ai/prompt/Night%20market%20BBQ%20stall%20neon%20lights%20dark%20moody',
    orderText: 'ORDER NIGHT MARKET'
  }
];

export const MENU = [
  {
    id: 'starters',
    number: '01',
    title: 'KICK STARTERS',
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
  'https://image.pollinations.ai/prompt/Brutal%20BBQ%20moody%20aesthetic%20wood%20fire',
  'https://image.pollinations.ai/prompt/Chef%20slicing%20brisket%20black%20gloves',
  'https://image.pollinations.ai/prompt/Craft%20beer%20on%20dark%20wood%20low%20light',
  'https://image.pollinations.ai/prompt/Southern%20Fried%20Chicken%20close%20up%20moody',
  'https://image.pollinations.ai/prompt/Neon%20sign%20MOJOS%20dark%20night',
  'https://image.pollinations.ai/prompt/BBQ%20Platter%20overhead%20dark%20aesthetic'
];
