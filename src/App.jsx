import { useEffect, useRef, useState } from 'react'
import BorderGlow from './components/BorderGlow'
import Grainient from './components/Grainient'
import { experiences, projects, strengths } from './data/portfolio'
import usePortfolioMotion from './hooks/usePortfolioMotion'

const heroImage = '/media/hero/hero-hotpot.webp'
const contactQrImage = '/media/contact/wechat-qr.png'

const heroMetrics = [
  { value: '02', label: '主持课题' },
  { value: '02', label: '论文发表' },
  { value: '04', label: '视频项目' }
]

function App() {
  const [activeProject, setActiveProject] = useState(null)
  const [contentVisible, setContentVisible] = useState(false)
  const pageRef = useRef(null)
  const videoRef = useRef(null)

  usePortfolioMotion(pageRef)

  useEffect(() => {
    const timer = window.setTimeout(() => setContentVisible(true), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!activeProject) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject])

  useEffect(() => {
    if (!activeProject || !videoRef.current) {
      return
    }

    const video = videoRef.current
    video.currentTime = 0

    video.play().catch(async () => {
      video.muted = true
      try {
        await video.play()
      } catch {
        // Keep controls available even when the browser blocks autoplay.
      }
    })
  }, [activeProject])

  return (
    <div ref={pageRef} className="portfolio-page">
      <div className="page-noise" aria-hidden="true" />
      <div className="opening-screen" aria-hidden="true">
        <div className="opening-panels">
          <span className="opening-panel" />
          <span className="opening-panel" />
          <span className="opening-panel" />
          <span className="opening-panel" />
        </div>
        <div className="opening-copy">
          <span className="opening-mask">
            <span className="opening-kicker">HAN XINLONG / DOCTORAL PORTFOLIO</span>
          </span>
          <span className="opening-mask">
            <span className="opening-title-line">PORTFOLIO</span>
          </span>
          <span className="opening-mask">
            <span className="opening-subtitle-line">HUMAN SETTLEMENTS DESIGN</span>
          </span>
        </div>
        <span className="opening-line" />
      </div>

      <header className="site-nav">
        <div className="content-frame nav-row">
          <a className="brand" href="#top">
            <div className="brand-shell">
              <span className="brand-mark">P</span>
              <div className="brand-copy">
                <span className="brand-kicker">PORTFOLIO</span>
                <span className="brand-name">韩欣龙 / 人居环境设计申请作品集</span>
              </div>
            </div>
          </a>

          <nav className="nav-links" aria-label="站点导航">
            <a href="#profile">个人经历</a>
            <a href="#projects">精选项目</a>
            <a href="#strengths">个人优势</a>
            <a href="#contact">联系</a>
          </nav>

          <a className="nav-cta" href="mailto:hanxinlong21@gmail.com">
            联系我
          </a>
        </div>
      </header>

      <main className="app-shell" id="top">
        <section className="hero-section motion-section">
          <div className="hero-media" aria-hidden="true">
            <img
              className="hero-image"
              src={heroImage}
              alt="赤符火锅餐饮空间效果图"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
          <div className="hero-overlay" />

          <div className="content-frame hero-grid">
            <div className="hero-word" aria-hidden="true">
              PORTFOLIO
            </div>
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">PORTFOLIO / HUMAN SETTLEMENTS DESIGN</p>
              <h1 className="hero-title">
                <span className="hero-title-mask">
                  <span className="hero-title-line">以空间研究回应</span>
                </span>
                <span className="hero-title-mask">
                  <span className="hero-title-line">乡村人居环境的更新命题</span>
                </span>
              </h1>
              <p className="hero-text">
                韩欣龙，环境设计本科背景，关注西北乡村聚落更新、景观系统优化与空间叙事表达。
                当前以跨学科视角衔接设计、管理与研究方法，申请人居环境设计方向博士研究生。
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#projects">
                  查看作品
                </a>
                <a className="secondary-button" href="#contact">
                  联系方式
                </a>
              </div>

              <div className="hero-metrics" aria-label="首页概览">
                {heroMetrics.map((item) => (
                  <div className="hero-metric" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-spotlight hero-research-panel">
              <span className="hero-spotlight-label">Research Focus</span>
              <h2 className="hero-spotlight-title">从真实场地问题出发，让研究与设计共同生成空间回应。</h2>
              <p className="hero-spotlight-text">
                关注乡村聚落更新、人居环境优化与空间叙事表达，在设计、研究与系统分析之间建立面向真实场地的问题意识。
              </p>
              <div className="hero-focus-list" aria-label="研究方向">
                <div className="hero-focus-item">
                  <strong>乡村聚落更新</strong>
                  <span>Village Renewal</span>
                </div>
                <div className="hero-focus-item">
                  <strong>人居环境优化</strong>
                  <span>Habitat Strategy</span>
                </div>
                <div className="hero-focus-item">
                  <strong>空间叙事表达</strong>
                  <span>Spatial Narrative</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div className="content-sections">
          <div className="content-grainient" aria-hidden="true">
            {contentVisible ? (
              <Grainient
                className="content-grainient-canvas"
                color1="#8a6558"
                color2="#4d6d97"
                color3="#121925"
                timeSpeed={0.18}
                colorBalance={0.02}
                warpStrength={0.92}
                warpFrequency={3.2}
                warpSpeed={0.82}
                warpAmplitude={72}
                blendAngle={-10}
                blendSoftness={0.26}
                rotationAmount={180}
                noiseScale={1.35}
                grainAmount={0.08}
                grainScale={1.66}
                grainAnimated={false}
                contrast={1.18}
                gamma={0.98}
                saturation={1.0}
                centerX={0.1}
                centerY={-0.04}
                zoom={0.8}
              />
            ) : null}
            <div className="content-grainient-mask" />
          </div>

          <div className="content-sections-inner">
            <section className="section-block profile-section motion-section" id="profile">
              <div className="content-frame profile-grid">
                <div className="profile-visual">
                  <div className="portrait-shell">
                    <img className="portrait-image" src="/media/profile/portrait.jpg" alt="韩欣龙证件照" />
                  </div>
                  <div className="identity-tags" aria-label="身份与背景">
                    <div className="identity-tag-card">
                      <small>政治身份</small>
                      <strong>中共党员</strong>
                    </div>
                    <div className="identity-tag-card">
                      <small>技术资质</small>
                      <strong>CAAC 无人机机长</strong>
                    </div>
                    <div className="identity-tag-card">
                      <small>专业基础</small>
                      <strong>环境设计背景</strong>
                    </div>
                  </div>
                </div>

                <div className="profile-copy">
                  <div className="section-heading-copy section-heading-about">
                    <span className="section-heading-axis" aria-hidden="true" />
                    <span className="section-backtitle">ABOUT</span>
                    <p className="eyebrow">个人经历 / About</p>
                    <h2 className="section-title-profile">
                      <span className="title-mask">
                        <span className="title-line">在设计、研究与管理之间建立</span>
                      </span>
                      <span className="title-mask">
                        <span className="title-line">对人居环境问题的综合判断。</span>
                      </span>
                    </h2>
                  </div>
                  <p className="section-text">
                    本科阶段深耕环境设计，围绕陕西乡村聚落人居环境开展系统性研究，主持两项课题并发表论文；
                    硕士阶段转入国际商业与管理学习，以变革管理与战略分析方法补强空间议题的系统视角。
                  </p>
                  <div className="contact-strip" aria-label="联系方式">
                    <a className="contact-strip-item" href="mailto:hanxinlong21@gmail.com">
                      <span className="contact-strip-label">邮箱</span>
                      <span className="contact-strip-value">hanxinlong21@gmail.com</span>
                    </a>
                    <a className="contact-strip-item" href="tel:13070707229">
                      <span className="contact-strip-label">电话</span>
                      <span className="contact-strip-value">13070707229</span>
                    </a>
                  </div>
                  <div className="experience-list">
                    {experiences.map((item) => (
                      <BorderGlow
                        key={item.period + item.title}
                        className="experience-glow"
                        edgeSensitivity={42}
                        glowColor="30 65 72"
                        backgroundColor="rgba(10, 13, 20, 0.84)"
                        borderRadius={28}
                        glowRadius={24}
                        glowIntensity={0.7}
                        coneSpread={22}
                        animated={false}
                        fillOpacity={0.18}
                        colors={['#d0a56b', '#6f88b0', '#4f3841']}
                      >
                        <article className="experience-item">
                          <span className="experience-period">{item.period}</span>
                          <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                            <small>{item.note}</small>
                          </div>
                        </article>
                      </BorderGlow>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="section-block projects-section motion-section" id="projects">
              <div className="content-frame section-header">
                <div className="section-heading-copy section-heading-works">
                  <span className="section-heading-axis" aria-hidden="true" />
                  <span className="section-backtitle">WORKS</span>
                  <p className="eyebrow">精选项目 / Selected Works</p>
                  <h2 className="section-title-projects">
                    <span className="title-mask">
                      <span className="title-line">点击卡片，</span>
                    </span>
                    <span className="title-mask">
                      <span className="title-line">即可弹出对应讲解视频。</span>
                    </span>
                  </h2>
                </div>
              </div>

              <div className="content-frame project-grid">
                {projects.map((project, index) => (
                  <button
                    className={`project-card project-card-${(index % 4) + 1}`}
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    type="button"
                  >
                    <div className="project-image-wrap">
                      <img
                        className="project-image"
                        src={project.coverWebp || project.cover}
                        alt={`${project.title}封面`}
                        loading={index < 2 ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={index < 2 ? 'high' : 'auto'}
                      />
                      <span className="project-image-reveal" aria-hidden="true" />
                    </div>
                    <div className="project-scrim" />
                    <div className="project-body">
                      <div className="project-meta">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <div className="project-copy">
                        <h3>{project.title}</h3>
                        <p>{project.subtitle}</p>
                        <small>{project.summary}</small>
                      </div>
                      <div className="project-footer">
                        <div className="project-tags">
                          {project.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                        <span className="project-watch">点击观看讲解视频</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="section-block strengths-section motion-section" id="strengths">
              <div className="content-frame section-header">
                <div className="section-heading-copy section-heading-strengths">
                  <span className="section-heading-axis" aria-hidden="true" />
                  <span className="section-backtitle">STRENGTHS</span>
                  <p className="eyebrow">个人优势 / Strengths</p>
                  <h2 className="section-title-strengths">
                    <span className="title-mask">
                      <span className="title-line">更关注问题的复杂性，</span>
                    </span>
                    <span className="title-mask">
                      <span className="title-line">也更在意设计如何真正被理解与落地。</span>
                    </span>
                  </h2>
                </div>
              </div>
              <div className="content-frame strength-grid">
                {strengths.map((item, index) => (
                  <BorderGlow
                    key={item.title}
                    className="strength-glow"
                    edgeSensitivity={40}
                    glowColor="212 52 72"
                    backgroundColor="rgba(10, 13, 20, 0.82)"
                    borderRadius={28}
                    glowRadius={22}
                    glowIntensity={0.82}
                    coneSpread={24}
                    animated={false}
                    fillOpacity={0.2}
                    colors={['#7f9fd0', '#d0a56b', '#40536f']}
                  >
                        <article className="strength-card">
                          <span className="strength-index">0{index + 1}</span>
                          <h3>{item.title}</h3>
                          <p>{item.detail}</p>
                        </article>
                      </BorderGlow>
                ))}
              </div>
            </section>

            <section className="contact-section motion-section" id="contact">
              <div className="content-frame contact-grid">
                <div className="contact-copy">
                  <div className="section-heading-copy section-heading-contact">
                    <span className="section-heading-axis" aria-hidden="true" />
                    <span className="section-backtitle">CONTACT</span>
                    <p className="eyebrow">Contact / Closing Page</p>
                    <h2 className="contact-title">
                      <span className="title-mask">
                        <span className="title-line">期待在更深入的研究与设计实践中，</span>
                      </span>
                      <span className="title-mask">
                        <span className="title-line">继续回应乡村人居环境的真实议题。</span>
                      </span>
                    </h2>
                  </div>
                  <p className="contact-copy-text">
                    如蒙审阅，若需进一步了解研究设想、项目细节或相关材料，可通过右侧方式与我联系。
                  </p>
                </div>
                <div className="contact-card">
                  <div className="contact-info-list">
                    <div className="contact-info-item">
                      <span className="contact-info-label">Email</span>
                      <a href="mailto:hanxinlong21@gmail.com">hanxinlong21@gmail.com</a>
                    </div>
                    <div className="contact-info-item">
                      <span className="contact-info-label">Phone</span>
                      <a href="tel:13070707229">13070707229</a>
                    </div>
                    <div className="contact-info-item">
                      <span className="contact-info-label">Location</span>
                      <span>山东潍坊</span>
                    </div>
                  </div>
                  <div className="contact-qr">
                    <img src={contactQrImage} alt="微信二维码" loading="lazy" decoding="async" />
                    <span>微信扫码联系</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {activeProject && (
        <div
          className="video-modal"
          onClick={() => setActiveProject(null)}
          role="presentation"
        >
          <div
            className="video-dialog"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-dialog-title"
          >
            <div className="video-dialog-head">
              <div>
                <p>{activeProject.category}</p>
                <h3 id="video-dialog-title">{activeProject.title}</h3>
              </div>
              <button
                className="close-button"
                onClick={() => setActiveProject(null)}
                type="button"
              >
                关闭
              </button>
            </div>
            <div className="video-stage">
              <video
                key={activeProject.id}
                ref={videoRef}
                className="project-video"
                src={activeProject.video}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
