"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { SendoraBadge } from "./sendora-badge"

interface Recording {
  id: string
  title: string
  image: string
  audioUrl: string
  summary: string
  duration?: string // Optional duration string
}

const recordings: Recording[] = [
  {
    id: "real-estate",
    title: "Real Estate",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-E7rWsP11x0iDDI7q42XcuM0vXnGBbG.png",
    audioUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/real%20estate%20(1)-VIA5vqQfHEjsVGubKHaMFOh8MnAWFO.mp3",
    duration: "2:45",
    summary:
      "AI discussing property valuations and market trends with a potential client, successfully scheduling a viewing appointment.",
  },
  {
    id: "wholesalers",
    title: "Wholesalers",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-dMhvdE446bOpFs9vpOvvtEbsaO67DA.png",
    audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wholesalers-bSpPON7jAIbuKjapbBtJZ78tik47Mn.mp3",
    duration: "3:12",
    summary:
      "AI engaging with wholesalers to discuss inventory management, pricing strategies, and supply chain optimization.",
  },
  {
    id: "online-course",
    title: "Online Coaching",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-vXMTsrrRZ3i0zqljaALzXle4DAwvQT.png",
    audioUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/online-course%20(1)-KSEcxKZO449VwC4v3FqFLUAes79JqE.mp3",
    duration: "2:30",
    summary: "AI exploring personal development goals and coaching programs, booking a strategy session.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-wpi9633cgtJ5mm8sxtENYNKKiRGZ8F.png",
    audioUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cybersecurity-D5yXWvIwrYd233ih4rp4WnXJO7jm3z.mp3",
    duration: "3:05",
    summary: "AI discussing security vulnerabilities and protection measures, scheduling a security audit.",
  },
]

export default function AudioRecordings() {
  const [activeRecording, setActiveRecording] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [currentSummary, setCurrentSummary] = useState("")
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState("0:00")

  // Reset error when changing recordings
  useEffect(() => {
    setError(null)
  }, [])

  const handlePlay = async (recording: Recording) => {
    setError(null)

    if (activeRecording === recording.id) {
      if (isPlaying) {
        audioRef.current?.pause()
      } else {
        try {
          await audioRef.current?.play()
        } catch (err) {
          setError("Failed to play audio. Please try again.")
          console.error("Audio playback error:", err)
        }
      }
    } else {
      setIsLoading(true)
      setActiveRecording(recording.id)
      setCurrentSummary(recording.summary)

      if (audioRef.current) {
        audioRef.current.src = recording.audioUrl
        try {
          await audioRef.current.play()
          setIsPlaying(true)
        } catch (err) {
          setError("Failed to load audio. Please try again.")
          console.error("Audio loading error:", err)
        } finally {
          setIsLoading(false)
        }
      }
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(progress)

      // Format current time
      const minutes = Math.floor(audioRef.current.currentTime / 60)
      const seconds = Math.floor(audioRef.current.currentTime % 60)
      setDuration(`${minutes}:${seconds.toString().padStart(2, "0")}`)
    }
  }

  const handleFastForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, audioRef.current.duration)
    }
  }

  const currentRecording = recordings.find((r) => r.id === activeRecording)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-black text-white mt-8 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center bg-gray-900/50 rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 backdrop-blur-lg shadow-2xl">
        {/* Left Column */}
        <div className="space-y-6 sm:space-y-8 bg-gray-800/50 rounded-[1rem] sm:rounded-[1.5rem] p-4 sm:p-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold font-heading mb-4"
            >
              Hear the Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-600"
            >
              Listen Sendora have long calls with your prospect, and book appointments while you chill
            </motion.p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {recordings.map((recording) => (
              <motion.button
                key={recording.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={
                  activeRecording === recording.id ? { scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" } : {}
                }
                transition={{ duration: 0.3 }}
                onClick={() => handlePlay(recording)}
                className={`w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300
                    ${activeRecording === recording.id ? "bg-white/15 shadow-lg" : "bg-white/5 hover:bg-white/10"}`}
                disabled={isLoading}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <img src={recording.image || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-base sm:text-lg font-medium">{recording.title}</span>
                  <span className="text-xs sm:text-sm text-white/60">{recording.duration}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="relative bg-gray-800/50 rounded-[1.5rem] p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRecording?.id || "placeholder"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden"
            >
              {/* Wave Animation */}
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                {currentRecording ? (
                  <img
                    src={currentRecording.image || "/placeholder.svg"}
                    alt=""
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                ) : (
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Project_X-KhTfz5hbfcdSC257bfNlakjKeAViba.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Audio Player Controls */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                  {error ? (
                    <div className="flex items-center gap-2 text-red-400 bg-black/40 p-2 rounded-lg">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm">{error}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          if (activeRecording) {
                            const recording = recordings.find((r) => r.id === activeRecording)
                            if (recording) handlePlay(recording)
                          }
                        }}
                        className={`w-12 h-12 flex items-center justify-center rounded-full bg-white text-black transition-colors
                            ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                        ) : isPlaying ? (
                          <Pause className="w-6 h-6" />
                        ) : (
                          <Play className="w-6 h-6" />
                        )}
                      </motion.button>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between text-sm text-white/80">
                          <span>{duration}</span>
                          <span>{currentRecording?.duration || "0:00"}</span>
                        </div>
                        <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1 }}
                          />
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleFastForward}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        disabled={!isPlaying}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polygon points="13 19 22 12 13 5 13 19"></polygon>
                          <polygon points="2 19 11 12 2 5 2 19"></polygon>
                        </svg>
                        <span className="sr-only">Forward 10s</span>
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: currentSummary ? 1 : 0, y: currentSummary ? 0 : 20 }}
                className="mt-6 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
              >
                <h3 className="text-xl font-semibold mb-2">Summary of Recording</h3>
                <p className="text-gray-300">{currentSummary || "Select a recording to see its summary"}</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <SendoraBadge />
      <audio
        ref={audioRef}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={handleTimeUpdate}
        onError={(e) => {
          console.error("Audio error:", e)
          setError("Failed to load audio. Please try again.")
          setIsLoading(false)
        }}
      />
    </div>
  )
}

