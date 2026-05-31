export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: string
  badge?: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Vitamina C 1000mg',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    category: 'Vitaminas',
    badge: 'Mais Vendido',
    shortDescription: 'Suplemento vitamínico de alta potência para imunidade e disposição.',
    description: 'Vitamina C 1000mg com liberação prolongada. Auxilia no fortalecimento do sistema imunológico, na síntese de colágeno e na absorção de ferro. Caixa com 60 comprimidos efervescentes de sabor laranja.',
    price: 3490,
  },
  {
    id: 2,
    name: 'Protetor Solar FPS 70',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
    category: 'Dermocosméticos',
    badge: 'Novidade',
    shortDescription: 'Proteção solar de amplo espectro UVA/UVB para pele oleosa.',
    description: 'Protetor solar facial com FPS 70 e PPD 37. Fórmula oil-free com toque seco, controle de oleosidade e acabamento matte. Indicado para uso diário mesmo em dias nublados. 60g.',
    price: 8990,
  },
  {
    id: 3,
    name: 'Dipirona Monoidratada 500mg',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80',
    category: 'Medicamentos',
    shortDescription: 'Analgésico e antitérmico de ação rápida e comprovada.',
    description: 'Dipirona Monoidratada 500mg – analgésico e antitérmico. Indicado para alívio de dores em geral (de cabeça, musculares, cólicas) e redução da febre. Caixa com 20 comprimidos. Venda sob prescrição.',
    price: 1290,
  },
  {
    id: 4,
    name: 'Whey Protein Concentrado 1kg',
    image: 'https://images.unsplash.com/photo-1579722820901-3a3e484a65d4?w=600&q=80',
    category: 'Suplementos',
    badge: 'Oferta',
    shortDescription: 'Proteína de alta qualidade para ganho de massa muscular.',
    description: 'Whey Protein Concentrado com 78% de proteína por porção. Cada dose fornece 24g de proteína, aminoácidos essenciais e BCAAs. Ideal para recuperação muscular pós-treino. Sabor Baunilha. 1kg.',
    price: 14990,
  },
  {
    id: 5,
    name: 'Ômega 3 TG 1000mg',
    image: 'https://images.unsplash.com/photo-1606206591538-b8d04df7ea35?w=600&q=80',
    category: 'Vitaminas',
    shortDescription: 'Ácidos graxos essenciais para saúde cardiovascular e cerebral.',
    description: 'Ômega 3 em triglicerídeos com EPA e DHA de alta concentração. Auxilia na saúde do coração, função cognitiva e controle de triglicerídeos. Cápsula sem gosto de peixe. 60 cápsulas gelatinosas moles.',
    price: 6990,
  },
  {
    id: 6,
    name: 'Kit Hidratação Corporal',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
    category: 'Cuidados Pessoais',
    badge: 'Kit',
    shortDescription: 'Creme hidratante + loção corporal para pele sedosa o dia todo.',
    description: 'Kit com creme hidratante intensivo 400ml e loção corporal perfumada 250ml. Formulado com manteiga de karité, aloe vera e vitamina E. Sem parabenos, ideal para pele seca a muito seca. Fragrância floral suave.',
    price: 5990,
  },
]

export default products
