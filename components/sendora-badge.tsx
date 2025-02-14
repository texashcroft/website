import Image from "next/image"

export const SendoraBadge = () => {
  return (
    <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-2 shadow-lg">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610460%20(1)-gtHUDC4NFU62Fib79WqqDswBwsFVQ0.png"
        alt="Sendora Logo"
        width={64}
        height={64}
        className="object-contain"
      />
    </div>
  )
}

