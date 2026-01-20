import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { gsap } from "gsap"

const Cursor = () => {
  const cursorRef = useRef(null)

  useGSAP(() => {
    gsap.to(cursorRef.current, {
        xPercent: -50,
        yPercent: -50,
    })
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    })

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    })

    const moveCursor = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    window.addEventListener("mousemove", moveCursor)

    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block h-3 w-3 rounded-full bg-(--primery-color) fixed pointer-events-none z-50"
    />
  )
}

export default Cursor
