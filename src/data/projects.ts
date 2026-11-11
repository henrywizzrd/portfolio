export type Project = {
  title: string
  subtitle: string
  description: string
  gallery?: { src: string; caption: string }[]
  phones?: { portrait: string[]; landscape: string }
  tags: string[]
  highlights: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'Zabbix Agent Version Manager',
    subtitle: 'Internship project · HPT Vietnam Corporation · Jun – Sep 2026',
    description:
      'A centralized tool integrated into the Zabbix web interface that detects Zabbix Agent versions across monitored hosts, evaluates official releases, and performs controlled manual and automatic updates with verification and rollback. Built and validated in a lab environment for the SmartNOC team.',
    gallery: [
      { src: '/projects/zabbix-dashboard.png', caption: 'Agent version status & update job logs' },
      { src: '/projects/zabbix-release.png', caption: 'Official release & security advisory evaluation' },
      { src: '/projects/zabbix-audit.png', caption: 'Audit logs with role-based access control' },
    ],
    tags: ['FastAPI', 'Python', 'Ansible', 'Zabbix API', 'PHP', 'PostgreSQL', 'Docker'],
    highlights: [
      'Built a FastAPI backend that collects host and agent metadata via the Zabbix API and checks OS compatibility',
      'Automated agent updates with Ansible, verifying the installed version after every run',
      'Added Auto Update policies, persistent job history and rollback to previous successful versions',
      'Implemented audit logging and capability-based authorization tied to Zabbix user roles',
    ],
  },
  {
    title: 'ZYX',
    subtitle: 'Personal project · Music app for iOS & Android · 2026',
    description:
      'A highly customizable music app that streams from YouTube Music, inspired by Spotify and Spicetify. Users shape their own experience: themes with animated backgrounds, a draggable dock and mini player, and a layout that adapts to portrait and landscape.',
    phones: {
      portrait: ['/projects/zyx-green.webp', '/projects/zyx-snow.webp', '/projects/zyx-latte.webp'],
      landscape: '/projects/zyx-landscape.webp',
    },
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'YouTube Music'],
    highlights: [
      'Real playback from YouTube Music with search suggestions, caching and a Now Playing screen',
      'Theme presets with animated background effects: falling leaves, snow, floating coffee beans',
      'Draggable dock and mini player that merge together with custom animations',
      'Auto-rotating landscape layout with split, independently scrolling panes',
    ],
    link: 'https://github.com/henrywizzrd/zyx',
  },
]
