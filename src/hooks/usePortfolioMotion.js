import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const smoothEase = 'power3.inOut'
const revealEase = 'power4.out'
const sweepEase = 'power2.inOut'

function usePortfolioMotion(pageRef) {
  useEffect(() => {
    const page = pageRef.current

    if (!page) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const compactViewportQuery = window.matchMedia('(max-width: 900px)')
    const isCompact = compactViewportQuery.matches

    if (mediaQuery.matches) {
      page.classList.add('motion-ready')
      return undefined
    }

    const ctx = gsap.context(() => {
      page.classList.add('motion-ready')

      const openingTimeline = gsap.timeline({
        defaults: { ease: smoothEase }
      })

      openingTimeline
        .set('.opening-screen', { autoAlpha: 1 })
        .set('.opening-kicker', { yPercent: 105, opacity: 0 })
        .set('.opening-title-line', {
          yPercent: 118,
          opacity: 0,
          scaleX: isCompact ? 0.84 : 0.9,
          transformOrigin: 'center center'
        })
        .set('.opening-subtitle-line', { yPercent: 92, opacity: 0 })
        .set('.opening-line', { scaleX: 0, transformOrigin: 'left center' })
        .fromTo(
          '.opening-panel',
          { scaleY: isCompact ? 1.12 : 1.08, transformOrigin: 'top center' },
          { scaleY: 1, duration: isCompact ? 1.18 : 1.1, stagger: isCompact ? 0.045 : 0.06, ease: sweepEase }
        )
        .to('.opening-kicker', {
          yPercent: 0,
          opacity: 1,
          duration: isCompact ? 0.92 : 0.8,
          ease: revealEase
        })
        .to(
          '.opening-title-line',
          {
            yPercent: 0,
            opacity: 1,
            scaleX: 1,
            duration: isCompact ? 1.55 : 1.35,
            ease: revealEase
          },
          '-=0.45'
        )
        .to(
          '.opening-subtitle-line',
          {
            yPercent: 0,
            opacity: 1,
            duration: isCompact ? 1.22 : 1.12,
            ease: revealEase
          },
          '-=0.86'
        )
        .fromTo(
          '.opening-line',
          { scaleX: 0 },
          { scaleX: 1, duration: 1.32, ease: sweepEase },
          '-=1'
        )
        .to(
          '.opening-panel',
          {
            yPercent: -101,
            stagger: isCompact ? 0.045 : 0.06,
            duration: isCompact ? 1.55 : 1.7,
            ease: sweepEase
          },
          '-=0.12'
        )
        .to(
          '.opening-copy, .opening-line',
          {
            autoAlpha: 0,
            y: -8,
            duration: 0.72,
            ease: 'power2.out'
          },
          '-=1.22'
        )
        .to(
          '.opening-screen',
          {
            autoAlpha: 0,
            duration: 0.4,
            pointerEvents: 'none'
          },
          '-=0.28'
        )

      const heroTimeline = gsap.timeline({
        delay: 0.25,
        defaults: { ease: revealEase }
      })

      heroTimeline
        .fromTo(
          '.hero-image',
          {
            scale: isCompact ? 1.16 : 1.12,
            xPercent: isCompact ? 0 : 1.2,
            filter: 'saturate(0.76) brightness(0.42)'
          },
          {
            scale: 1,
            xPercent: 0,
            filter: 'saturate(0.9) brightness(0.64)',
            duration: isCompact ? 2.65 : 3,
            ease: smoothEase
          }
        )
        .fromTo(
          '.hero-word',
          {
            xPercent: isCompact ? -10 : 8,
            yPercent: isCompact ? 4 : 0,
            opacity: 0,
            scale: isCompact ? 1.12 : 1.05,
            filter: isCompact ? 'blur(5px)' : 'blur(10px)'
          },
          {
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: isCompact ? 2.05 : 2.6,
            ease: sweepEase
          },
          0.18
        )
        .fromTo(
          '.hero-title-line',
          {
            yPercent: isCompact ? 118 : 112,
            opacity: 0,
            scaleY: isCompact ? 1.2 : 1.12,
            skewY: isCompact ? 2.4 : 1.5,
            transformOrigin: 'top center'
          },
          {
            yPercent: 0,
            opacity: 1,
            scaleY: 1,
            skewY: 0,
            stagger: 0.08,
            duration: isCompact ? 1.55 : 1.7
          },
          0.42
        )
        .fromTo(
          '.hero-eyebrow',
          { x: -12, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.22 },
          1.02
        )
        .fromTo(
          '.hero-text, .hero-research-panel > *',
          { y: isCompact ? 30 : 24, opacity: 0 },
          { y: 0, opacity: 1, duration: isCompact ? 1.18 : 1.35, stagger: 0.08, ease: smoothEase },
          1.08
        )
        .fromTo(
          '.hero-actions > *',
          { y: 18, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 1.18, stagger: 0.12 },
          1.3
        )
        .fromTo(
          '.hero-metric',
          { y: 20, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1.12, stagger: 0.1 },
          1.44
        )
        .fromTo(
          '.hero-focus-item',
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.08, stagger: 0.1 },
          1.3
        )

      const sectionElements = gsap.utils.toArray('.motion-section')

      sectionElements.forEach((section) => {
        const heading = section.querySelector('.section-backtitle')
        const headingAxis = section.querySelector('.section-heading-axis')
        const titleLines = section.querySelectorAll('.title-mask .title-line')
        const cards = section.querySelectorAll(
          '.experience-glow, .project-card, .strength-glow, .contact-info-item, .contact-qr'
        )
        const infoBlocks = section.querySelectorAll(
          '.identity-tag-card, .contact-strip-item, .section-text, .contact-copy-text'
        )
        const image = section.querySelector('.project-image')
        const revealLayer = section.querySelector('.project-image-reveal')

        if (headingAxis) {
          gsap.fromTo(
            headingAxis,
            { scaleX: 0, opacity: 0, xPercent: -8 },
            {
              scaleX: 1,
              opacity: 1,
              xPercent: 0,
              duration: isCompact ? 1.18 : 1.45,
              ease: sweepEase,
              scrollTrigger: {
                trigger: section,
                start: isCompact ? 'top 88%' : 'top 80%',
                once: true
              }
            }
          )
        }

        if (heading) {
          gsap.fromTo(
            heading,
            {
              xPercent: isCompact ? -18 : -12,
              yPercent: isCompact ? 7 : 2,
              opacity: 0,
              scale: isCompact ? 1.09 : 1.06,
              filter: isCompact ? 'blur(4px)' : 'blur(8px)'
            },
            {
              xPercent: 0,
              yPercent: 0,
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: isCompact ? 1.38 : 1.7,
              ease: sweepEase,
              scrollTrigger: {
                trigger: section,
                start: isCompact ? 'top 86%' : 'top 78%',
                once: true
              }
            }
          )
        }

        if (titleLines.length) {
          gsap.fromTo(
            titleLines,
            { yPercent: isCompact ? 116 : 108, opacity: 0, skewY: isCompact ? 2.2 : 1.5 },
            {
              yPercent: 0,
              opacity: 1,
              skewY: 0,
              duration: isCompact ? 1.25 : 1.4,
              stagger: 0.08,
              ease: revealEase,
              scrollTrigger: {
                trigger: section,
                start: isCompact ? 'top 84%' : 'top 74%',
                once: true
              }
            }
          )
        }

        if (infoBlocks.length) {
          gsap.fromTo(
            infoBlocks,
            { y: isCompact ? 26 : 22, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: isCompact ? 1.08 : 1.18,
              stagger: 0.08,
              ease: revealEase,
              scrollTrigger: {
                trigger: section,
                start: isCompact ? 'top 78%' : 'top 70%',
                once: true
              }
            }
          )
        }

        if (cards.length) {
          gsap.fromTo(
            cards,
            {
              y: isCompact ? 42 : 28,
              x: 0,
              opacity: 0,
              rotateX: isCompact ? 0 : -3,
              rotateY: 0,
              scale: isCompact ? 0.965 : 0.985,
              clipPath: isCompact ? 'inset(10% 0% 14% 0%)' : 'inset(0% 0% 0% 0%)',
              transformOrigin: 'top center'
            },
            {
              y: 0,
              x: 0,
              opacity: 1,
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: isCompact ? 1.2 : 1.4,
              stagger: isCompact ? 0.08 : 0.1,
              ease: smoothEase,
              scrollTrigger: {
                trigger: section,
                start: isCompact ? 'top 76%' : 'top 66%',
                once: true
              }
            }
          )
        }

        if (image && !isCompact) {
          gsap.fromTo(
            image,
            { scale: 1.03, yPercent: 1 },
            {
              scale: 1,
              yPercent: -1.5,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
                invalidateOnRefresh: false
              }
            }
          )
        }

        if (revealLayer) {
          gsap.fromTo(
            revealLayer,
            { xPercent: 0, opacity: 1 },
            {
              xPercent: 104,
              opacity: 0,
              duration: isCompact ? 1.38 : 2.05,
              ease: sweepEase,
              scrollTrigger: {
                trigger: section,
                start: isCompact ? 'top 86%' : 'top 80%',
                once: true
              }
            }
          )
        }
      })

      gsap.utils.toArray('.project-card').forEach((card, index) => {
        const image = card.querySelector('.project-image')
        const overlay = card.querySelector('.project-scrim')
        const revealLayer = card.querySelector('.project-image-reveal')

        if (image) {
          gsap.fromTo(
            image,
            {
              opacity: isCompact ? 0.72 : 0.8,
              scale: isCompact ? 1.08 : 1.006,
              filter: 'saturate(0.72) brightness(0.62) contrast(0.98)'
            },
            {
              opacity: 1,
              scale: isCompact ? 1.02 : 1,
              filter: 'saturate(0.8) brightness(0.7) contrast(0.98)',
              duration: isCompact ? 1.32 : 1.85,
              ease: smoothEase,
              scrollTrigger: {
                trigger: card,
                start: isCompact ? 'top 88%' : 'top 84%',
                once: true
              }
            }
          )
        }

        if (overlay) {
          gsap.fromTo(
            overlay,
            { opacity: 0.72 },
            {
              opacity: 1,
              duration: isCompact ? 1.02 : 1.4,
              ease: smoothEase,
              scrollTrigger: {
                trigger: card,
                start: isCompact ? 'top 88%' : 'top 82%',
                once: true
              }
            }
          )
        }

        if (revealLayer) {
          gsap.fromTo(
            revealLayer,
            { opacity: isCompact ? 0.34 : 0.22, xPercent: 0 },
            {
              opacity: 0,
              xPercent: 110,
              duration: isCompact ? 1.05 : 1.2,
              ease: isCompact ? sweepEase : 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: isCompact ? 'top 90%' : index < 2 ? 'top 86%' : 'top 88%',
                once: true
              }
            }
          )
        }
      })

      if (isCompact) {
        ScrollTrigger.refresh()
      }
    }, page)

    return () => {
      ctx.revert()
    }
  }, [pageRef])
}

export default usePortfolioMotion
