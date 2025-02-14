import type React from "react"

export const LogoOverlay: React.FC = () => {
  return (
    <div className="absolute left-1/2 z-50 w-[640px] h-[640px] animate-logo-appear" style={{ top: "calc(50% + 4rem)" }}>
      <div className="relative w-full h-full animate-logo-float">
        <div className="absolute inset-0 animate-logo-glow">
          <div className="w-full h-full bg-[#7C40FF] rounded-full opacity-20 blur-xl"></div>
        </div>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%202610459-VsEPqFvGv58hmhNoeAxw7jMiml3BGX.png"
          alt="Sendora Logo"
          className="w-[35%] h-[35%] object-contain relative z-10 m-auto"
          style={{ transform: "translateY(53%)" }}
        />
      </div>
    </div>
  )
}

