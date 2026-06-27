import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Compass,
  Drone,
  Film,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Play,
  Ruler,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  X,
} from 'lucide-react';
import Grainient from './Grainient.jsx';

const profile = {
  name: '韩欣龙',
  title: '人居环境设计方向博士申请者',
  phone: '13070707229',
  email: 'hanxinlong21@gmail.com',
  location: "Xi'an / China",
};

const navItems = [
  { label: '首页', href: '#hero' },
  { label: '经历', href: '#profile' },
  { label: '项目', href: '#projects' },
  { label: '优势', href: '#strengths' },
  { label: '联系', href: '#contact' },
];

const identities = [
  { icon: ShieldCheck, label: '中共党员' },
  { icon: Drone, label: 'CAAC 无人机机长' },
  { icon: BookOpen, label: '省级课题主持人' },
  { icon: Target, label: '人居环境设计研究方向' },
];

const stats = [
  { value: '02', label: '主持乡村振兴相关课题' },
  { value: '02', label: '发表环境设计与乡村研究论文' },
  { value: '05+', label: '国家级及省级竞赛荣誉' },
];

const timeline = [
  {
    icon: GraduationCap,
    period: '2026.01 - 2027.01',
    title: '英国萨福克大学 · 国际商业与管理 MSc',
    detail: '预计 2027 年 5 月获得学位证书，并办理教育部留服认证。',
  },
  {
    icon: GraduationCap,
    period: '2021.09 - 2025.06',
    title: '西京学院 设计艺术学院 · 环境设计 本科',
    detail: '系统学习景观、室内、效果图表达与施工图绘制，形成设计研究与落地表达基础。',
  },
  {
    icon: BriefcaseBusiness,
    period: '2024.11 - 2025.12',
    title: '西京学院 校长办公室 · 行政管理岗',
    detail: '负责校级行政事务协调，熟悉高校运营管理机制，具备组织协调与沟通能力。',
  },
];

const research = [
  '《乡村振兴导向下陕西乡村环境整合设计实践研究--以响水堡为例》主持',
  '《乡村振兴背景下渚山杨梅网络营销及推广创新模式》主持，获陕西省大创项目立项',
  '第一作者发表《乡村振兴背景下环境设计理论与实践》',
  '参与发表《乡村振兴背景下渚山杨梅网络营销及推广模式研究》',
];

const projects = [
  {
    title: '三生融合',
    subtitle: '高峰村乡村景观设计',
    type: '乡村景观设计',
    year: '2025',
    image: '/assets/project-gaofeng.jpg',
    video: '/assets/project-gaofeng-talk.mp4',
    text: '围绕产业、生态与生活空间的耦合关系，探索西北乡村景观的复合更新路径。',
    tags: ['乡村振兴', '生态更新', '产业场景'],
  },
  {
    title: '红影兴乡',
    subtitle: '南社印记乡村更新',
    type: '乡村景观改造',
    year: '2024',
    image: '/assets/project-nanshe.jpg',
    video: '/assets/project-nanshe-talk.mp4',
    text: '整合红色文化、村庄界面、公共活动与游线组织，建立具有在地记忆的村庄更新叙事。',
    tags: ['红色文化', '公共空间', '场地叙事'],
  },
  {
    title: '楼宇峥嵘',
    subtitle: '天竺山道教文化主题山地公园',
    type: '山地公园景观',
    year: '2023',
    image: '/assets/project-tianzhu.jpg',
    video: '/assets/project-tianzhu-talk.mp4',
    text: '将自然地形、宗教文化节点与游憩节奏编织为整体体验，回应山地公园的复合使用需求。',
    tags: ['文化景观', '游线规划', '山地场地'],
  },
  {
    title: '凤鸣岐山',
    subtitle: '赤符火锅餐饮室内设计',
    type: '餐饮室内空间',
    year: '2024',
    image: '/assets/project-hotpot.jpg',
    video: '/assets/project-hotpot-talk.mp4',
    text: '以神话与民间故事为概念线索，完成餐饮空间的动线、灯光、材料与氛围塑造。',
    tags: ['室内设计', '材料表达', '品牌体验'],
  },
];

const strengths = [
  {
    icon: Layers3,
    title: '人居环境整合设计',
    text: '能够从村庄肌理、公共空间、文化资源和使用人群出发，形成可落地的空间更新策略。',
  },
  {
    icon: Compass,
    title: '场地调研与问题识别',
    text: '关注真实场地中的人、活动与空间关系，善于把调研观察转译为设计议题。',
  },
  {
    icon: Drone,
    title: '无人机航拍视角',
    text: '具备 CAAC 无人机机长身份，可从航拍、场地识别和空间数据角度辅助前期研究。',
  },
  {
    icon: Ruler,
    title: '图纸与方案深化',
    text: '熟悉 Photoshop、AutoCAD、3ds Max、SketchUp、Premiere 等工具，覆盖方案到表达的完整流程。',
  },
  {
    icon: Workflow,
    title: '跨学科策略思维',
    text: '环境设计与国际商业管理背景结合，能够从设计、管理、政策和运营多维度理解项目。',
  },
  {
    icon: Sparkles,
    title: '竞赛表达与叙事',
    text: '拥有多项国家级与省级竞赛经历，擅长把复杂方案组织为清晰、有张力的作品展示。',
  },
];

const honors = [
  '2024 全国大学生广告艺术大赛陕西赛区一等奖',
  '2023 全国三维数字化创新设计大赛陕西赛区第一名',
  '2022 全国大学生电子商务“三创赛”全国一等奖',
  '2022 中国大学生计算机设计大赛西北地区二等奖',
  '2021 中国第十四届残特奥会优秀志愿者',
];

function IconListItem({ icon: Icon, children }) {
  return (
    <span>
      <Icon size={17} strokeWidth={1.7} />
      {children}
    </span>
  );
}

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) return undefined;

    let cancelled = false;
    const timer = window.setTimeout(() => {
      const video = videoRef.current;
      if (!video || cancelled) return;

      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {
          if (!videoRef.current || cancelled) return;
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        });
      }
    }, 80);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [activeProject]);

  return (
    <main>
      <header className="site-header" aria-label="主导航">
        <a className="brand" href="#hero" aria-label="回到首页">
          <strong>HX</strong>
          <span>
            <b>韩欣龙</b>
            <small>Human Settlement</small>
          </span>
        </a>
        <nav aria-label="页面导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={`mailto:${profile.email}`}>
          <Mail size={17} strokeWidth={1.8} />
          联系我
        </a>
      </header>

      <section className="hero" id="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/assets/hero-poster.jpg">
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-frame" aria-hidden="true" />

        <div className="container hero-inner">
          <div className="hero-kicker">
            <span>Master Applicant · Portfolio</span>
            <span>Portfolio 2026</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Human Settlement / Landscape / Interior</p>
            <h1>
              人居环境设计
              <span>从场地开始。</span>
            </h1>
            <p className="hero-lead">
              韩欣龙 · 博士申请作品集。以乡村人居环境研究为起点，连接场地观察、文化叙事、空间组织与可持续更新策略。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                <ArrowRight size={18} strokeWidth={1.8} />
                查看项目
              </a>
              <a className="secondary-button" href={`tel:${profile.phone}`}>
                <Phone size={18} strokeWidth={1.8} />
                联系我
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="个人标签">
            <p>Applicant Profile</p>
            <h2>韩欣龙</h2>
            <div className="identity-list">
              {identities.map((item) => (
                <IconListItem key={item.label} icon={item.icon}>
                  {item.label}
                </IconListItem>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div className="below-hero-stage">
        <Grainient
          className="below-hero-grainient"
          color1="#3B82F6"
          color2="#5227FF"
          color3="#94add7"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
        <section className="section profile-section" id="profile">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Profile</p>
            <h2>从设计、管理与政策视角理解乡村人居环境问题。</h2>
          </div>

          <div className="profile-grid">
            <div className="portrait-panel">
              <img src="/assets/portrait.jpg" alt="韩欣龙头像" />
              <div>
                <strong>{profile.name}</strong>
                <span>{profile.title}</span>
              </div>
            </div>

            <div className="profile-content">
              <p>
                本科深耕环境设计领域，围绕陕西乡村聚落人居环境开展系统性研究，主持两项省级课题并发表学术论文。硕士就读于英国萨福克大学国际商业与管理专业，掌握变革管理与战略分析等理论工具。跨学科背景使我能够从“设计-管理-政策”多维视角审视人居环境问题。
              </p>
              <div className="contact-strip">
                <a href={`mailto:${profile.email}`}>
                  <Mail size={18} strokeWidth={1.8} />
                  {profile.email}
                </a>
                <a href={`tel:${profile.phone}`}>
                  <Phone size={18} strokeWidth={1.8} />
                  {profile.phone}
                </a>
                <span>
                  <MapPin size={18} strokeWidth={1.8} />
                  {profile.location}
                </span>
              </div>
              <div className="stat-row">
                {stats.map((item) => (
                  <div className="stat-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline">
            {timeline.map((item) => {
              const Icon = item.icon;
              return (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              );
            })}
          </div>

          <div className="research-panel">
            <div>
              <p className="eyebrow">Research</p>
              <h3>科研与竞赛经历</h3>
            </div>
            <div className="research-columns">
              <ul>
                {research.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul>
                {honors.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </section>

        <section className="section projects-section" id="projects">
        <div className="container">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Selected Projects</p>
              <h2>精选项目</h2>
            </div>
            <p>
              这些项目覆盖乡村景观、山地公园与餐饮室内空间，并已接入对应的 PPT 视频讲解。
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <button
                className="project-card"
                type="button"
                onClick={() => setActiveProject(project)}
                key={project.title}
                aria-label={`播放${project.title}项目讲解视频`}
              >
                <img src={project.image} alt={`${project.title} ${project.subtitle}`} loading="lazy" decoding="async" />
                <div className="project-shade" />
                <div className="project-topline">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>
                <div className="project-play-chip">
                  <span>
                    <Play size={15} fill="currentColor" strokeWidth={1.8} />
                  </span>
                  PPT 讲解
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <strong>{project.subtitle}</strong>
                  <p>{project.text}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        </section>

        <section className="section strengths-section" id="strengths">
        <div className="container">
          <div className="section-heading split">
            <div>
              <p className="eyebrow">Capability</p>
              <h2>个人优势</h2>
            </div>
            <p>
              能力结构覆盖前期研究、概念生成、视觉表达、方案深化与项目推进，适合景观与室内交叉型人居环境课题。
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <article className="strength-card" key={item.title}>
                  <Icon size={25} strokeWidth={1.7} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
        </section>
      </div>

      <section className="contact-section" id="contact">
        <div className="contact-media" aria-hidden="true" />
        <div className="contact-overlay" aria-hidden="true" />
        <div className="container contact-inner">
          <p className="eyebrow">Contact</p>
          <h2>感谢审阅。期待有机会进一步汇报我的研究构想。</h2>
          <p>
            拟攻读西安交通大学人居环境与建筑工程学院博士，聚焦西北地区乡村人居环境品质提升与可持续规划策略研究。
          </p>
          <div className="contact-actions">
            <a className="primary-button" href={`mailto:${profile.email}`}>
              <Mail size={18} strokeWidth={1.8} />
              {profile.email}
            </a>
            <a className="secondary-button" href={`tel:${profile.phone}`}>
              <Phone size={18} strokeWidth={1.8} />
              {profile.phone}
            </a>
          </div>
          <footer>
            <span>{profile.name}</span>
            <span>Human Settlement Design Portfolio</span>
            <span>{profile.location}</span>
          </footer>
        </div>
      </section>

      {activeProject && (
        <div className="video-modal" role="presentation" onClick={() => setActiveProject(null)}>
          <div
            className="video-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title}项目讲解视频`}
            onClick={(event) => event.stopPropagation()}
          >
            <button className="video-close" type="button" onClick={() => setActiveProject(null)} aria-label="关闭视频">
              <X size={22} strokeWidth={1.8} />
            </button>
            <div className="video-info">
              <p>
                <Film size={16} strokeWidth={1.8} />
                PPT Video
              </p>
              <h3>{activeProject.title}</h3>
              <span>{activeProject.subtitle}</span>
            </div>
            <div className="video-frame">
              <video
                ref={videoRef}
                key={activeProject.video}
                controls
                autoPlay
                playsInline
                preload="auto"
                poster={activeProject.image}
              >
                <source src={activeProject.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
