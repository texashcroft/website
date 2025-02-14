import { Button } from "@/components/ui/button"

interface CTAButtonProps {
  className?: string
  textColor?: string
}

export function CTAButton({ className = "", textColor = "text-white" }: CTAButtonProps) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Button
        size="sm"
        className="bg-[#7c40ff] text-white hover:bg-[#7c40ff]/80 text-sm sm:text-lg font-medium transition-colors duration-300 min-w-[160px] sm:min-w-[200px] py-2 sm:py-3"
      >
        Start for free
      </Button>
      <span className={`text-sm ${textColor}`}>No Credit Card Required</span>
    </div>
  )
}

