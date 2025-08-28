'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface LazyLoadProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  placeholder?: ReactNode
}

export default function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  placeholder = <div className="h-64 w-full animate-pulse bg-gray-200 rounded-md" />
}: LazyLoadProps) {
  const [loaded, setLoaded] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && !loaded) {
      setLoaded(true)
    }
  }, [inView, loaded])

  return (
    <div ref={ref} className="w-full">
      {loaded ? children : placeholder}
    </div>
  )
}