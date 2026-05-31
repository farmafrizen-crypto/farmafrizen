import { useEffect, useState } from 'react'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'

export function BuyButton({
  productId,
  className = '',
}: {
  productId: number
  className?: string
}) {
  const [loading, setLoading] = useState(false)
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const handleClick = async () => {
    setLoading(true)
    try {
      const url = await createCheckoutSession({ data: productId })
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setLoading(false)
    }
  }

  const base = `px-5 py-2 rounded-xl font-semibold text-sm transition-colors disabled:cursor-wait bg-[#1a56db] text-white hover:bg-[#1e40af] border border-[#1a56db] ${className}`

  if (stripeEnabled === false) {
    return (
      <a
        href="https://wa.me/5521995060891"
        target="_blank"
        rel="noopener noreferrer"
        className={`px-5 py-2 rounded-xl font-semibold text-sm bg-green-500 hover:bg-green-600 text-white border-0 transition-colors inline-block text-center ${className}`}
      >
        Comprar via WhatsApp
      </a>
    )
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading || stripeEnabled === null}
      className={base}
    >
      {loading ? 'Processando...' : 'Comprar'}
    </button>
  )
}
