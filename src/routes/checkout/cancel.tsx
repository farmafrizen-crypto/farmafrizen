import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-100 text-center max-w-lg">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-slate-800 mb-3">Pagamento Cancelado</h1>
        <p className="text-slate-500 mb-8">
          Seu pagamento foi cancelado. Nenhuma cobrança foi realizada. Se precisar de ajuda, entre em contato conosco pelo WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-block bg-[#1a56db] hover:bg-[#1e40af] text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Voltar para a Loja
          </Link>
          <a
            href="https://wa.me/5521995060891"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
