import type { LucideIcon } from 'lucide-react';
import {
  Copy,
  Droplets,
  Gift,
  Laptop,
  Megaphone,
  Palette,
  Printer,
  Shirt,
  Signpost,
  Wrench,
} from 'lucide-react';

// Product photos extracted from the Vollink company profile
const images = import.meta.glob<string>('../assets/services/*.webp', { eager: true, import: 'default' });
const photo = (name: string) => images[`../assets/services/${name}.webp`];

export type CategoryId = 'print-design' | 'technology';

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  offerings: string[];
  gallery: GalleryImage[];
  brands?: string[];
  tools?: string[];
  hasCartridgeFinder?: boolean;
}

export interface ServiceCategory {
  id: CategoryId;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  heroImages: string[];
  services: ServiceDetail[];
}

export interface Cartridge {
  model: string;
  brand: 'HP' | 'Canon';
  type: 'Toner' | 'Ink';
  note: string;
  image: string;
}

export const printerBrands = ['Xerox', 'Konica Minolta', 'HP', 'Epson', 'Canon'];

export const cartridges: Cartridge[] = [
  { model: '131A', brand: 'HP', type: 'Toner', note: 'LaserJet · Black, Cyan, Magenta, Yellow', image: photo('hp-toner-131a') },
  { model: '415A', brand: 'HP', type: 'Toner', note: 'LaserJet · Black, Cyan, Magenta, Yellow', image: photo('hp-toner-415a') },
  { model: '057', brand: 'Canon', type: 'Toner', note: 'imageCLASS LBP220 / MF440 series', image: photo('canon-toner-057') },
  { model: '070H', brand: 'Canon', type: 'Toner', note: 'High capacity · imageCLASS LBP240 / MF460 series', image: photo('canon-toner-070h') },
  { model: '125', brand: 'Canon', type: 'Toner', note: 'LBP6000 / 6030 · MF3010 series', image: photo('canon-toner-125') },
  { model: '912', brand: 'HP', type: 'Ink', note: 'Original HP Ink', image: photo('hp-ink-912') },
  { model: '953XL', brand: 'HP', type: 'Ink', note: 'Original HP Ink · High yield', image: photo('hp-ink-953xl') },
  { model: '652', brand: 'HP', type: 'Ink', note: 'Ink Advantage · Black', image: photo('hp-ink-652') },
  { model: '938', brand: 'HP', type: 'Ink', note: 'Original HP Ink', image: photo('hp-ink-938') },
  { model: '21 & 22', brand: 'HP', type: 'Ink', note: 'Combo pack · Black + Tri-colour', image: photo('hp-ink-21-22') },
  { model: '47 & 57', brand: 'Canon', type: 'Ink', note: 'PIXMA · Black + Colour', image: photo('canon-ink-47-57') },
  { model: '441', brand: 'Canon', type: 'Ink', note: 'PIXMA · Colour', image: photo('canon-ink-441') },
  { model: '446', brand: 'Canon', type: 'Ink', note: 'PIXMA · Colour', image: photo('canon-ink-446') },
];

export const categories: ServiceCategory[] = [
  {
    id: 'print-design',
    title: 'Printing & Design',
    shortTitle: 'Printing & Design',
    summary: 'Design, printing, signage, branding, T-shirts and promotional gifts.',
    intro:
      'From the first sketch to the finished product. Our designers and print team bring your brand to life on paper, fabric, vehicles, billboards and more.',
    heroImages: [photo('large-format-printer'), photo('tshirt-flag'), photo('gazebo'), photo('desk-calendar')],
    services: [
      {
        slug: 'graphic-design',
        title: 'Graphic Designing',
        tagline: 'Ideas, made visual',
        description:
          'Eye-catching artwork for print and digital. We design logos, brand identities, flyers, brochures, posters and social media graphics that make your business stand out.',
        icon: Palette,
        offerings: ['Logos & brand identity', 'Flyers & brochures', 'Posters & banner artwork', 'Business card design', 'Social media graphics'],
        tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'CorelDRAW'],
        gallery: [{ src: photo('graphic-design'), caption: 'Creative design studio' }],
      },
      {
        slug: 'printing',
        title: 'Printing',
        tagline: 'Sharp, vibrant, on time',
        description:
          'Full-colour printing for everyday business needs and big statements, from business cards and calendars to large-format posters.',
        icon: Printer,
        offerings: ['Business cards', 'Flyers & brochures', 'Wall & desk calendars', 'Large-format printing', 'Posters'],
        gallery: [
          { src: photo('stationery'), caption: 'Business cards, flyers & brochures' },
          { src: photo('desk-calendar'), caption: 'Desk calendars' },
          { src: photo('wall-calendar'), caption: 'Wall calendars' },
          { src: photo('large-format-printer'), caption: 'Large-format printing' },
        ],
      },
      {
        slug: 'signage',
        title: 'Signage',
        tagline: 'Get noticed from every angle',
        description:
          'Indoor and outdoor signs that guide, inform and advertise, from the reception desk to the roadside billboard.',
        icon: Signpost,
        offerings: ['3D Signage', 'Billboards', 'Lightbox', 'Pylons', 'Desk Signage', 'Office Signage'],
        gallery: [
          { src: photo('billboard'), caption: 'Billboards' },
          { src: photo('3d-signage'), caption: '3D signage' },
          { src: photo('billboard-2'), caption: 'Roadside billboards' },
          { src: photo('office-signage'), caption: 'Office signage' },
        ],
      },
      {
        slug: 'branding',
        title: 'Branding',
        tagline: 'Your brand, everywhere',
        description:
          'Put your name wherever your customers are: at events, on the road and around the office.',
        icon: Megaphone,
        offerings: ['Banners', 'Gazebos', 'Vehicle Branding', 'Office Branding', 'Roll-up & X-banners', 'Teardrop flags'],
        gallery: [
          { src: photo('gazebo'), caption: 'Branded gazebos & flags' },
          { src: photo('vehicle-branding'), caption: 'Vehicle branding' },
          { src: photo('rollup-banner'), caption: 'Roll-up banners' },
          { src: photo('x-banner'), caption: 'X-banners' },
          { src: photo('a-frame-banner'), caption: 'A-frame banners' },
          { src: photo('teardrop-flag'), caption: 'Teardrop flags' },
        ],
      },
      {
        slug: 't-shirt-printing',
        title: 'T-Shirt Printing',
        tagline: 'Wear your story',
        description:
          'Custom printed T-shirts for teams, celebrations and commemorations, in any quantity.',
        icon: Shirt,
        offerings: ['Corporate', 'Social', 'Church', 'Family Events'],
        gallery: [
          { src: photo('tshirt-flag'), caption: 'Custom designs' },
          { src: photo('tshirt-lion'), caption: 'Personalised prints' },
        ],
      },
      {
        slug: 'promotional-gifts',
        title: 'Promotional Gifts',
        tagline: 'Keep your name in their hands',
        description:
          'Branded merchandise that keeps your business top of mind with clients, staff and partners.',
        icon: Gift,
        offerings: ['Umbrellas', 'Mugs & travel mugs', 'Pens', 'Golf shirts', 'Bags', 'Notebooks & diaries', 'Flash drives'],
        gallery: [
          { src: photo('corporate-gifts'), caption: 'Corporate gift sets' },
          { src: photo('umbrella'), caption: 'Branded umbrellas' },
          { src: photo('mugs-pens'), caption: 'Mugs, pens & desk items' },
        ],
      },
    ],
  },
  {
    id: 'technology',
    title: 'Technology',
    shortTitle: 'Technology',
    summary: 'Cartridges, printers & copiers, printer repair, computers & accessories.',
    intro:
      'Genuine consumables, reliable machines and expert repairs. Everything your office needs to keep printing and working.',
    heroImages: [photo('konica-copier'), photo('laptop-hp'), photo('hp-ink-912'), photo('epson-ecotank')],
    services: [
      {
        slug: 'cartridges',
        title: 'Cartridges',
        tagline: 'Genuine HP & Canon supplies',
        description:
          'Original toner and ink cartridges for HP and Canon printers. Search for your model below, or ask us about any cartridge not listed.',
        icon: Droplets,
        offerings: ['HP Toner Cartridges', 'HP Ink Cartridges', 'Canon Toner Cartridges', 'Canon Ink Cartridges'],
        brands: ['HP', 'Canon'],
        hasCartridgeFinder: true,
        gallery: [],
      },
      {
        slug: 'printers-copiers',
        title: 'Printers & Copiers',
        tagline: 'The right machine for the job',
        description:
          'From compact home printers to heavy-duty office copiers and multifunction machines from the brands you trust.',
        icon: Copy,
        offerings: ['Office copiers', 'Multifunction printers', 'Laser printers', 'Ink-tank printers', 'Inkjet printers'],
        brands: printerBrands,
        gallery: [
          { src: photo('konica-copier'), caption: 'Konica Minolta office copier' },
          { src: photo('xerox-mfp'), caption: 'Xerox multifunction printer' },
          { src: photo('epson-ink-tank'), caption: 'Epson ink-tank printer' },
          { src: photo('hp-laserjet'), caption: 'HP LaserJet printer' },
          { src: photo('hp-deskjet'), caption: 'HP DeskJet printer' },
        ],
      },
      {
        slug: 'printer-repair',
        title: 'Printer Repair',
        tagline: 'Back to work, fast',
        description:
          'Servicing, maintenance and repairs for printers, copiers and other office equipment, across all the major brands.',
        icon: Wrench,
        offerings: ['Printers & multifunction machines', 'Office copiers', 'Servicing & maintenance', 'Office equipment repairs'],
        brands: printerBrands,
        gallery: [
          { src: photo('hp-color-laser'), caption: 'Colour laser printers' },
          { src: photo('epson-ecotank'), caption: 'Ink-tank printers' },
          { src: photo('canon-maxify'), caption: 'Business inkjet printers' },
          { src: photo('konica-copier'), caption: 'Office copiers' },
        ],
      },
      {
        slug: 'computers-accessories',
        title: 'Computers & Accessories',
        tagline: 'Power your workspace',
        description:
          'Laptops, desktops and all-in-ones, plus the upgrades and accessories that keep them running.',
        icon: Laptop,
        offerings: ['Laptops', 'Desktops', 'All-in-one PCs', 'RAM', 'Hard drives & SSDs', 'Keyboards & mice', 'Laptop chargers'],
        gallery: [
          { src: photo('laptop-hp'), caption: 'Laptops' },
          { src: photo('all-in-one-pc'), caption: 'All-in-one PCs' },
          { src: photo('desktop-pc'), caption: 'Desktop computers' },
          { src: photo('laptop-dell'), caption: 'Business laptops' },
          { src: photo('ram'), caption: 'RAM upgrades' },
          { src: photo('ssd'), caption: 'Solid-state drives' },
          { src: photo('hard-drive'), caption: 'Hard drives' },
          { src: photo('keyboard'), caption: 'Keyboards' },
          { src: photo('mouse'), caption: 'Mice' },
          { src: photo('chargers'), caption: 'Laptop chargers' },
        ],
      },
    ],
  },
];

export const categoryHref = (id: CategoryId, slug?: string) => `#services/${id}${slug ? `/${slug}` : ''}`;
