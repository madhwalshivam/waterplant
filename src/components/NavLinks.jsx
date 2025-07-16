
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Water Treatment Plant',
    path: '/water-treatment',
    subMenu: [
      {
        label: 'RO Plant',
        path: '/ro-plant',
        subMenu: [
          { label: 'FRP RO Plant', path: '/frp-ro' },
          { label: 'SS RO Plant', path: '/ss-ro' },
        ],
      },
      { label: 'Mineral Water Plant', path: '/mineral-water' },
      { label: 'Water Filling Machine', path: '/water-filling' },
      { label: '1 Litre Bottling Plant', path: '/bottling-plant' },
      { label: 'Industrial RO Water Plant', path: '/industrial-ro' },
      { label: 'Water Softening Plant', path: '/softening-plant' },
    ],
  },
  {
    label: 'Waste Water Treatment Plant',
    path: '/waste-water',
    subMenu: [
      { label: 'Sewage Treatment Plant', path: '/sewage-treatment' },
      { label: 'Effluent Treatment Plant', path: '/effluent-treatment' },
    ],
  },
  { label: 'Water Ionizer Machine', path: '/water-ionizer' },
  { label: 'Enagic Kangen Water Machine', path: '/enagic' },
];
