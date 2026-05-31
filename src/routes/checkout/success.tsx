import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-5">
      <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-100 text-center max-w-lg">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-extrabold text-slate-800 mb-3">Pedido Confirmado!</h1>
        <p className="text-slate-500 mb-8">
          Obrigado pela sua compra na FARMA FRIZEN. Você receberá um e-mail com os detalhes do seu pedido em breve.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#1a56db] hover:bg-[#1e40af] text-white font-bold px-8 py-3 rounded-xl transition-colors"
        >
          Voltar para a Loja
        </Link>
      </div>
    </div>
  )
}
