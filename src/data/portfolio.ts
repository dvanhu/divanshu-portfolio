export const personalInfo = {
  name: 'Divanshu',
  title: 'DevOps Engineer',
  subtitle: 'Cloud & Kubernetes Enthusiast',
  tagline: 'Building production-grade infrastructure at the intersection of automation, security, and scale.',
  email: 'divanshu0213@gmail.com',
  phone: '+91 8769602397',
  github: 'https://github.com/dvanhu',
  linkedin: 'https://linkedin.com/in/dvanhu',
  location: 'Jaipur, India',
  resumeUrl: '/resume.pdf',
  shortBio: `DevOps engineer with deep expertise in Kubernetes orchestration, GitOps-driven delivery, and DevSecOps automation. I design CI/CD pipelines that ship faster, infrastructure that scales reliably, and security gates that never block velocity.`,
}

export const aboutContent = {
  paragraphs: [
    `I'm a DevOps engineer focused on building cloud-native infrastructure that's automated, observable, and secure by design. My work sits at the intersection of Kubernetes orchestration, CI/CD engineering, and security-first thinking — bringing production-grade practices to every system I touch.`,
    `With hands-on experience across AWS, Docker, Kubernetes, and GitOps tooling like ArgoCD, I architect pipelines that integrate security scanning (SAST, SCA, container hardening) without sacrificing delivery speed. My observability setups with Prometheus and Grafana give teams real-time confidence in production environments.`,
    `I believe infrastructure should be code, deployments should be declarative, and every pipeline should enforce quality gates — not as bottlenecks, but as guardrails that let teams move faster with confidence.`,
  ],
  highlights: [
    { label: 'Container Orchestration', value: 'Kubernetes + KEDA' },
    { label: 'CI/CD Engineering', value: 'Jenkins, GitHub Actions' },
    { label: 'GitOps Delivery', value: 'ArgoCD + Kustomize' },
    { label: 'DevSecOps', value: 'SonarQube, Trivy, OWASP' },
    { label: 'Cloud Platform', value: 'AWS' },
    { label: 'Observability', value: 'Prometheus + Grafana' },
  ],
}

export const skills = [
  {
    category: 'Cloud & DevOps',
    icon: 'Cloud',
    color: 'blue',
    items: ['AWS', 'EC2', 'S3', 'VPC', 'IAM', 'Cloud Architecture'],
  },
  {
    category: 'Containers & Orchestration',
    icon: 'Box',
    color: 'cyan',
    items: ['Kubernetes', 'Docker', 'KEDA', 'HPA', 'Pod Autoscaling', 'Helm'],
  },
  {
    category: 'CI/CD & GitOps',
    icon: 'GitBranch',
    color: 'purple',
    items: ['Jenkins', 'GitHub Actions', 'ArgoCD', 'GitOps', 'Kustomize', 'Declarative CD'],
  },
  {
    category: 'Infrastructure as Code',
    icon: 'Code2',
    color: 'blue',
    items: ['Terraform', 'Ansible', 'Infrastructure Automation', 'Config Management'],
  },
  {
    category: 'Monitoring & Observability',
    icon: 'Activity',
    color: 'cyan',
    items: ['Prometheus', 'Grafana', 'Alertmanager', 'Metrics', 'Dashboards', 'SLO/SLA'],
  },
  {
    category: 'Security & DevSecOps',
    icon: 'Shield',
    color: 'purple',
    items: ['SonarQube (SAST)', 'OWASP Dep-Check', 'Trivy', 'Container Security', 'Quality Gates'],
  },
  {
    category: 'Languages & Scripting',
    icon: 'Terminal',
    color: 'blue',
    items: ['Python', 'Bash', 'Shell Scripting', 'YAML', 'JSON', 'Automation Scripts'],
  },
]

export const experience = [
  {
    company: 'KVON Tech',
    role: 'DevOps Trainee',
    period: 'Jan 2026 – Present',
    location: 'Jaipur, India',
    type: 'Full-time Trainee',
    highlights: [
      'Engineered production-grade CI/CD workflows using Docker, Kubernetes, Jenkins, and GitHub Actions in mentor-led industry scenarios.',
      'Automated infrastructure provisioning and configuration management using Terraform and Ansible in controlled lab environments.',
      'Implemented GitOps delivery pipelines with ArgoCD, managing deployments through declarative, version-controlled configurations.',
      'Deployed and configured observability stacks (Prometheus, Grafana) for real-time system performance monitoring and alerting.',
      'Maintained end-to-end DevOps workflows improving deployment reliability, automation efficiency, and system observability.',
    ],
    stack: ['Kubernetes', 'Docker', 'Jenkins', 'ArgoCD', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
  },
]

export const projects = [
  {
    name: 'Insta',
    subtitle: 'DevSecOps Microservices Platform',
    description: 'A production-grade Kubernetes microservices platform with hybrid autoscaling, full DevSecOps pipeline, and enterprise-level observability stack.',
    longDescription: 'Built a complete cloud-native microservices architecture running 4 services on Kubernetes with rolling deployments, liveness/readiness health probes, and declarative manifests. The autoscaling system combines Kubernetes HPA with KEDA event-driven scaling powered by Prometheus RPS metrics — scaling pods from 2 to 10 under real load. Security scanning runs at every pipeline stage before any artifact ships.',
    github: 'https://github.com/dvanhu',
    stack: ['Kubernetes', 'Docker', 'Jenkins', 'Prometheus', 'Grafana', 'KEDA', 'SonarQube', 'Trivy', 'OWASP', 'Alertmanager'],
    highlights: [
      '4-service microservices on K8s with rolling deployments',
      'HPA + KEDA hybrid autoscaling (2→10 pods)',
      'Full DevSecOps: SAST + SCA + container scanning',
      'Real-time observability with Prometheus + Grafana',
    ],
    architecture: ['Microservices', 'Autoscaling', 'DevSecOps', 'Observability'],
    color: 'blue',
  },
  {
    name: 'Wanderlust',
    subtitle: 'Mega DevSecOps + GitOps Pipeline',
    description: 'Complete MERN-stack DevSecOps pipeline with GitOps-based continuous delivery via ArgoCD, enforced quality gates, and full observability.',
    longDescription: 'Designed a comprehensive CI/CD pipeline for a MERN application integrating multi-layer security scanning with enforced quality gates. The pipeline stops bad code at the source — SonarQube for static analysis, OWASP for dependency vulnerabilities, and Trivy for both filesystem and container scanning. ArgoCD handles GitOps delivery with auto-sync and drift reconciliation maintaining declarative cluster state.',
    github: 'https://github.com/dvanhu',
    stack: ['Jenkins', 'Docker', 'Kubernetes', 'ArgoCD', 'Prometheus', 'Grafana', 'SonarQube', 'OWASP', 'Trivy', 'MongoDB', 'React'],
    highlights: [
      'Complete MERN containerization on local K8s cluster',
      'Quality gates: SonarQube + OWASP + Trivy enforced',
      'GitOps CD with ArgoCD auto-sync + drift reconciliation',
      'Clear CI/CD separation of concerns',
    ],
    architecture: ['GitOps', 'MERN Stack', 'Quality Gates', 'Drift Reconciliation'],
    color: 'cyan',
  },
  {
    name: 'GitOps Platform',
    subtitle: 'Multi-Environment Deployment Platform',
    description: 'Dual-repository GitOps architecture enabling environment-specific Kubernetes deployments across dev, staging, and production with automated image propagation.',
    longDescription: 'Architected a clean dual-repo GitOps system separating application code (CI triggers) from infrastructure state (CD manifests). GitHub Actions handles build, test, and image publishing. ArgoCD + Kustomize manages environment-specific overlays for dev, staging, and prod — each with independent configs, resource limits, and rollback capability via Git history. Commit SHA tagging automates version propagation without manual intervention.',
    github: 'https://github.com/dvanhu',
    stack: ['GitHub Actions', 'Kubernetes', 'Kustomize', 'ArgoCD', 'Docker', 'Git'],
    highlights: [
      'Dual-repo architecture: clean CI/CD separation',
      'Multi-env K8s: dev / staging / prod via Kustomize overlays',
      'Commit SHA image tagging for zero-touch deployments',
      'Full rollback capability via Git history',
    ],
    architecture: ['Dual-Repo', 'Multi-Environment', 'Kustomize', 'Auto-Propagation'],
    color: 'purple',
  },
]

export const certifications = [
  {
    title: 'Google Cloud Career Launchpad',
    subtitle: 'Cloud Engineer Track — Cloud Computing Foundations',
    issuer: 'Google Cloud',
    icon: 'G',
    color: 'blue',
    year: '2024',
  },
  {
    title: 'AWS Cloud Quest',
    subtitle: 'Cloud Practitioner + Generative AI Practitioner',
    issuer: 'Amazon Web Services',
    icon: 'AWS',
    color: 'cyan',
    year: '2024',
  },
  {
    title: 'Google IT Support Professional',
    subtitle: 'IT Support Certificate',
    issuer: 'Google (Coursera)',
    icon: 'G',
    color: 'purple',
    year: '2023',
  },
  {
    title: 'Google Project Management',
    subtitle: 'Project Management Professional Certificate',
    issuer: 'Google (Coursera)',
    icon: 'G',
    color: 'blue',
    year: '2023',
  },
]

export const education = {
  university: 'JECRC University',
  degree: 'Bachelor of Technology in Computer Science & Engineering',
  period: '2022 – 2026',
  cgpa: '7.8 / 10',
  location: 'Jaipur, India',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
