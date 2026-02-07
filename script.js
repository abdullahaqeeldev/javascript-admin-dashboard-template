const sidebarToggleBtns = document.querySelectorAll(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const searchForm = document.querySelector(".search-form");
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-icon");
const menuLinks = document.querySelectorAll(".menu-link");
const updateThemeIcon = () => {
  const isDark = document.body.classList.contains("dark-theme");
  themeIcon.textContent = sidebar.classList.contains("collapsed")
    ? isDark
      ? "light_mode"
      : "dark_mode"
    : "dark_mode";
};
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;
let shouldUseDarkTheme =
  savedTheme === "dark" || (!savedTheme && systemPrefersDark);
document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
updateThemeIcon();
themeToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
});
sidebarToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    updateThemeIcon();
  });
});

searchForm.addEventListener("click", () => {
  if (sidebar.classList.contains("collapsed")) {
    sidebar.classList.remove("collapsed");
    searchForm.querySelector("input").focus();
  }
});
if (window.innerWidth > 768) sidebar.classList.remove("collapsed");


const profileBtn = document.getElementById("profileBtn");
const dropdown = document.getElementById("profileDropdown");

profileBtn.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

function saveProfile() {
  const name = document.getElementById("nameInput").value;
  const post = document.getElementById("postInput").value;

  if (name) document.getElementById("navName").textContent = name;
  if (post) document.getElementById("navPost").textContent = post;

  dropdown.classList.remove("active");
}

document.addEventListener("click", (e) => {
  if (!profileBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// ---------- First Chart: Mixed Line and Bar ----------

var options = {
  series: [
    {
      name: "Website Blog",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Social Media",
      type: "line",
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ],

  chart: {
    type: "line",
    height: 230,
    width: "100%",
    toolbar: { show: false },
    background: "#111",
    fontFamily: "Poppins, sans-serif",
  },

  plotOptions: {
    bar: {
      borderRadius: 6,
      borderRadiusApplication: "end",
      columnWidth: "45%",
    },
  },

  colors: [
    "#FFe100", // 👈 Bars (Website Blog) - bright green
    "#fff", //👈 Line (Social Media) - white
  ],
  fill: {
    opacity: [1, 1],
  },

  stroke: {
    width: [0, 3],
    curve: "smooth",
  },

  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: { colors: ["black"] },

    background: {
      enabled: true,
      borderWidth: 0,
    },
  },

  xaxis: {
    labels: { style: { colors: "#F8F8F8" } },
    axisBorder: { color: "#F8F8F8" },
    axisTicks: { color: "#F8F8F8" },
  },

  yaxis: [
    { labels: { style: { colors: "#F8F8F8" } } },
    { opposite: true, labels: { style: { colors: "#F8F8F8" } } },
  ],

  grid: {
    borderColor: "#2a2a2a",
    strokeDashArray: 4,
  },

  tooltip: { theme: "dark" },

  // ⭐ THIS IS WHERE STATES GO
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "darken",
        value: 0.15,
      },
    },
    active: {
      filter: {
        type: "none",
      },
    },
  },

  legend: { show: false },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// ---------- Second Chart: Radial ----------
var progressOptions = {
  chart: {
    type: "radialBar",
    height: 230,
    background: "#111",
  },
  series: [67],
  colors: ["#FFE100"],
  fill: {
    opacity: [1, 1],
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "60%",
        background: "#111",
      },
      track: {
        background: "#EEEEEE",
        strokeWidth: "100%",
      },
      dataLabels: {
        name: {
          color: "#e0e0e0",
          fontSize: "13px",
          offsetY: -10,
        },
        value: {
          color: "#e0e0e0",
          fontSize: "30px",
          fontWeight: 600,
        },
      },
    },
  },

  stroke: {
    lineCap: "round",
  },

  labels: ["Progress"],
};
var progressChart = new ApexCharts(
  document.querySelector("#progressChart"),
  progressOptions,
);
progressChart.render();

// ---------- Third Chart: Bar with Goals ----------
var options = {
  series: [
    {
      name: "Actual",
      data: [
        {
          x: "2011",
          y: 12,
          goals: [
            {
              name: "Expected",
              value: 14,
              strokeWidth: 2,
              strokeDashArray: 2,
              strokeColor: "#eeeeee",
            },
          ],
        },
        {
          x: "2012",
          y: 44,
          goals: [
            {
              name: "Expected",
              value: 54,
              strokeWidth: 3,
              strokeDashArray: 3,
              strokeColor: "#ffffff",
            },
          ],
        },
        {
          x: "2013",
          y: 54,
          goals: [
            {
              name: "Expected",
              value: 52,
              strokeWidth: 4,
              strokeDashArray: 3,
              strokeColor: "#ffffff",
            },
          ],
        },
        {
          x: "2014",
          y: 66,
          goals: [
            {
              name: "Expected",
              value: 61,
              strokeWidth: 4,
              strokeDashArray: 3,
              strokeColor: "#ffffff",
            },
          ],
        },
        {
          x: "2015",
          y: 81,
          goals: [
            {
              name: "Expected",
              value: 66,
              strokeWidth: 4,
              strokeDashArray: 3,
              strokeColor: "#ffffff",
            },
          ],
        },
        {
          x: "2016",
          y: 67,
          goals: [
            {
              name: "Expected",
              value: 70,
              strokeWidth: 3,
              strokeDashArray: 3,
              strokeColor: "#ffffff",
            },
          ],
        },
      ],
    },
  ],
  chart: {
    height: 230,
    width: "100%",
    type: "bar",
    background: "#111",
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 6,
      distributed: false,
    },
  },
  colors: ["#FFe100"], // Neon green bars
  fill: {
    opacity: [1, 1], // 👈 bars stay fully bright
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["black"], // numbers white
      fontSize: "12px",
      fontWeight: 600,
      fontFamily: "Inter, sans-serif",
    },
    background: { enabled: false }, // no border / no box
    formatter: function (val, opt) {
      const goals =
        opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`;
      }
      return val;
    },
  },
  xaxis: {
    labels: { style: { colors: "#F8F8F8", fontFamily: "Inter, sans-serif" } },
    axisBorder: { color: "#EEEEEE" },
    axisTicks: { color: "#EEEEEE" },
  },
  yaxis: {
    labels: { style: { colors: "#F8F8F8", fontFamily: "Inter, sans-serif" } },
  },
  grid: {
    borderColor: "#9fa6a0",
    row: { colors: ["transparent"], opacity: 0.2 },
  },
  legend: {
    show: false,
  },
  tooltip: { theme: "dark" },
  states: {
    normal: { filter: { type: "none" } },
    hover: { filter: { type: "darker", value: 0.2 } },
    active: { filter: { type: "none" } },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: { height: 300 },
        plotOptions: { bar: { borderRadius: 4 } },
        xaxis: { labels: { rotate: -20 } },
      },
    },
    {
      breakpoint: 480,
      options: {
        chart: { height: 250 },
        plotOptions: { bar: { borderRadius: 3 } },
        dataLabels: { enabled: false },
        xaxis: { labels: { rotate: -45, trim: true } },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#salesChart"), options);
chart.render();

// ---------- Categories Chart: Vertical Bar ----------//

document.addEventListener("DOMContentLoaded", function () {
  var data = [
    { x: "Electronics", y: 32 },
    { x: "Cotto", y: 14 },
    { x: "Other", y: 86 },
  ];

  var options = {
    series: [{ name: "Load", data: data }],
    chart: {
      type: "bar",
      height: 200,
      toolbar: { show: false },
      background: "#111",
    },
    plotOptions: { bar: { columnWidth: "40%", borderRadius: 6 } },
    colors: ["#FFe100"],
    fill: {
      opacity: [1, 1], // 👈 bars stay fully bright
    },

    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -10,
      style: { fontSize: "13px", colors: ["#111"] },
    },
    xaxis: {
      categories: ["1", "2", "3"],
      labels: { show: true, style: { colors: "#9fa6a0" } },
    },
    yaxis: { max: 100 },
    grid: { show: false },
    tooltip: { enabled: false },
    legend: { show: false },
  };

  var chart = new ApexCharts(
    document.querySelector("#categories-chart"),
    options,
  );
  chart.render();
});
// Shipment Time Update

function updateShipmentTime() {
  const now = new Date();

  // Last updated time
  const lastUpdate = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(now);

  // ETA (example: +3 hours)
  const etaTime = new Date(now.getTime() + 3 * 60 * 60 * 1000);
  const eta = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(etaTime);

  document.getElementById("lastUpdate").innerText = lastUpdate;
  document.getElementById("eta").innerText = eta;
}

updateShipmentTime();
setInterval(updateShipmentTime, 60000);
