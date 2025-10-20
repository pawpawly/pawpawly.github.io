import React, { useEffect, useRef, useCallback, useMemo } from 'react'
import './ProfileCard.css'
import profileImage from '../assets/profile.png'

const DEFAULT_BEHIND_GRADIENT =
  'radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)'

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)'

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20
}

const clamp = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max)

const round = (value, precision = 3) => parseFloat(value.toFixed(precision))

const adjust = (value, fromMin, fromMax, toMin, toMax) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin))

const easeInOutCubic = x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

const ProfileCard = ({
  avatarUrl = '',
  iconUrl = '',
  grainUrl = '',
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Frontend Developer',
  title = 'React Developer',
  handle = 'frontenddev',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}) => {
  const wrapRef = useRef(null)
  const cardRef = useRef(null)

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null

    let rafId = null

    const updateCardTransform = (offsetX, offsetY, card, wrap) => {
      const width = card.clientWidth
      const height = card.clientHeight

      const percentX = clamp((100 / width) * offsetX)
      const percentY = clamp((100 / height) * offsetY)

      const centerX = percentX - 50
      const centerY = percentY - 50

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`
      }

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value)
      })
    }

    const createSmoothAnimation = (duration, startX, startY, card, wrap) => {
      const startTime = performance.now()
      const targetX = wrap.clientWidth / 2
      const targetY = wrap.clientHeight / 2

      const animationLoop = currentTime => {
        const elapsed = currentTime - startTime
        const progress = clamp(elapsed / duration)
        const easedProgress = easeInOutCubic(progress)

        const currentX = adjust(easedProgress, 0, 1, startX, targetX)
        const currentY = adjust(easedProgress, 0, 1, startY, targetY)

        updateCardTransform(currentX, currentY, card, wrap)

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop)
        }
      }

      rafId = requestAnimationFrame(animationLoop)
    }

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
      }
    }
  }, [enableTilt])

  const handlePointerMove = useCallback(
    event => {
      const card = cardRef.current
      const wrap = wrapRef.current

      if (!card || !wrap || !animationHandlers) return

      const rect = card.getBoundingClientRect()
      animationHandlers.updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap)
    },
    [animationHandlers]
  )

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current
    const wrap = wrapRef.current

    if (!card || !wrap || !animationHandlers) return

    animationHandlers.cancelAnimation()
    wrap.classList.add('active')
    card.classList.add('active')
  }, [animationHandlers])

  const handlePointerLeave = useCallback(
    event => {
      const card = cardRef.current
      const wrap = wrapRef.current

      if (!card || !wrap || !animationHandlers) return

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.clientX - card.getBoundingClientRect().left,
        event.clientY - card.getBoundingClientRect().top,
        card,
        wrap
      )

      wrap.classList.remove('active')
      card.classList.remove('active')
    },
    [animationHandlers]
  )

  const handleTouchMove = useCallback(
    event => {
      if (!enableMobileTilt) return

      const card = cardRef.current
      const wrap = wrapRef.current

      if (!card || !wrap || !animationHandlers) return

      const rect = card.getBoundingClientRect()
      const touch = event.touches[0]
      const offsetX = (touch.clientX - rect.left) * mobileTiltSensitivity
      const offsetY = (touch.clientY - rect.top) * mobileTiltSensitivity

      animationHandlers.updateCardTransform(offsetX, offsetY, card, wrap)
    },
    [animationHandlers, enableMobileTilt, mobileTiltSensitivity]
  )

  useEffect(() => {
    const card = cardRef.current
    const wrap = wrapRef.current

    if (!card || !wrap || !animationHandlers) return

    const initialX = wrap.clientWidth / 2 + ANIMATION_CONFIG.INITIAL_X_OFFSET
    const initialY = wrap.clientHeight / 2 + ANIMATION_CONFIG.INITIAL_Y_OFFSET

    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    )
  }, [animationHandlers])

  return (
    <div
      ref={wrapRef}
      className={`pc-wrap ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onTouchMove={handleTouchMove}
      style={{
        '--behind-gradient': behindGradient || DEFAULT_BEHIND_GRADIENT,
        '--inner-gradient': innerGradient || DEFAULT_INNER_GRADIENT,
        '--card-opacity': showBehindGradient ? 1 : 0,
        '--avatar-url': `url(${avatarUrl || profileImage})`
      }}
    >
      <div ref={cardRef} className="pc-card">
        {/* Full Background Image */}
        <div className="pc-background-image"></div>
        
        {/* Overlay for better text readability */}
        <div className="pc-overlay"></div>

        {/* Content */}
        <div className="pc-content">
          <div className="pc-details">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>

        {showUserInfo && (
          <div className="pc-user-info">
            <div className="pc-user-details">
              {miniAvatarUrl && (
                <div className="pc-mini-avatar">
                  <img src={miniAvatarUrl} alt={name} />
                </div>
              )}
              <div className="pc-user-text">
                <div className="pc-handle">@{handle}</div>
                <div className="pc-status">{status}</div>
              </div>
            </div>
            <button
              className="pc-contact-btn"
              onClick={onContactClick}
            >
              {contactText}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileCard