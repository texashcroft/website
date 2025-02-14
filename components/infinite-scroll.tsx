"use client"
import { LogoOverlay } from "./logo-overlay"
import { CTAButton } from "@/components/ui/cta-button"

const questionsRow1 = [
  "Can it reach 100,000+ leads?",
  "Can it personalize every message?",
  "Can it book meetings for me?",
  "Can it qualify leads automatically?",
  "Can it nurture leads 24/7?",
  "Can it follow up automatically?",
  "Can it detect interest in calls?",
  "Can it replace my BDRs?",
  "Can it respond instantly?",
  "Can it chat with leads?",
  "Can it trigger follow-ups?",
  "Can it integrate with my CRM?",
  "Can it detect sentiment?",
]

const questionsRow2 = [
  "Can it handle long conversations?",
  "Can it adapt per campaign?",
  "Can it give real-time analytics?",
  "Can it run multi-channel campaigns?",
  "Can it spot hot leads?",
  "Can it scale outreach affordably?",
  "Can it automate tasks?",
  "Can it ensure consistent follow-ups?",
  "Can it sync with my calendar?",
  "Can it generate detailed reports?",
  "Can it alert me for hot leads?",
  "Can it engage across time zones?",
  "Can it re-engage cold leads?",
  "Can it make voice calls?",
  "Can it integrate with forms?",
  "Can it nurture slow responders?",
  "Can it manage multi-channel outreach?",
  "Can it qualify inbound leads?",
  "Can it create call scripts?",
  "Can it track every follow-up?",
  "Can it monitor lead interactions?",
  "Can it replace manual cold calling?",
]

const questionsRow3 = [
  "Can it sync with ad platforms?",
  "Can it notify me of bookings?",
  "Can it adjust for lead behavior?",
  "Can it prioritize top leads?",
  "Can it handle objections?",
  "Can it do personalized outreach?",
  "Can it sound natural on calls?",
  "Can it run nurturing sequences?",
  "Can it schedule meetings live?",
  "Can it qualify leads via calls?",
  "Can it manage my contacts?",
  "Can it track email performance?",
]

export default function InfiniteScroll() {
  return (
    <div className="w-screen overflow-hidden py-12 mt-24 relative -ml-[calc((100vw-100%)/2)] left-[calc((100vw-100%)/2)]">
      <div className="text-center mb-16 -mt-[3%]">
        <div className="mb-8">
          <CTAButton textColor="text-black" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-heading">
          <span className="text-black">You Asked,</span>{" "}
          <span className="bg-gradient-to-r from-[#7C40FF] via-pink-500 to-[#7C40FF] text-transparent bg-clip-text">
            We Automated
          </span>
        </h2>
      </div>

      <div className="relative">
        <LogoOverlay />
        <div className="flex flex-col gap-8 max-w-[100vw]">
          <div className="animate-scroll flex gap-8 hover:animation-play-state-paused" style={{ width: "200%" }}>
            {[...questionsRow1, ...questionsRow1].map((question, index) => (
              <div
                key={index}
                className={`flex-shrink-0 rounded-full px-6 py-4 ${
                  index % 2 === 0 ? "bg-[#7C40FF] text-white" : "bg-white text-black"
                }`}
              >
                <span className="whitespace-nowrap text-sm font-medium">{question}</span>
              </div>
            ))}
          </div>
          <div
            className="animate-scroll flex gap-8 hover:animation-play-state-paused"
            style={{ width: "200%", animationDirection: "reverse" }}
          >
            {[...questionsRow2, ...questionsRow2].map((question, index) => (
              <div
                key={index + questionsRow1.length}
                className={`flex-shrink-0 rounded-full px-6 py-4 ${
                  index % 2 === 0 ? "bg-white text-black" : "bg-[#7C40FF] text-white"
                }`}
              >
                <span className="whitespace-nowrap text-sm font-medium">{question}</span>
              </div>
            ))}
          </div>
          <div className="animate-scroll flex gap-8 hover:animation-play-state-paused" style={{ width: "200%" }}>
            {[...questionsRow3, ...questionsRow3].map((question, index) => (
              <div
                key={index + questionsRow1.length + questionsRow2.length}
                className={`flex-shrink-0 rounded-full px-6 py-4 ${
                  index % 2 === 0 ? "bg-[#7C40FF] text-white" : "bg-white text-black"
                }`}
              >
                <span className="whitespace-nowrap text-sm font-medium">{question}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

