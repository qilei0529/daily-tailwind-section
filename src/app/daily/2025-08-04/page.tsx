'use client'

import RotatingScene from '@/components/3d/RotatingScene'
import { useEffect, useRef, useState } from 'react'

export default function Page() {
  return <div className="w-screen">
    <div className="h-[100px] bg-slate-500/10 mb-8 text-center justify-center items-center flex text-2xl text-slate-300 font-bold">2025-08-04</div>

    <div className="max-w-[980px] md:h-[400px] relative mx-auto bg-gray-500/10 relative p-6">
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-[56px] md:text-[56px] bg-red-500/10 lg:text-[56px] font-medium md:text-left leading-[1.2]">
          <TypingText texts={[
            "Hello, world!",
            "Parenting in Beta mode.",
            "This is a test.",
          ]} />
        </h1>
      </div>
    </div>
  </div>
}


function TypingText({ texts }: { texts: string[] }) {

  const [index, setIndex] = useState(0)
  const text = texts[index]

  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [isForward, setIsForward] = useState(true)

  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const waitDelay = 3000

  useEffect(() => {

    // if (!isTyping) return
    if (isForward) {
      if (displayText.length === text.length) {
        timerRef.current = setTimeout(() => {
          setIsForward(false)
        }, waitDelay)
        return
      }
    } else {
      if (displayText.length === 0) {
        timerRef.current = setTimeout(() => {
          if (index === texts.length - 1) {
            setIndex(0)
          } else {
            setIndex(index + 1)
          }
          setIsForward(true)
        }, 300)
        return
      }
    }
    const interval = setInterval(() => {
      if (isForward) {
        setDisplayText(text.slice(0, displayText.length + 1))
      } else {
        setDisplayText(text.slice(0, displayText.length - 1))
      }
    }, 30)
    return () => clearInterval(interval)
  }, [text, displayText, isForward])
  return <div className="relative">
    <span className='text-transparent'>{text}</span>
    <div className='absolute top-0 left-0'>
      {displayText}
      {true ? <span className="animate-blink relative bottom-1 ml-1">|</span> : ''}
    </div>
  </div>
}
