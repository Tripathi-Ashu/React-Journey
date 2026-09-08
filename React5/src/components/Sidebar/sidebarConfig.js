export const sidebarMenu = [

  { type: "heading", label: "Application" },

  { type: "link", label: "Dashboard", path: "/dashboard", icon: "bi-house-door" },
  { type: "link", label: "Finance", path: "/finance", icon: "bi-wallet2" },
  { type: "link", label: "Network", path: "/network", icon: "bi-grid" },
  { type: "link", label: "Social", path: "/social", icon: "bi-bullseye" },
  { type: "link", label: "Inventory", path: "/inventory", icon: "bi-box" },

  { type: "heading", label: "Pages" },

  {
    type: "submenu",
    key: "profile",
    label: "Profile",
    icon: "bi-person-circle",
    children: [
      { label: "Professional", path: "/profile/professional", icon: "bi-person-badge" },
      { label: "Social", path: "/profile/social", icon: "bi-people" },
      { label: "Analytical", path: "/profile/analytical", icon: "bi-bar-chart" },
    ],
  },

  {
    type: "submenu",
    key: "company",
    label: "Company",
    icon: "bi-building",
    children: [
      { label: "About", path: "/company/about", icon: "bi-info-circle" },
      { label: "Careers", path: "/company/careers", icon: "bi-briefcase" },
      { label: "Contact", path: "/company/contact", icon: "bi-envelope" },
    ],
  },

  { type: "link", label: "Forum", path: "/forum", icon: "bi-question-circle" },

  {
    type: "submenu",
    key: "supportive",
    label: "Supportive Pages",
    icon: "bi-window-stack",
    children: [
      { label: "Error 404", path: "/supportive/error", icon: "bi-exclamation-triangle" },
      { label: "Maintenance", path: "/supportive/maintenance", icon: "bi-tools" },
    ],
  },

  { type: "link", label: "Personalize", path: "/personalize", icon: "bi-palette" },
  { type: "link", label: "Components", path: "/components", icon: "bi-cpu" },
  { type: "link", label: "Documentation", path: "/documentation", icon: "bi-journal-code" },

  { type: "heading", label: "Applications" },

  { type: "link", label: "Email", path: "/email", icon: "bi-envelope", badge: "9+" },
  { type: "link", label: "Explorer", path: "/explorer", icon: "bi-folder" },
  { type: "link", label: "Calendar", path: "/calendar", icon: "bi-calendar3" },

];