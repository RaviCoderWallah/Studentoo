//Header Sidebar ===============================================================>>>>>>>>>>>>

let isSidebarOpen = false;

const sidebarOverlay = document.getElementById("sidebar-overlay");
const sidebar = document.getElementById("sidebar");
const closeMenuButton = document.getElementById("close-menu");
const openMenuButton = document.getElementById("open-menu");

// 1. UI Update Function (Using clean toggles)
function updateSidebar() {
  sidebarOverlay?.classList.toggle("opacity-100", isSidebarOpen);
  sidebarOverlay?.classList.toggle("visible", isSidebarOpen);
  sidebarOverlay?.classList.toggle("opacity-0", !isSidebarOpen);
  sidebarOverlay?.classList.toggle("invisible", !isSidebarOpen);

  sidebar.classList.toggle("translate-x-0", isSidebarOpen);
  sidebar.classList.toggle("translate-x-full", !isSidebarOpen);
}

// 2. Helper to change state and trigger the UI update
const toggleSidebar = (state) => {
  isSidebarOpen = state;
  updateSidebar();
};

// 3. Event Listeners (Declared ONCE)
sidebarOverlay?.addEventListener("click", () => toggleSidebar(false));
closeMenuButton?.addEventListener("click", () => toggleSidebar(false));
openMenuButton?.addEventListener("click", () => toggleSidebar(true));

updateSidebar();

//Legal Dropdown Pages ==================================================================>>>>>>>>

let isLegalDropdownOpen = false;

const legalDropdownList = document.getElementById("legal-dropdown");
const legalLinksButton = document.getElementById("legal-links");
const dropdownIcon = document.getElementById("dropdown-icon");
const dropdownMenu = document.getElementById("dropdown-menu");

const updateLegalDropdown = () => {
  legalLinksButton?.classList.toggle("text-blue-700", isLegalDropdownOpen);
  legalLinksButton?.classList.toggle("bg-blue-50", isLegalDropdownOpen);

  legalLinksButton?.classList.toggle("text-gray-800", !isLegalDropdownOpen);
  legalLinksButton?.classList.toggle(
    "hover:text-blue-700",
    !isLegalDropdownOpen,
  );

  //Dropdown Icon
  dropdownIcon?.classList.toggle("rotate-180", isLegalDropdownOpen);

  //Dropdown Menu
  dropdownMenu?.classList.toggle("opacity-100", isLegalDropdownOpen);
  dropdownMenu?.classList.toggle("visible", isLegalDropdownOpen);
  dropdownMenu?.classList.toggle("translate-y-0", isLegalDropdownOpen);

  dropdownMenu?.classList.toggle("opacity-0", !isLegalDropdownOpen);
  dropdownMenu?.classList.toggle("invisible", !isLegalDropdownOpen);
  dropdownMenu?.classList.toggle("translate-y-2", !isLegalDropdownOpen);
};

const toggleLegalDropdown = (state) => {
  isLegalDropdownOpen = state;
  updateLegalDropdown();
};

legalDropdownList?.addEventListener("mouseenter", () =>
  toggleLegalDropdown(true),
);
legalDropdownList?.addEventListener("mouseleave", () =>
  toggleLegalDropdown(false),
);
legalLinksButton?.addEventListener("click", () =>
  toggleLegalDropdown(!isLegalDropdownOpen),
);

updateLegalDropdown();
