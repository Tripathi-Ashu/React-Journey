export const sidebarMenu = [

    { type: "link", label: "Dashboard", icon: "bi-house-door", path: "/dashboard" },
    { type: "link", label: "Finance", icon: "bi-wallet2", path: "/finance" },
    { type: "link", label: "Network", icon: "bi-grid", path: "/network" },
    { type: "link", label: "Social", icon: "bi-bullseye", path: "/social" },
    { type: "link", label: "Inventory", icon: "bi-box", path: "/inventory" },
  
    { type: "heading", label: "Pages" },
  
    {
      type: "submenu",
      key: "profile",
      label: "Profile",
      icon: "bi-person-circle",
      children: [
        { label: "Professional", icon: "bi-briefcase", path: "/profile/professional" },
        { label: "Social", icon: "bi-people", path: "/profile/social" },
        { label: "Analytical", icon: "bi-bar-chart", path: "/profile/analytical" },
      ],
    },
  
    {
      type: "submenu",
      key: "company",
      label: "Company",
      icon: "bi-building",
      children: [
        { label: "Company Profile", icon: "bi-building-fill", path: "/company/profile" },
        { label: "User Rules", icon: "bi-file-earmark-text", path: "/company/user-rules" },
        { label: "Career", icon: "bi-briefcase-fill", path: "/company/career" },
        { label: "Help Center", icon: "bi-question-circle-fill", path: "/company/help-center" },
        { label: "Contact Us", icon: "bi-telephone-fill", path: "/company/contact-us" },
      ],
    },
  
    {
      type: "submenu",
      key: "forum",
      label: "Forum",
      icon: "bi-question-circle",
      children: [
        { label: "Forum", icon: "bi-chat-dots", path: "/forum" },
        { label: "Forum Details", icon: "bi-chat-square-text", path: "/forum/details" },
      ],
    },
  
    {
      type: "submenu",
      key: "supportive",
      label: "Supportive Pages",
      icon: "bi-window-stack",
      children: [
        { label: "Sign In", icon: "bi-box-arrow-in-right", path: "/supportive/sign-in" },
        { label: "Sign Up", icon: "bi-person-plus", path: "/supportive/sign-up" },
        { label: "Forget Password", icon: "bi-key", path: "/supportive/forget-password" },
        { label: "Change Password", icon: "bi-shield-lock", path: "/supportive/change-password" },
        { label: "Onboarding", icon: "bi-flag", path: "/supportive/onboarding" },
        { label: "404 Error", icon: "bi-exclamation-triangle", path: "/supportive/404-error" },
        { label: "Error", icon: "bi-x-octagon", path: "/supportive/error" },
      ],
    },
  
    { type: "link", label: "Personalize", icon: "bi-palette", path: "/personalize" },
    { type: "link", label: "Components", icon: "bi-cpu", path: "/components" },
    { type: "link", label: "Documentation", icon: "bi-journal-code", path: "/documentation" },
  
  ];