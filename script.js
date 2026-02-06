// Base de dados completa de produtos
const products = [
    // Produtos existentes originais
    { 
        name: "Máscara Cirúrgica 3 Camadas", 
        category: "EPI", 
        price: "35", 
        description: "Máscara cirúrgica descartável com 3 camadas de proteção",
        image: "docs/imgs/mascara-cirurgica-3-camadas.jpg"
    },
    { 
        name: "Máscara KN95 com Filtro", 
        category: "EPI", 
        price: "500", 
        description: "Máscara respiratória KN95 com filtro para proteção superior",
        image: "docs/imgs/mascara-kn95-filtro.jpg"
    },
    { 
        name: "Capacete de Segurança", 
        category: "Proteção", 
        price: "6500", 
        description: "Capacete de proteção básico para construção civil",
        image: "docs/imgs/capacete-seguranca.webp"
    },
    { 
        name: "Máscara KN95 sem filtro", 
        category: "EPI", 
        price: "450", 
        description: "Máscara KN95 sem filtro para proteção básica",
        image: "docs/imgs/mascara-kn95-sem-filtro.jpg"
    },
    { 
        name: "Máscara M3", 
        category: "EPI", 
        price: "3200", 
        description: "Máscara modelo M3 para proteção respiratória",
        image: "docs/imgs/mascara-m3.jpg"
    },
    { 
        name: "Máscara FFP1 com filtro", 
        category: "EPI", 
        price: "2950", 
        description: "Máscara FFP1 com filtro para ambientes industriais",
        image: "docs/imgs/mascara-ffp1-filtro.webp"
    },
    { 
        name: "Máscara FFP2 sem filtro", 
        category: "EPI", 
        price: "500", 
        description: "Máscara FFP2 sem filtro para proteção média",
        image: "docs/imgs/mascara-ffp2-sem-filtro.jpg"
    },
    { 
        name: "Máscara FFP3 com filtro", 
        category: "EPI", 
        price: "3050", 
        description: "Máscara FFP3 com filtro para alta proteção",
        image: "docs/imgs/mascara-ffp3-filtro.jpg"
    },
    { 
        name: "Máscara facial inteira respiratória", 
        category: "EPI", 
        price: "85000", 
        description: "Máscara facial completa para produção industrial",
        image: "docs/imgs/mascara-facial-completa.avif"
    },
    { 
        name: "Capacete com protector auditivo", 
        category: "Proteção", 
        price: "17000", 
        description: "Capacete com proteção auditiva integrada",
        image: "docs/imgs/capacete-protector-auditivo.jpg"
    },
    { 
        name: "Capacete com protetor (H1)", 
        category: "Proteção", 
        price: "25000", 
        description: "Capacete modelo H1 com proteção facial",
        image: "docs/imgs/capacete-h1.jpg"
    },
    { 
        name: "Capacete com protetor (H2)", 
        category: "Proteção", 
        price: "62000", 
        description: "Capacete modelo H2 com proteção superior",
        image: "docs/imgs/capacete-h2.jpg"
    },
    { 
        name: "Óculos de proteção Incolor B1", 
        category: "Proteção", 
        price: "2500", 
        description: "Óculos de proteção incolor modelo B1",
        image: "docs/imgs/oculos-b1.webp"
    },
    { 
        name: "Óculos de proteção Incolor B2", 
        category: "Proteção", 
        price: "2900", 
        description: "Óculos de proteção incolor modelo B2",
        image: "docs/imgs/oculos-b2.webp"
    },
    { 
        name: "Óculos de proteção para uso sobreposto", 
        category: "Proteção", 
        price: "3000", 
        description: "Óculos de proteção para uso sobre óculos de grau",
        image: "docs/imgs/oculos-sobreposto.webp"
    },
    { 
        name: "Protector Auditivo C1", 
        category: "Proteção", 
        price: "9000", 
        description: "Protetor auditivo modelo C1 para ruído moderado",
        image: "docs/imgs/protector-auditivo-c1.jpg"
    },
    { 
        name: "Protector Auditivo C2", 
        category: "Proteção", 
        price: "12000", 
        description: "Protetor auditivo modelo C2 para ruído intenso",
        image: "docs/imgs/protector-auditivo-c2.jpg"
    },
    { 
        name: "Protector Auditivo C3", 
        category: "Proteção", 
        price: "10000", 
        description: "Protetor auditivo modelo C3 para diferentes ambientes",
        image: "docs/imgs/protector-auditivo-c3.jpg"
    },
    { 
        name: "Luva de vaqueta MD Petroleiro", 
        category: "EPI", 
        price: "3500", 
        description: "Luvas de vaqueta para petroleiros e indústria pesada",
        image: "docs/imgs/luva-petroleiro.png"
    },
    { 
        name: "Luva de electricista", 
        category: "EPI", 
        price: "2000", 
        description: "Luvas isolantes para electricistas e trabalho elétrico",
        image: "docs/imgs/luva-electricista.webp"
    },
    { 
        name: "Reagente A Nach Tauber", 
        category: "Laboratório", 
        price: "87500", 
        description: "Reagente A para deteção de ácido ascórbico em laboratório",
        image: "docs/imgs/reagente-tauber.jpeg"
    },
    { 
        name: "Reagente B Nach Tauber", 
        category: "Laboratório", 
        price: "87500", 
        description: "Reagente B para análise laboratorial completa",
        image: "docs/imgs/reagente-tauber.jpeg"
    },
    { 
        name: "10 Láminas de Pastilhas para determinação de cloro na água", 
        category: "Laboratório", 
        price: "71000", 
        description: "Pastilhas para análise de cloro em água em laboratório",
        image: "docs/imgs/pastilhas-cloro.jpg"
    },
    
    // NOVOS PRODUTOS DE LABORATÓRIO
    { 
        name: "Pipeta Graduada 10ml", 
        category: "Laboratório", 
        price: "15000", 
        description: "Pipeta de vidro graduada para medição precisa de líquidos 10ml",
        image: "docs/imgs/pipeta-graduada.jpg"
    },
    { 
        name: "Bureta 50ml Classe A", 
        category: "Laboratório", 
        price: "45000", 
        description: "Bureta de vidro para titulações precisas, 50ml",
        image: "docs/imgs/bureta.jpg"
    },
    { 
        name: "Balão Volumétrico 250ml", 
        category: "Laboratório", 
        price: "28000", 
        description: "Balão volumétrico de vidro borossilicato, 250ml",
        image: "docs/imgs/balao-volumetrico.jpg"
    },
    { 
        name: "Proveta Graduada 100ml", 
        category: "Laboratório", 
        price: "22000", 
        description: "Proveta de vidro para medição de volumes, 100ml",
        image: "docs/imgs/proveta.jpg"
    },
    { 
        name: "Balança Analítica Digital 0.001g", 
        category: "Equipamentos", 
        price: "950000", 
        description: "Balança analítica digital com precisão de 0.001g, capacidade 200g",
        image: "docs/imgs/balanca-analitica.jpg"
    },
    { 
        name: "Balança Semi-Analítica 0.01g", 
        category: "Equipamentos", 
        price: "450000", 
        description: "Balança semi-analítica digital, precisão 0.01g, capacidade 1kg",
        image: "docs/imgs/balanca-semi.jpg"
    },
    { 
        name: "Microscópio Óptico Binocular", 
        category: "Equipamentos", 
        price: "1200000", 
        description: "Microscópio óptico binocular com aumento 40x-1000x",
        image: "docs/imgs/microscopio.jpg"
    },
    { 
        name: "Centrífuga Laboratorial", 
        category: "Equipamentos", 
        price: "1800000", 
        description: "Centrífuga para tubos de 15ml, velocidade até 4000rpm",
        image: "docs/imgs/centrifuga.jpg"
    },
    { 
        name: "pHmetro Digital Portátil", 
        category: "Equipamentos", 
        price: "320000", 
        description: "Medidor de pH digital portátil com eletrodo de reposição",
        image: "docs/imgs/phmetro.jpg"
    },
    { 
        name: "Estufa de Secagem 80L", 
        category: "Equipamentos", 
        price: "850000", 
        description: "Estufa de secagem e esterilização, capacidade 80 litros",
        image: "docs/imgs/estufa.jpg"
    },
    { 
        name: "Banho Maria Digital", 
        category: "Equipamentos", 
        price: "680000", 
        description: "Banho Maria digital para controle de temperatura até 100°C",
        image: "docs/imgs/banho-maria.jpg"
    },
    { 
        name: "Agitador Magnético com Aquecimento", 
        category: "Equipamentos", 
        price: "420000", 
        description: "Agitador magnético com placa de aquecimento, 1500rpm",
        image: "docs/imgs/agitador.jpg"
    },
    
    // PRODUTOS DE HIGIENE E SEGURANÇA
    { 
        name: "Detergente Industrial 5L", 
        category: "Higiene", 
        price: "8500", 
        description: "Detergente concentrado para limpeza industrial, embalagem 5 litros",
        image: "docs/imgs/detergente-industrial.jpg"
    },
    { 
        name: "Sabonete Líquido Antibacteriano 5L", 
        category: "Higiene", 
        price: "12000", 
        description: "Sabonete líquido antibacteriano para uso industrial, 5 litros",
        image: "docs/imgs/sabonete-industrial.jpg"
    },
    { 
        name: "Álcool Gel 70% 5L", 
        category: "Higiene", 
        price: "15000", 
        description: "Álcool gel 70% para desinfecção das mãos, embalagem 5 litros",
        image: "docs/imgs/alcool-gel.jpg"
    },
    { 
        name: "Desinfetante Hospitalar 5L", 
        category: "Higiene", 
        price: "18000", 
        description: "Desinfetante de superfícies para uso hospitalar e industrial",
        image: "docs/imgs/desinfetante.jpg"
    },
    { 
        name: "Vassoura Industrial com Cabo", 
        category: "Higiene", 
        price: "7500", 
        description: "Vassoura industrial resistente para limpeza de grandes áreas",
        image: "docs/imgs/vassoura-industrial.jpg"
    },
    { 
        name: "Rodo Industrial de Borracha", 
        category: "Higiene", 
        price: "9000", 
        description: "Rodo industrial de borracha para limpeza de pisos",
        image: "docs/imgs/rodo-industrial.jpg"
    },
    { 
        name: "Mopa Industrial com Balde", 
        category: "Higiene", 
        price: "25000", 
        description: "Kit completo de limpeza com mopa e balde espremedor",
        image: "docs/imgs/mopa-industrial.jpg"
    },
    
    // EPIs ADICIONAIS
    { 
        name: "Macacão Impermeável", 
        category: "EPI", 
        price: "35000", 
        description: "Macacão impermeável para trabalho em ambientes úmidos",
        image: "docs/imgs/macacao.jpg"
    },
    { 
        name: "Bota de Segurança com Biqueira de Aço", 
        category: "EPI", 
        price: "42000", 
        description: "Bota de segurança com biqueira de aço e sola anti-derrapante",
        image: "docs/imgs/bota-seguranca.jpg"
    },
    { 
        name: "Cinto de Segurança para Trabalho em Altura", 
        category: "EPI", 
        price: "85000", 
        description: "Cinto de segurança completo para trabalho em altura",
        image: "docs/imgs/cinto-altura.jpg"
    },
    { 
        name: "Respirador Semi-Facial", 
        category: "EPI", 
        price: "38000", 
        description: "Respirador semi-facial com filtros P100",
        image: "docs/imgs/respirador.jpg"
    },
    
    // CONSUMÍVEIS DE LABORATÓRIO
    { 
        name: "Luvas de Látex Descartáveis (100un)", 
        category: "Consumíveis", 
        price: "12000", 
        description: "Caixa com 100 luvas de látex descartáveis para laboratório",
        image: "docs/imgs/luvas-latex.jpg"
    },
    { 
        name: "Tubos de Ensaio 16x150mm (50un)", 
        category: "Consumíveis", 
        price: "15000", 
        description: "Conjunto de 50 tubos de ensaio de vidro",
        image: "docs/imgs/tubos-ensaio.jpg"
    },
    { 
        name: "Placas de Petri (20un)", 
        category: "Consumíveis", 
        price: "18000", 
        description: "Conjunto de 20 placas de Petri de vidro",
        image: "docs/imgs/placas-petri.jpg"
    },
    { 
        name: "Pipetas Pasteur Descartáveis (500un)", 
        category: "Consumíveis", 
        price: "25000", 
        description: "Pacote com 500 pipetas pasteur descartáveis",
        image: "docs/imgs/pipetas-pasteur.jpg"
    },
    { 
        name: "Papel Indicador de pH (100 tiras)", 
        category: "Consumíveis", 
        price: "9500", 
        description: "Caixa com 100 tiras de papel indicador de pH universal",
        image: "docs/imgs/paper-ph.jpg"
    },
    
    // KITS ESPECIAIS
    { 
        name: "Kit Básico de Primeiros Socorros", 
        category: "EPI", 
        price: "65000", 
        description: "Kit completo de primeiros socorros para empresa",
        image: "docs/imgs/kit-primeiros-socorros.jpg"
    },
    { 
        name: "Kit de Higiene para 50 Funcionários", 
        category: "Higiene", 
        price: "180000", 
        description: "Kit completo de higiene para 50 funcionários por 1 mês",
        image: "docs/imgs/kit-higiene.jpg"
    },
    { 
        name: "Kit Básico de Laboratório Escolar", 
        category: "Laboratório", 
        price: "950000", 
        description: "Kit completo para laboratório escolar de ciências",
        image: "docs/imgs/kit-laboratorio.jpg"
    }
];

// Função para formatar preço
function formatPrice(price) {
    return parseInt(price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Função para determinar a classe da categoria
function getCategoryClass(category) {
    switch(category) {
        case 'EPI':
            return 'product-category-epi';
        case 'Proteção':
            return 'product-category-protecao';
        case 'Laboratório':
            return 'product-category-lab';
        case 'Higiene':
            return 'product-category-higiene';
        case 'Equipamentos':
            return 'product-category-equipamentos';
        case 'Consumíveis':
            return 'product-category-consumiveis';
        default:
            return 'product-category-epi';
    }
}

// Função para renderizar o grid de produtos
function renderProductsGrid(filteredProducts = products) {
    const gridContainer = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const productCount = document.getElementById('productCount');
    
    gridContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        noResults.style.display = 'block';
        productCount.textContent = '0';
        return;
    }
    
    noResults.style.display = 'none';
    productCount.textContent = filteredProducts.length;
    
    filteredProducts.forEach((product) => {
        const categoryClass = getCategoryClass(product.category);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-content">
                <span class="product-category ${categoryClass}">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)} <span>Kz</span></div>
                <div class="product-actions">
                    <a href="mailto:vendas@praico-comercial.com?subject=Consulta sobre ${encodeURIComponent(product.name)}&body=Olá! Gostaria de mais informações sobre ${encodeURIComponent(product.name)} - Preço: ${formatPrice(product.price)} Kz" 
                       class="product-btn product-btn-primary">
                        <i class="fas fa-envelope"></i> E-mail
                    </a>
                    <a href="https://wa.me/244947465790?text=Olá!%20Gostaria%20de%20informações%20sobre%20${encodeURIComponent(product.name)}%20-%20Preço:%20${formatPrice(product.price)}%20Kz" 
                       class="product-btn product-btn-secondary"
                       target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        `;
        
        gridContainer.appendChild(productCard);
    });
}

// Função para renderizar a tabela
function renderProductsTable(filteredProducts = products) {
    const tableBody = document.getElementById('productsTableBody');
    
    tableBody.innerHTML = '';
    
    filteredProducts.forEach((product) => {
        const categoryClass = getCategoryClass(product.category);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <strong>${product.name}</strong>
                <p style="color: var(--gray); font-size: 14px; margin-top: 5px;">${product.description}</p>
            </td>
            <td>
                <span class="product-category ${categoryClass}">${product.category}</span>
            </td>
            <td>
                <div style="color: var(--primary); font-weight: 700; font-size: 18px;">${formatPrice(product.price)} <span style="font-size: 14px; font-weight: 500; color: var(--gray);">Kz</span></div>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Função principal para aplicar filtros
function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceMin = document.getElementById('priceMin').value;
    const priceMax = document.getElementById('priceMax').value;
    const sortFilter = document.getElementById('sortFilter').value;
    const searchTerm = document.getElementById('productSearch').value.toLowerCase();
    
    let filtered = [...products];
    
    // Aplicar filtro de categoria
    if (categoryFilter) {
        filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    // Aplicar filtro de preço
    if (priceMin) {
        const minPrice = parseInt(priceMin);
        filtered = filtered.filter(product => parseInt(product.price) >= minPrice);
    }
    
    if (priceMax) {
        const maxPrice = parseInt(priceMax);
        filtered = filtered.filter(product => parseInt(product.price) <= maxPrice);
    }
    
    // Aplicar pesquisa
    if (searchTerm.trim() !== '') {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Aplicar ordenação
    switch(sortFilter) {
        case 'name-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'price-asc':
            filtered.sort((a, b) => parseInt(a.price) - parseInt(b.price));
            break;
        case 'price-desc':
            filtered.sort((a, b) => parseInt(b.price) - parseInt(a.price));
            break;
    }
    
    renderProductsGrid(filtered);
    renderProductsTable(filtered);
}

// Função para limpar filtros
function clearFilters() {
    document.getElementById('categoryFilter').value = '';
    document.getElementById('priceMin').value = '';
    document.getElementById('priceMax').value = '';
    document.getElementById('sortFilter').value = 'name-asc';
    document.getElementById('productSearch').value = '';
    
    renderProductsGrid(products);
    renderProductsTable(products);
}

// Função para exportar CSV
function exportToCSV() {
    let csv = 'Produto,Descrição,Categoria,Preço (Kz)\n';
    
    products.forEach(product => {
        csv += `"${product.name}","${product.description}","${product.category}","${formatPrice(product.price)}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'catalogo-praico-comercial.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Função para imprimir tabela
function printTable() {
    const printWindow = window.open('', '_blank');
    const printContent = `
        <html>
        <head>
            <title>Catálogo PRAICO Comercial</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #333; }
                table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
                th { background-color: #f4f4f4; }
                .category { background: #eee; padding: 3px 8px; border-radius: 3px; font-size: 12px; }
            </style>
        </head>
        <body>
            <h1>Catálogo de Produtos - PRAICO Comercial</h1>
            <p><strong>Data:</strong> ${new Date().toLocaleDateString('pt-AO')}</p>
            <p><strong>Contacto:</strong> +244 947 465 790 | vendas@praico-comercial.com</p>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Preço (Kz)</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(product => `
                        <tr>
                            <td><strong>${product.name}</strong><br><small>${product.description}</small></td>
                            <td><span class="category">${product.category}</span></td>
                            <td>${formatPrice(product.price)} Kz</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <p style="margin-top: 30px; font-size: 12px; color: #666;">
                PRAICO Comercial | NIF: 5002086387 | Luanda, Angola<br>
                www.praico-comercial.com | +244 947 465 790
            </p>
        </body>
        </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar grid inicial
    renderProductsGrid();
    renderProductsTable();
    
    // Configurar eventos dos filtros
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    document.getElementById('priceMin').addEventListener('input', applyFilters);
    document.getElementById('priceMax').addEventListener('input', applyFilters);
    document.getElementById('sortFilter').addEventListener('change', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    // Configurar pesquisa
    const searchInput = document.getElementById('productSearch');
    searchInput.addEventListener('input', applyFilters);
    
    // Configurar botões de exportação
    const exportCSVBtn = document.createElement('button');
    exportCSVBtn.className = 'export-btn';
    exportCSVBtn.id = 'exportCSV';
    exportCSVBtn.innerHTML = '<i class="fas fa-file-csv"></i> Exportar CSV';
    exportCSVBtn.addEventListener('click', exportToCSV);
    
    const printTableBtn = document.createElement('button');
    printTableBtn.className = 'export-btn';
    printTableBtn.id = 'printTable';
    printTableBtn.innerHTML = '<i class="fas fa-print"></i> Imprimir';
    printTableBtn.addEventListener('click', printTable);
    
    // Adicionar botões de exportação ao DOM
    const exportButtonsContainer = document.createElement('div');
    exportButtonsContainer.className = 'export-buttons';
    exportButtonsContainer.appendChild(exportCSVBtn);
    exportButtonsContainer.appendChild(printTableBtn);
    
    // Adicionar antes do grid
    const productsSearchContainer = document.querySelector('.products-search-container');
    productsSearchContainer.appendChild(exportButtonsContainer);
    
    // Configurar botões de visualização
    const viewToggle = document.createElement('div');
    viewToggle.className = 'view-toggle';
    
    const viewGridBtn = document.createElement('button');
    viewGridBtn.className = 'view-btn active';
    viewGridBtn.id = 'viewGridBtn';
    viewGridBtn.innerHTML = '<i class="fas fa-th-large"></i> Grid';
    
    const viewTableBtn = document.createElement('button');
    viewTableBtn.className = 'view-btn';
    viewTableBtn.id = 'viewTableBtn';
    viewTableBtn.innerHTML = '<i class="fas fa-list"></i> Lista';
    
    viewToggle.appendChild(viewGridBtn);
    viewToggle.appendChild(viewTableBtn);
    productsSearchContainer.insertBefore(viewToggle, exportButtonsContainer);
    
    // Função para alternar visualização
    function toggleView(viewType) {
        const gridContainer = document.getElementById('productsGrid');
        const tableContainer = document.getElementById('productsTableContainer');
        
        if (viewType === 'grid') {
            viewGridBtn.classList.add('active');
            viewTableBtn.classList.remove('active');
            gridContainer.style.display = 'grid';
            tableContainer.style.display = 'none';
        } else {
            viewGridBtn.classList.remove('active');
            viewTableBtn.classList.add('active');
            gridContainer.style.display = 'none';
            tableContainer.style.display = 'block';
        }
    }
    
    viewGridBtn.addEventListener('click', () => toggleView('grid'));
    viewTableBtn.addEventListener('click', () => toggleView('table'));
    
    // Atualizar ano no footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            document.body.classList.add('menu-open');
        });
        
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            header.classList.add('scrolled');
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            header.classList.remove('scrolled');
        }
    });
    
    // Adicionar foco automático na pesquisa
    setTimeout(() => {
        searchInput.focus();
    }, 1000);
});