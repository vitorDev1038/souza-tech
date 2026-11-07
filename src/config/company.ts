/**
 * SOUZA TECH — Configuração central da empresa
 * Altere este arquivo para atualizar as informações da empresa em todo o site.
 */
export const company = {
  name: 'SOUZA TECH',
  owner: 'Vitor de Souza Silva',
  city: 'Resende',
  state: 'RJ',
  region: 'Resende - RJ',
  whatsapp: '5524998115912',
  whatsappDisplay: '(24) 99811-5912',
  serviceArea: 'Resende - RJ',
  pickupAndDelivery: 'Busca e entrega sem taxa em Resende',
  slogan: 'Tecnologia que conecta. Confiança que permanece.',
  description:
    'Assistência técnica de celulares com praticidade, cuidado e qualidade.',
  seo: {
    title: 'SOUZA TECH | Assistência Técnica de Celulares em Resende - RJ',
    description:
      'Assistência técnica de celulares em Resende - RJ. Troca de tela, bateria, conector e reparos diversos. Solicite seu orçamento e conte com busca e entrega sem taxa.',
  },
  social: {
    // Preencha os links das redes sociais antes de publicar
    instagram: '', // Ex: 'https://instagram.com/souzatechresende'
    facebook: '', // Ex: 'https://facebook.com/souzatechresende'
  },
  // Preencha antes de publicar
  email: '', // Ex: 'contato@souzatech.com.br'
  address: '', // Ex: 'Rua Exemplo, 123 - Centro, Resende - RJ'
  businessHours: '', // Ex: 'Seg a Sex: 8h às 18h | Sáb: 8h às 13h'
  cnpj: '', // Ex: '00.000.000/0001-00'
}

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${company.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
