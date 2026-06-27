export const projectVideos = [
  '/media/videos/project-1.mp4',
  '/media/videos/project-2.mp4',
  '/media/videos/project-3.mp4',
  '/media/videos/project-4.mp4'
]

export const stats = [
  { value: '02', label: '主持课题' },
  { value: '02', label: '论文发表' },
  { value: '04', label: '视频讲解项目' },
  { value: '01', label: 'CAAC 无人机机长身份' }
]

export const experiences = [
  {
    period: '2026.01 - 2027.01',
    title: '英国萨福克大学',
    subtitle: '国际商业与管理 理学硕士（MSc）',
    note: '预计 2027 年 5 月获得学位证书，并办理教育部留服认证。'
  },
  {
    period: '2021.09 - 2025.06',
    title: '西京学院 设计艺术学院',
    subtitle: '环境设计 本科',
    note: '本科阶段聚焦陕西乡村聚落与人居环境更新设计。'
  },
  {
    period: '2024.11 - 2025.12',
    title: '西京学院 校长办公室',
    subtitle: '行政管理岗',
    note: '负责校级行政事务协调，积累组织统筹与跨部门沟通经验。'
  }
]

export const strengths = [
  {
    title: '乡村人居研究',
    detail: '围绕陕西乡村聚落与传统村落活化开展课题主持、论文写作与设计转译。'
  },
  {
    title: '空间方案推演',
    detail: '能够完成环境景观、室内空间到施工表达的全流程方案梳理与视觉呈现。'
  },
  {
    title: '跨学科整合',
    detail: '结合设计、管理与政策视角，理解空间问题背后的运营、协同与落地逻辑。'
  },
  {
    title: '数字表达能力',
    detail: '熟练使用 Photoshop、AutoCAD、3ds Max、SketchUp 与 Premiere 进行设计表达。'
  },
  {
    title: '场地洞察与航拍',
    detail: '具备 CAAC 无人机机长身份，可将现场观察、低空影像与方案分析结合起来。'
  }
]

export const projects = [
  {
    id: 'nanshe',
    category: '环境空间设计',
    title: '红影兴乡 · 南书印记',
    subtitle: '渭北南社村景观改造项目',
    year: '乡村更新 / 传统村落活化',
    summary:
      '以地域书法文化与村落更新为线索，重组民宿、游览、体验与公共界面，回应传统聚落的活化命题。',
    tags: ['村落改造', '文化植入', '景观更新'],
    cover: '/media/covers/nanshe-cover.webp',
    video: projectVideos[0]
  },
  {
    id: 'gaofeng',
    category: '环境空间设计',
    title: '美丽秦乡',
    subtitle: '三生融合理念下陕西乡村景观设计',
    year: '平利县长安镇高峰村',
    summary:
      '从生态、生产、生活三重维度统筹空间节点与产业场景，建立面向乡村振兴的整体景观系统。',
    tags: ['三生融合', '生态景观', '乡村振兴'],
    cover: '/media/covers/gaofeng-cover.webp',
    video: projectVideos[1]
  },
  {
    id: 'tianzhu',
    category: '主题公园景观',
    title: '楼观峥嵘，御气百灵',
    subtitle: '天竺山道教文化主题山地公园景观设计',
    year: '山地公园 / 文化叙事',
    summary:
      '围绕道教文化与山地公园复合场景展开空间组织，在自然地形中构建游览、修憩与文化展示的连续体验。',
    tags: ['山地公园', '文化主题', '空间叙事'],
    cover: '/media/covers/tianzhu-cover.webp',
    video: projectVideos[2]
  },
  {
    id: 'hotpot',
    category: '餐饮空间深化设计',
    title: '凤鸣岐山 · 赤符火锅',
    subtitle: '火锅店室内设计与文化叙事表达',
    year: '室内空间 / 品牌氛围',
    summary:
      '将神话意象、动线设计与空间氛围结合，塑造具有故事性的餐饮空间体验与品牌记忆点。',
    tags: ['室内设计', '品牌空间', '叙事表达'],
    cover: '/media/covers/hotpot-cover.webp',
    video: projectVideos[3]
  }
]
