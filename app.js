// Startups data
const startupsData = [
  {
    nom: "Mistral AI",
    secteur: "IA Générative",
    montant_leve: "1700 M€",
    date_levee: "Sept 2025",
    stage: "Série C",
    linkedin: "linkedin.com/company/mistralai",
    site: "mistral.ai",
    description: "Modèles de langage open source et IA générative"
  },
  {
    nom: "Filigran",
    secteur: "Cybersécurité",
    montant_leve: "50 M€",
    date_levee: "2024-2025",
    stage: "Série Unknown",
    linkedin: "linkedin.com/company/filigran",
    site: "filigran.io",
    description: "Suite open-source de threat intelligence"
  },
  {
    nom: "Cailabs",
    secteur: "Deep Tech",
    montant_leve: "57 M€",
    date_levee: "2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/cailabs",
    site: "cailabs.com",
    description: "Communications optiques et photonique"
  },
  {
    nom: "Alice & Bob",
    secteur: "Informatique Quantique",
    montant_leve: "100 M€",
    date_levee: "Janv 2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/alice-and-bob",
    site: "alice-bob.com",
    description: "Ordinateurs quantiques et technologies"
  },
  {
    nom: "Nabla",
    secteur: "MedTech",
    montant_leve: "60 M€",
    date_levee: "2025",
    stage: "Série C",
    linkedin: "linkedin.com/company/nabla",
    site: "nabla.com",
    description: "Agents IA pour professionnels de santé"
  },
  {
    nom: "Zama",
    secteur: "IA Cryptographie",
    montant_leve: "49 M€",
    date_levee: "Juin 2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/zama",
    site: "zama.ai",
    description: "Homomorphic Encryption pour privacy"
  },
  {
    nom: "Pennylane",
    secteur: "FinTech",
    montant_leve: "60 M€",
    date_levee: "2024-2025",
    stage: "Série C",
    linkedin: "linkedin.com/company/pennylane",
    site: "pennylane.com",
    description: "Plateforme de gestion financière"
  },
  {
    nom: "Descartes Underwriting",
    secteur: "InsurTech",
    montant_leve: "10 M€",
    date_levee: "2024-2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/descartes-underwriting",
    site: "descartes.ai",
    description: "IA pour risques climatiques"
  },
  {
    nom: "Tiime",
    secteur: "SaaS",
    montant_leve: "15 M€",
    date_levee: "2024-2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/tiime",
    site: "tiime.fr",
    description: "Plateforme collaborative"
  },
  {
    nom: "Passbolt",
    secteur: "Cybersécurité",
    montant_leve: "8 M$",
    date_levee: "Janv 2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/passbolt",
    site: "passbolt.com",
    description: "Gestionnaire de mots de passe"
  },
  {
    nom: "Riot",
    secteur: "Web3",
    montant_leve: "30 M$",
    date_levee: "Févr 2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/riot-ai",
    site: "riot.ai",
    description: "Plateforme de sécurité Web3"
  },
  {
    nom: "Brevo",
    secteur: "MarTech",
    montant_leve: "100 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/brevo",
    site: "brevo.com",
    description: "Plateforme marketing automation"
  },
  {
    nom: "Vade Secure",
    secteur: "Cybersécurité",
    montant_leve: "200 M€",
    date_levee: "Historique",
    stage: "Late",
    linkedin: "linkedin.com/company/vade-secure",
    site: "vadesecure.com",
    description: "Filtrage email et sécurité"
  },
  {
    nom: "PoliCloud",
    secteur: "Cloud",
    montant_leve: "7.5 M€",
    date_levee: "Juin 2025",
    stage: "Seed",
    linkedin: "linkedin.com/company/policloud",
    site: "policloud.io",
    description: "Cloud infrastructure"
  },
  {
    nom: "Probabl",
    secteur: "IA",
    montant_leve: "13 M€",
    date_levee: "2024-2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/probabl",
    site: "probabl.ai",
    description: "Industrialisation ML"
  },
  {
    nom: "Thunder Code",
    secteur: "IA",
    montant_leve: "9 M€",
    date_levee: "Juin 2025",
    stage: "Seed",
    linkedin: "linkedin.com/company/thunder-code",
    site: "thundercode.ai",
    description: "Plateforme IA cloud"
  },
  {
    nom: "Aive",
    secteur: "IA",
    montant_leve: "13.7 M€",
    date_levee: "Juin 2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/aive",
    site: "aive.com",
    description: "Plateforme IA analytics"
  },
  {
    nom: "Moments Lab",
    secteur: "Computer Vision",
    montant_leve: "24 M€",
    date_levee: "Juin 2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/moments-lab",
    site: "momentslab.com",
    description: "IA pour analyse vidéo"
  },
  {
    nom: "Arlequin AI",
    secteur: "IA",
    montant_leve: "5 M€",
    date_levee: "Juin 2025",
    stage: "Seed",
    linkedin: "linkedin.com/company/arlequin-ai",
    site: "arlequin.ai",
    description: "Plateforme IA data"
  },
  {
    nom: "One Biosciences",
    secteur: "Biotech",
    montant_leve: "17.4 M€",
    date_levee: "Juillet 2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/one-biosciences",
    site: "onebiosciences.fr",
    description: "TechBio avec IA"
  },
  {
    nom: "Spiko",
    secteur: "FinTech",
    montant_leve: "22 M€",
    date_levee: "Juillet 2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/spiko",
    site: "spiko.io",
    description: "Placement tokenisé"
  },
  {
    nom: "RainPath",
    secteur: "MedTech",
    montant_leve: "2.5 M€",
    date_levee: "Juillet 2025",
    stage: "Seed",
    linkedin: "linkedin.com/company/rainpath",
    site: "rainpath.ai",
    description: "Analyse biopsies"
  },
  {
    nom: "Loft Orbital",
    secteur: "Space Tech",
    montant_leve: "170 M€",
    date_levee: "Janv 2025",
    stage: "Série C",
    linkedin: "linkedin.com/company/loft-orbital",
    site: "loftorbital.com",
    description: "Satellites communications"
  },
  {
    nom: "Agryco",
    secteur: "AgriTech",
    montant_leve: "20 M€",
    date_levee: "2024-2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/agryco",
    site: "agryco.io",
    description: "Plateforme agricole"
  },
  {
    nom: "Flying Whales",
    secteur: "Aerospace",
    montant_leve: "50 M€",
    date_levee: "2024-2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/flying-whales",
    site: "flyingwhales.io",
    description: "Transport cargo"
  },
  {
    nom: "LeHibou",
    secteur: "EdTech",
    montant_leve: "30 M€",
    date_levee: "2024-2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/lehibou-ai",
    site: "lehibou.ai",
    description: "Apprentissage adaptative"
  },
  {
    nom: "Gojob",
    secteur: "HR Tech",
    montant_leve: "50 M€",
    date_levee: "2024-2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/gojob",
    site: "gojob.com",
    description: "Travail flexible"
  },
  {
    nom: "Homa",
    secteur: "Gaming",
    montant_leve: "80 M€",
    date_levee: "2024-2025",
    stage: "Série C",
    linkedin: "linkedin.com/company/homagames",
    site: "homagames.com",
    description: "Studio jeux mobiles"
  },
  {
    nom: "Worldia",
    secteur: "Travel Tech",
    montant_leve: "40 M€",
    date_levee: "2024-2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/worldia",
    site: "worldia.com",
    description: "Plateforme voyage"
  },
  {
    nom: "Zeplug",
    secteur: "Energy",
    montant_leve: "15 M€",
    date_levee: "2024-2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/zeplug",
    site: "zeplug.io",
    description: "Gestion réseau électrique"
  },
  {
    nom: "Leanspace",
    secteur: "Space Tech",
    montant_leve: "20 M€",
    date_levee: "2024-2025",
    stage: "Série B",
    linkedin: "linkedin.com/company/leanspace",
    site: "leanspace.io",
    description: "Opérations spatiales"
  },
  {
    nom: "Qonto",
    secteur: "FinTech",
    montant_leve: "622 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/qonto",
    site: "qonto.com",
    description: "Compte bancaire PME"
  },
  {
    nom: "Alan",
    secteur: "InsurTech",
    montant_leve: "100 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/alan-health",
    site: "alan.com",
    description: "Assurance santé digitale"
  },
  {
    nom: "Malt",
    secteur: "Freelance",
    montant_leve: "50 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/malt",
    site: "malt.fr",
    description: "Plateforme freelance B2B"
  },
  {
    nom: "Pigment",
    secteur: "Analytics",
    montant_leve: "80 M€",
    date_levee: "2024-2025",
    stage: "Série C",
    linkedin: "linkedin.com/company/pigment",
    site: "pigment.com",
    description: "Analytics financière"
  },
  {
    nom: "Spendesk",
    secteur: "FinTech",
    montant_leve: "150 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/spendesk",
    site: "spendesk.com",
    description: "Gestion dépenses"
  },
  {
    nom: "Back Market",
    secteur: "E-commerce",
    montant_leve: "300 M€",
    date_levee: "Historique",
    stage: "Licorne",
    linkedin: "linkedin.com/company/back-market",
    site: "backmarket.com",
    description: "Marketplace reconditionnée"
  },
  {
    nom: "Exotec",
    secteur: "Robotique",
    montant_leve: "100 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/exotec",
    site: "exotec.com",
    description: "Robots manutention"
  },
  {
    nom: "PayFit",
    secteur: "HR Tech",
    montant_leve: "100 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/payfit",
    site: "payfit.com",
    description: "Paie et RH"
  },
  {
    nom: "Vestiaire Collective",
    secteur: "E-commerce",
    montant_leve: "50 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/vestiaire-collective",
    site: "vestiairecollective.com",
    description: "Mode de seconde main"
  },
  {
    nom: "Ledger",
    secteur: "Crypto",
    montant_leve: "100 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/ledger",
    site: "ledger.com",
    description: "Portefeuille crypto"
  },
  {
    nom: "Ankorstore",
    secteur: "B2B E-commerce",
    montant_leve: "100 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/ankorstore",
    site: "ankorstore.com",
    description: "Wholesaling plateforme"
  },
  {
    nom: "Swile",
    secteur: "HR Tech",
    montant_leve: "200 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/swile",
    site: "swile.co",
    description: "Avantages salariés"
  },
  {
    nom: "Verkor",
    secteur: "Deep Tech",
    montant_leve: "200 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/verkor",
    site: "verkor.com",
    description: "Batteries lithium-ion"
  },
  {
    nom: "Manomano",
    secteur: "E-commerce",
    montant_leve: "100 M€",
    date_levee: "Historique",
    stage: "Scaleup",
    linkedin: "linkedin.com/company/manomano",
    site: "manomano.fr",
    description: "Marketplace bricolage"
  },
  {
    nom: "Komodo Tech",
    secteur: "Cybersécurité",
    montant_leve: "10 M€",
    date_levee: "2024-2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/komodo",
    site: "komodo.tech",
    description: "Sécurité API"
  },
  {
    nom: "Chirp",
    secteur: "IoT",
    montant_leve: "10 M€",
    date_levee: "2024-2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/chirp-ai",
    site: "chirp.ai",
    description: "Plateforme IoT"
  },
  {
    nom: "Capsule Corp",
    secteur: "IA Robotique",
    montant_leve: "15 M€",
    date_levee: "2024-2025",
    stage: "Série A",
    linkedin: "linkedin.com/company/capsule-corp",
    site: "capsulecorp.ai",
    description: "Systèmes autonomes"
  }
];

// Helper function to parse amount
function parseAmount(amountStr) {
  const match = amountStr.match(/([\d.]+)\s*M/);
  return match ? parseFloat(match[1]) : 0;
}

// Sort state
let sortState = {
  column: null,
  direction: 'asc'
};

// Initialize app
function init() {
  calculateKPIs();
  renderDashboardChart();
  renderTopRaises();
  renderStartupsTable(startupsData);
  populateFilters();
  renderExportTable(startupsData);
  renderAnalyticsCharts();
  renderStats();
  setupEventListeners();
}

// Calculate KPIs
function calculateKPIs() {
  const amounts = startupsData.map(s => parseAmount(s.montant_leve));
  const total = amounts.reduce((a, b) => a + b, 0);
  const average = total / startupsData.length;
  const sectors = [...new Set(startupsData.map(s => s.secteur))];
  
  document.getElementById('kpi-count').textContent = startupsData.length;
  document.getElementById('kpi-total').textContent = `${total.toFixed(0)} M€`;
  document.getElementById('kpi-sectors').textContent = sectors.length;
  document.getElementById('kpi-average').textContent = `${average.toFixed(1)} M€`;
}

// Render dashboard sector chart
function renderDashboardChart() {
  const sectorCounts = {};
  startupsData.forEach(s => {
    sectorCounts[s.secteur] = (sectorCounts[s.secteur] || 0) + 1;
  });
  
  const ctx = document.getElementById('sectorChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(sectorCounts),
      datasets: [{
        data: Object.values(sectorCounts),
        backgroundColor: [
          '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F',
          '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  });
}

// Render top raises
function renderTopRaises() {
  const sorted = [...startupsData]
    .sort((a, b) => parseAmount(b.montant_leve) - parseAmount(a.montant_leve))
    .slice(0, 5);
  
  const html = sorted.map(s => `
    <div class="raise-item">
      <div>
        <div class="name">${s.nom}</div>
        <div class="sector">${s.secteur}</div>
      </div>
      <div class="amount">${s.montant_leve}</div>
    </div>
  `).join('');
  
  document.getElementById('topRaises').innerHTML = html;
}

// Render startups table
function renderStartupsTable(data) {
  const tbody = document.getElementById('startupsTableBody');
  tbody.innerHTML = data.map((s, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${s.nom}</strong></td>
      <td><span class="badge">${s.secteur}</span></td>
      <td><strong>${s.montant_leve}</strong></td>
      <td>${s.stage}</td>
      <td><a href="https://${s.linkedin}" target="_blank">LinkedIn</a></td>
      <td><a href="https://${s.site}" target="_blank">${s.site}</a></td>
      <td><button class="btn btn-sm btn-secondary" onclick='copyStartupProfile(${JSON.stringify(s)})'>📋 Copier</button></td>
    </tr>
  `).join('');
}

// Populate filters
function populateFilters() {
  const sectors = [...new Set(startupsData.map(s => s.secteur))].sort();
  const stages = [...new Set(startupsData.map(s => s.stage))].sort();
  
  const sectorSelects = ['filterSector', 'exportFilterSector'];
  sectorSelects.forEach(id => {
    const select = document.getElementById(id);
    sectors.forEach(sector => {
      const option = document.createElement('option');
      option.value = sector;
      option.textContent = sector;
      select.appendChild(option);
    });
  });
  
  const stageSelect = document.getElementById('exportFilterStage');
  stages.forEach(stage => {
    const option = document.createElement('option');
    option.value = stage;
    option.textContent = stage;
    stageSelect.appendChild(option);
  });
}

// Setup event listeners
function setupEventListeners() {
  // Tab navigation
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
  
  // Search filter
  document.getElementById('searchName').addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    const sector = document.getElementById('filterSector').value;
    filterStartups(search, sector);
  });
  
  document.getElementById('filterSector').addEventListener('change', (e) => {
    const search = document.getElementById('searchName').value.toLowerCase();
    const sector = e.target.value;
    filterStartups(search, sector);
  });
  
  // Export filters
  ['exportFilterSector', 'exportFilterStage', 'exportMinAmount', 'exportMaxAmount'].forEach(id => {
    document.getElementById(id).addEventListener('change', filterExportTable);
    document.getElementById(id).addEventListener('input', filterExportTable);
  });
  
  // Table sorting
  document.querySelectorAll('#startupsTable th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const column = th.dataset.sort;
      sortTable(column);
    });
  });
}

// Filter startups
function filterStartups(search, sector) {
  let filtered = startupsData;
  
  if (search) {
    filtered = filtered.filter(s => s.nom.toLowerCase().includes(search));
  }
  
  if (sector) {
    filtered = filtered.filter(s => s.secteur === sector);
  }
  
  renderStartupsTable(filtered);
}

// Sort table
function sortTable(column) {
  if (sortState.column === column) {
    sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
  } else {
    sortState.column = column;
    sortState.direction = 'asc';
  }
  
  const sorted = [...startupsData].sort((a, b) => {
    let aVal, bVal;
    
    switch(column) {
      case 'nom':
        aVal = a.nom;
        bVal = b.nom;
        break;
      case 'secteur':
        aVal = a.secteur;
        bVal = b.secteur;
        break;
      case 'montant':
        aVal = parseAmount(a.montant_leve);
        bVal = parseAmount(b.montant_leve);
        break;
      case 'stage':
        aVal = a.stage;
        bVal = b.stage;
        break;
      default:
        return 0;
    }
    
    if (typeof aVal === 'string') {
      return sortState.direction === 'asc' ? 
        aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    } else {
      return sortState.direction === 'asc' ? aVal - bVal : bVal - aVal;
    }
  });
  
  renderStartupsTable(sorted);
}

// Copy startup profile
function copyStartupProfile(startup) {
  const text = `
Startup: ${startup.nom}
Secteur: ${startup.secteur}
Montant levé: ${startup.montant_leve}
Stage: ${startup.stage}
LinkedIn: https://${startup.linkedin}
Site: https://${startup.site}
Description: ${startup.description}
  `.trim();
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('Profil copié !');
  });
}

// Copy template
function copyTemplate(templateId) {
  const text = document.getElementById(templateId).value;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Template copié !');
  });
}

// Show toast
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Render analytics charts
function renderAnalyticsCharts() {
  // Pie chart - sectors
  const sectorCounts = {};
  startupsData.forEach(s => {
    sectorCounts[s.secteur] = (sectorCounts[s.secteur] || 0) + 1;
  });
  
  const pieCtx = document.getElementById('pieChart').getContext('2d');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: Object.keys(sectorCounts),
      datasets: [{
        data: Object.values(sectorCounts),
        backgroundColor: [
          '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F',
          '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  });
  
  // Bar chart - stages
  const stageTotals = {};
  startupsData.forEach(s => {
    const amount = parseAmount(s.montant_leve);
    stageTotals[s.stage] = (stageTotals[s.stage] || 0) + amount;
  });
  
  const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: Object.keys(stageTotals),
      datasets: [{
        label: 'Montant total (M€)',
        data: Object.values(stageTotals),
        backgroundColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Horizontal bar - top 15
  const top15 = [...startupsData]
    .sort((a, b) => parseAmount(b.montant_leve) - parseAmount(a.montant_leve))
    .slice(0, 15);
  
  const hBarCtx = document.getElementById('horizontalBarChart').getContext('2d');
  new Chart(hBarCtx, {
    type: 'bar',
    data: {
      labels: top15.map(s => s.nom),
      datasets: [{
        label: 'Montant levé (M€)',
        data: top15.map(s => parseAmount(s.montant_leve)),
        backgroundColor: [
          '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F',
          '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'
        ]
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
  });
}

// Render stats
function renderStats() {
  const amounts = startupsData.map(s => parseAmount(s.montant_leve));
  const total = amounts.reduce((a, b) => a + b, 0);
  const average = total / startupsData.length;
  
  const sectorCounts = {};
  startupsData.forEach(s => {
    sectorCounts[s.secteur] = (sectorCounts[s.secteur] || 0) + 1;
  });
  const topSector = Object.entries(sectorCounts)
    .sort((a, b) => b[1] - a[1])[0];
  
  const stageCounts = {};
  startupsData.forEach(s => {
    stageCounts[s.stage] = (stageCounts[s.stage] || 0) + 1;
  });
  
  const top5Sectors = Object.entries(sectorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  
  const statsHTML = `
    <div class="stat-card">
      <h3>Montant Total Levé</h3>
      <div class="stat-value">${total.toFixed(0)} M€</div>
    </div>
    <div class="stat-card">
      <h3>Moyenne par Levée</h3>
      <div class="stat-value">${average.toFixed(1)} M€</div>
    </div>
    <div class="stat-card">
      <h3>Secteur Dominant</h3>
      <div class="stat-value">${topSector[0]}</div>
      <p style="margin-top: 8px; color: var(--color-text-secondary);">${topSector[1]} startups</p>
    </div>
    <div class="stat-card">
      <h3>Répartition par Stage</h3>
      <ul>
        ${Object.entries(stageCounts).map(([stage, count]) => `
          <li><span>${stage}</span><span>${count} (${(count/startupsData.length*100).toFixed(0)}%)</span></li>
        `).join('')}
      </ul>
    </div>
    <div class="stat-card">
      <h3>Top 5 Secteurs</h3>
      <ul>
        ${top5Sectors.map(([sector, count]) => `
          <li><span>${sector}</span><span>${count}</span></li>
        `).join('')}
      </ul>
    </div>
  `;
  
  document.getElementById('statsGrid').innerHTML = statsHTML;
}

// Render export table
function renderExportTable(data) {
  const tbody = document.getElementById('exportTableBody');
  tbody.innerHTML = data.map(s => `
    <tr>
      <td><strong>${s.nom}</strong></td>
      <td>${s.secteur}</td>
      <td>${s.montant_leve}</td>
      <td>${s.stage}</td>
      <td><a href="https://${s.linkedin}" target="_blank">${s.linkedin}</a></td>
      <td><a href="https://${s.site}" target="_blank">${s.site}</a></td>
      <td>${s.description}</td>
    </tr>
  `).join('');
}

// Filter export table
function filterExportTable() {
  const sector = document.getElementById('exportFilterSector').value;
  const stage = document.getElementById('exportFilterStage').value;
  const minAmount = parseFloat(document.getElementById('exportMinAmount').value) || 0;
  const maxAmount = parseFloat(document.getElementById('exportMaxAmount').value) || Infinity;
  
  let filtered = startupsData;
  
  if (sector) {
    filtered = filtered.filter(s => s.secteur === sector);
  }
  
  if (stage) {
    filtered = filtered.filter(s => s.stage === stage);
  }
  
  filtered = filtered.filter(s => {
    const amount = parseAmount(s.montant_leve);
    return amount >= minAmount && amount <= maxAmount;
  });
  
  renderExportTable(filtered);
}

// Download CSV
function downloadCSV() {
  const headers = ['Nom', 'Secteur', 'Montant Levé', 'Date', 'Stage', 'LinkedIn', 'Site Web', 'Description'];
  const rows = startupsData.map(s => [
    s.nom,
    s.secteur,
    s.montant_leve,
    s.date_levee,
    s.stage,
    `https://${s.linkedin}`,
    `https://${s.site}`,
    s.description
  ]);
  
  let csv = headers.join(',') + '\n';
  rows.forEach(row => {
    csv += row.map(cell => `"${cell}"`).join(',') + '\n';
  });
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'startups_tech_france.csv';
  link.click();
  
  showToast('CSV téléchargé !');
}

// Copy all data
function copyAllData() {
  const text = startupsData.map(s => 
    `${s.nom}\t${s.secteur}\t${s.montant_leve}\t${s.stage}\thttps://${s.linkedin}\thttps://${s.site}\t${s.description}`
  ).join('\n');
  
  navigator.clipboard.writeText(text).then(() => {
    showToast('Toutes les données copiées !');
  });
}

// Initialize on load
init();