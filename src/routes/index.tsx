import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'
import { BuyButton } from '@/components/BuyButton'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a56db] to-[#1e3a8a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-[#dc2626] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Entrega a Domicílio
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Sua Saúde em<br />
              <span className="text-blue-200">Boas Mãos</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 max-w-md">
              Medicamentos, vitaminas, dermocosméticos e suplementos com a qualidade que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#produtos"
                className="bg-white text-[#1a56db] font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors text-center"
              >
                Ver Produtos
              </a>
              <a
                href="https://wa.me/5521995060891"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-bold px-8 py-3 rounded-xl transition-colors text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img src="/logo.jpeg" alt="FARMA FRIZEN" className="h-48 w-48 object-contain rounded-2xl shadow-2xl bg-white p-2" />
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '🚚', title: 'Entrega a Domicílio', sub: 'Região de Nova Iguaçu' },
            { icon: '🔒', title: 'Pagamento Seguro', sub: 'Ambiente criptografado' },
            { icon: '💊', title: 'Produtos Originais', sub: 'Certificados ANVISA' },
            { icon: '📞', title: 'Atendimento', sub: 'Seg–Sáb 8h–18h' },
          ].map((f) => (
            <div key={f.title} className="flex items-center gap-3">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <div className="text-sm font-bold text-slate-800">{f.title}</div>
                <div className="text-xs text-slate-500">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category chips */}
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-2">
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider self-center mr-2">Categorias:</span>
          {categories.map((cat) => (
            <span key={cat} className="bg-blue-50 text-[#1a56db] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section id="produtos" className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-extrabold text-slate-800 mb-8">
          Nossos <span className="text-[#1a56db]">Produtos</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
              <Link to="/products/$productId" params={{ productId: product.id.toString() }} className="block relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[#dc2626] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-white/90 text-[#1a56db] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {product.category}
                </span>
              </Link>
              <div className="p-5">
                <Link to="/products/$productId" params={{ productId: product.id.toString() }}>
                  <h3 className="font-bold text-slate-800 text-base mb-1 hover:text-[#1a56db] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed line-clamp-2">{product.shortDescription}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Por apenas</span>
                    <div className="text-xl font-extrabold text-[#1a56db]">
                      R$ {(product.price / 100).toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                  <BuyButton
                    productId={product.id}
                    className="!bg-[#1a56db] !text-white !border-[#1a56db] hover:!bg-[#1e40af] !rounded-xl !font-semibold"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-[#dc2626] text-white py-12 px-4 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Não encontrou o que precisa?</h2>
          <p className="text-red-100 mb-6">Entre em contato conosco pelo WhatsApp ou Instagram e te ajudamos a encontrar o produto ideal.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5521995060891"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#dc2626] font-bold px-8 py-3 rounded-xl hover:bg-red-50 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/farmafrizen?igsh=MWlmaHpsYzR4aDBraQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
