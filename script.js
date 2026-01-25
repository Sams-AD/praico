
const products = [
    { 
        name: "Máscara Cirúrgica 3 Camadas", 
        category: "EPI", 
        price: "35.00", 
        description: "Máscara cirúrgica descartável com 3 camadas de proteção",
        image: "docs/imgs/mascara-cirurgica-3-camadas.jpg"
    },
    { 
        name: "Máscara KN95 com Filtro", 
        category: "EPI", 
        price: "500.00", 
        description: "Máscara respiratória KN95 com filtro para proteção superior",
        image: "docs/imgs/mascara-kn95-filtro.jpg"
    },
    { 
        name: "Capacete de Segurança", 
        category: "Proteção", 
        price: "6.500.00", 
        description: "Capacete de proteção básico para construção civil",
        image: "docs/imgs/capacete-seguranca.webp"
    },
    { 
        name: "Máscara KN95 sem filtro", 
        category: "EPI", 
        price: "450.00", 
        description: "Máscara KN95 sem filtro para proteção básica",
        image: "docs/imgs/mascara-kn95-sem-filtro.jpg"
    },
    { 
        name: "Máscara M3", 
        category: "EPI", 
        price: "3.200.00", 
        description: "Máscara modelo M3 para proteção respiratória",
        image: "docs/imgs/mascara-m3.jpg"
    },
    { 
        name: "Máscara FFP1 com filtro", 
        category: "EPI", 
        price: "2.950.00", 
        description: "Máscara FFP1 com filtro para ambientes industriais",
        image: "docs/imgs/mascara-ffp1-filtro.webp"
    },
    { 
        name: "Máscara FFP2 sem filtro", 
        category: "EPI", 
        price: "500.00", 
        description: "Máscara FFP2 sem filtro para proteção média",
        image: "docs/imgs/mascara-ffp2-sem-filtro.jpg"
    },
    { 
        name: "Máscara FFP3 com filtro", 
        category: "EPI", 
        price: "3.050.00", 
        description: "Máscara FFP3 com filtro para alta proteção",
        image: "docs/imgs/mascara-ffp3-filtro.jpg"
    },
    { 
        name: "Máscara facial inteira respiratória", 
        category: "EPI", 
        price: "85.000.00", 
        description: "Máscara facial completa para produção industrial",
        image: "docs/imgs/mascara-facial-completa.avif"
    },
    { 
        name: "Capacete com protector auditivo", 
        category: "Proteção", 
        price: "17.000.00", 
        description: "Capacete com proteção auditiva integrada",
        image: "docs/imgs/capacete-protector-auditivo.jpg"
    },
    { 
        name: "Capacete com protetor (H1)", 
        category: "Proteção", 
        price: "25.000.00", 
        description: "Capacete modelo H1 com proteção facial",
        image: "docs/imgs/capacete-h1.jpg"
    },
    { 
        name: "Capacete com protetor (H2)", 
        category: "Proteção", 
        price: "62.000.00", 
        description: "Capacete modelo H2 com proteção superior",
        image: "docs/imgs/capacete-h2.jpg"
    },
    { 
        name: "Óculos de proteção Incolor B1", 
        category: "Proteção", 
        price: "2.500.00", 
        description: "Óculos de proteção incolor modelo B1",
        image: "docs/imgs/oculos-b1.webp"
    },
    { 
        name: "Óculos de proteção Incolor B2", 
        category: "Proteção", 
        price: "2.900.00", 
        description: "Óculos de proteção incolor modelo B2",
        image: "docs/imgs/oculos-b2.webp"
    },
    { 
        name: "Óculos de proteção para uso sobreposto", 
        category: "Proteção", 
        price: "3.000.00", 
        description: "Óculos de proteção para uso sobre óculos de grau",
        image: "docs/imgs/oculos-sobreposto.webp"
    },
    { 
        name: "Protector Auditivo C1", 
        category: "Proteção", 
        price: "9.000.00", 
        description: "Protetor auditivo modelo C1 para ruído moderado",
        image: "docs/imgs/protector-auditivo-c1.jpg"
    },
    { 
        name: "Protector Auditivo C2", 
        category: "Proteção", 
        price: "12.000.00", 
        description: "Protetor auditivo modelo C2 para ruído intenso",
        image: "docs/imgs/protector-auditivo-c2.jpg"
    },
    { 
        name: "Protector Auditivo C3", 
        category: "Proteção", 
        price: "10.000.00", 
        description: "Protetor auditivo modelo C3 para diferentes ambientes",
        image: "docs/imgs/protector-auditivo-c3.jpg"
    },
    { 
        name: "Luva de vaqueta MD Petroleiro", 
        category: "EPI", 
        price: "3.500.00", 
        description: "Luvas de vaqueta para petroleiros e indústria pesada",
        image: "docs/imgs/luva-petroleiro.png"
    },
    { 
        name: "Luva de electricista", 
        category: "EPI", 
        price: "2.000.00", 
        description: "Luvas isolantes para electricistas e trabalho elétrico",
        image: "docs/imgs/luva-electricista.webp"
    },
    { 
        name: "Reagente A Nach Tauber", 
        category: "Laboratório", 
        price: "87.500.00", 
        description: "Reagente A para deteção de ácido ascórbico em laboratório",
        image: "docs/imgs/reagente-tauber.jpeg"
    },
    { 
        name: "Reagente B Nach Tauber", 
        category: "Laboratório", 
        price: "87.500.00", 
        description: "Reagente B para análise laboratorial completa",
        image: "docs/imgs/reagente-tauber.jpeg"
    },
    { 
        name: "10 Láminas de Pastilhas para determinação de cloro na água", 
        category: "Laboratório", 
        price: "71.000.00", 
        description: "Pastilhas para análise de cloro em água em laboratório",
        image: "docs/imgs/pastilhas-cloro.jpg"
    }
];

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
            
            filteredProducts.forEach((product, index) => {
                // Determinar classe da categoria
                let categoryClass = '';
                let categoryText = '';
                
                switch(product.category) {
                    case 'EPI':
                        categoryClass = 'product-category-epi';
                        categoryText = 'EPI';
                        break;
                    case 'Proteção':
                        categoryClass = 'product-category-protecao';
                        categoryText = 'Proteção';
                        break;
                    case 'Laboratório':
                        categoryClass = 'product-category-lab';
                        categoryText = 'Laboratório';
                        break;
                }
                
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <div class="product-content">
                        <span class="product-category ${categoryClass}">${categoryText}</span>
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${formatPrice(product.price)} <span>Kz</span></div>
                        <div class="product-actions">
                            <a href="mailto:vendas@praico-comercial.com" class="product-btn product-btn-primary" >
                                <i class="fas fa-envelope"></i> E-mail
                            </a>
                            <a href="https://wa.me/244947465790?text=Olá!%20Gostaria%20de%20informações%20sobre%20${encodeURIComponent(product.name)}%20-%20Preço:%20${product.price}%20Kz" 
                               class="product-btn product-btn-secondary"
                               target="_blank">
                                <i class="fab fa-whatsapp"></i>WhatsApp
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
                let categoryClass = '';
                let categoryText = '';
                
                switch(product.category) {
                    case 'EPI':
                        categoryClass = 'product-category-epi';
                        categoryText = 'EPI';
                        break;
                    case 'Proteção':
                        categoryClass = 'product-category-protecao';
                        categoryText = 'Proteção';
                        break;
                    case 'Laboratório':
                        categoryClass = 'product-category-lab';
                        categoryText = 'Laboratório';
                        break;
                }
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <strong>${product.name}</strong>
                        <p style="color: var(--gray); font-size: 14px; margin-top: 5px;">${product.description}</p>
                    </td>
                    <td>
                        <span class="product-category ${categoryClass}">${categoryText}</span>
                    </td>
                    <td>
                        <div style="color: var(--primary); font-weight: 700; font-size: 18px;">${formatPrice(product.price)} <span style="font-size: 14px; font-weight: 500; color: var(--gray);">Kz</span></div>
                    </td>
                `;
                
                tableBody.appendChild(row);
            });
        }

        // Função para formatar preço
        function formatPrice(price) {
            return price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }

        // Função de pesquisa
        function searchProducts() {
            const searchTerm = document.getElementById('productSearch').value.toLowerCase();
            
            if (searchTerm.trim() === '') {
                renderProductsGrid(products);
                renderProductsTable(products);
                return;
            }
            
            const filtered = products.filter(product => {
                return product.name.toLowerCase().includes(searchTerm) ||
                       product.description.toLowerCase().includes(searchTerm) ||
                       product.category.toLowerCase().includes(searchTerm) ||
                       product.price.includes(searchTerm);
            });
            
            renderProductsGrid(filtered);
            renderProductsTable(filtered);
        }

        // Função para exportar CSV
        function exportToCSV() {
            let csv = 'Produto,Descrição,Categoria,Preço (Kz)\n';
            
            products.forEach(product => {
                csv += `"${product.name}","${product.description}","${product.category}","${product.price}"\n`;
            });
            
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'catalogo-praico-comercial.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }

        // Função para imprimir - CORRIGIDA
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

        // Função para mudar visualização
        function toggleView(viewType) {
            const gridBtn = document.getElementById('viewGridBtn');
            const tableBtn = document.getElementById('viewTableBtn');
            const gridContainer = document.getElementById('productsGrid');
            const tableContainer = document.getElementById('productsTableContainer');
            
            if (viewType === 'grid') {
                gridBtn.classList.add('active');
                tableBtn.classList.remove('active');
                gridContainer.style.display = 'grid';
                tableContainer.style.display = 'none';
            } else {
                gridBtn.classList.remove('active');
                tableBtn.classList.add('active');
                gridContainer.style.display = 'none';
                tableContainer.style.display = 'block';
            }
        }

        // Função para pré-preenchir informações do produto
        function inquireAboutProduct(productName) {
            const message = `Olá! Gostaria de mais informações sobre o produto: ${productName}`;
            const whatsappUrl = `https://wa.me/244947465790?text=${encodeURIComponent(message)}`;
            
            // Abre WhatsApp em nova janela
            window.open(whatsappUrl, '_blank');
            
            // Também rola até a seção de contacto
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }

        // Inicialização
        document.addEventListener('DOMContentLoaded', function() {
            // Renderizar grid inicial
            renderProductsGrid();
            renderProductsTable();
            
            // Configurar pesquisa
            const searchInput = document.getElementById('productSearch');
            searchInput.addEventListener('input', searchProducts);
            
            // Configurar botões de exportação
            document.getElementById('exportCSV').addEventListener('click', exportToCSV);
            document.getElementById('printTable').addEventListener('click', printTable);
            
            // Configurar botões de visualização
            document.getElementById('viewGridBtn').addEventListener('click', () => toggleView('grid'));
            document.getElementById('viewTableBtn').addEventListener('click', () => toggleView('table'));
            
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
                });
                
                closeMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                });
                
                // Close mobile menu when clicking on a link
                const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
                mobileMenuLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.remove('active');
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
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
                } else {
                    header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                }
            });
            
            // Adicionar foco automático na pesquisa
            setTimeout(() => {
               searchInput.focus();
            }, 1000);
        });
    