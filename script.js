// Sistema de Diagrama Animado Aprimorado para Atribuição de Entregadores
class DiagramAnimation {
    constructor() {
        this.currentStep = 0;
        this.isPlaying = false;
        this.animationTimeout = null;
        this.progress = 0;
        
        // Definição dos passos do processo - MAIS DETALHADO
        this.steps = [
            {
                id: 1,
                title: "📱 Pedido Recebido",
                description: "Cliente seleciona restaurante e produtos no aplicativo. Sistema registra localização de entrega, método de pagamento e preferências.",
                nodeId: "pedido",
                duration: 2500,
                details: [
                    "Validação dos dados do pedido",
                    "Confirmação de estoque no restaurante",
                    "Cálculo inicial do valor total"
                ]
            },
            {
                id: 2,
                title: "📍 Busca Geográfica",
                description: "Sistema identifica todos os entregadores ativos em um raio de 7km do restaurante, considerando tráfego e condições locais.",
                nodeId: "busca",
                duration: 3000,
                details: [
                    "Filtro por zona de atuação",
                    "Verificação de disponibilidade em tempo real",
                    "Exclusão de entregadores ocupados"
                ]
            },
            {
                id: 3,
                title: "📊 Análise de Performance",
                description: "Avaliação completa do histórico de cada entregador: taxa de aceitação, pontualidade, avaliações e especializações.",
                nodeId: "analise",
                duration: 3500,
                details: [
                    "Cálculo do score de performance",
                    "Análise de feedback dos clientes",
                    "Verificação de restrições específicas"
                ]
            },
            {
                id: 4,
                title: "📐 Cálculo de Distâncias",
                description: "Cálculo preciso das distâncias envolvidas: restaurante→entregador e restaurante→cliente, considerando rotas otimizadas.",
                nodeId: "distancia",
                duration: 2800,
                details: [
                    "Uso de APIs de mapas em tempo real",
                    "Consideração de tráfego atual",
                    "Cálculo de múltiplas rotas alternativas"
                ]
            },
            {
                id: 5,
                title: "⏱️ Estimativa de Tempo",
                description: "Previsão inteligente do tempo total considerando preparo, deslocamento e fatores externos como clima e trânsito.",
                nodeId: "tempo",
                duration: 3200,
                details: [
                    "Machine learning para previsão",
                    "Histórico de tempos no restaurante",
                    "Fatores sazonais e de horário"
                ]
            },
            {
                id: 6,
                title: "🧠 Algoritmo de Matching",
                description: "Processamento dos dados coletados para encontrar o entregador ideal usando múltiplos critérios ponderados.",
                nodeId: "selecao",
                duration: 4000,
                details: [
                    "Ponderamento de variáveis",
                    "Otimização multi-objetivo",
                    "Balanceamento de carga de trabalho"
                ]
            },
            {
                id: 7,
                title: "🔔 Notificação Inteligente",
                description: "Sistema envia notificação personalizada para o entregador selecionado com todas as informações necessárias.",
                nodeId: "notificacao",
                duration: 2200,
                details: [
                    "Push notification no app",
                    "Informações detalhadas do pedido",
                    "Prazo para resposta: 45 segundos"
                ]
            },
            {
                id: 8,
                title: "✅ Aceitação do Pedido",
                description: "Entregador analisa e decide sobre aceitação. Sistema monitora tempo de resposta e busca alternativas se necessário.",
                nodeId: "aceitacao",
                duration: 3000,
                details: [
                    "Interface de decisão simplificada",
                    "Fallback para segundo melhor",
                    "Penalidades por recusas frequentes"
                ]
            },
            {
                id: 9,
                title: "👤 Confirmação ao Cliente",
                description: "Cliente recebe confirmação com dados do entregador, tempo estimado e início do rastreamento em tempo real.",
                nodeId: "confirmacao",
                duration: 2500,
                details: [
                    "Atualização do status do pedido",
                    "Início do rastreamento GPS",
                    "Comunicação proativa com cliente"
                ]
            },
            {
                id: 10,
                title: "🚀 Início da Jornada",
                description: "Processo de entrega é iniciado com otimização de rota em tempo real e atualizações constantes para todas as partes.",
                nodeId: "entrega",
                duration: 3500,
                details: [
                    "Ativação do sistema de rota",
                    "Monitoramento contínuo",
                    "Comunicação em tempo real"
                ]
            },
            {
                id: 11,
                title: "🔄 Feedback e Aprendizado",
                description: "Ao finalizar, sistema coleta feedback e atualiza os modelos de machine learning para melhorias futuras.",
                nodeId: "feedback",
                duration: 2800,
                details: [
                    "Coleta de avaliações",
                    "Análise de métricas de performance",
                    "Atualização dos algoritmos"
                ]
            }
        ];

        // Configuração dos nós do diagrama - MAIS COMPACTO
        this.nodes = [
            // Primeira linha - Processo Principal
            { id: "pedido", x: 50, y: 80, icon: "fa-shopping-cart", text: "Pedido Recebido" },
            { id: "busca", x: 200, y: 80, icon: "fa-search-location", text: "Busca Geográfica" },
            { id: "analise", x: 350, y: 80, icon: "fa-chart-bar", text: "Análise Performance" },
            { id: "distancia", x: 500, y: 80, icon: "fa-route", text: "Cálculo Distâncias" },
            
            // Segunda linha - Processamento
            { id: "tempo", x: 650, y: 80, icon: "fa-clock", text: "Estimativa Tempo" },
            { id: "selecao", x: 400, y: 200, icon: "fa-brain", text: "Algoritmo Matching" },
            
            // Terceira linha - Execução
            { id: "notificacao", x: 200, y: 320, icon: "fa-bell", text: "Notificação" },
            { id: "aceitacao", x: 400, y: 320, icon: "fa-check-double", text: "Aceitação" },
            { id: "confirmacao", x: 600, y: 320, icon: "fa-user-check", text: "Confirmação" },
            
            // Quarta linha - Finalização
            { id: "entrega", x: 400, y: 440, icon: "fa-shipping-fast", text: "Início Entrega" },
            { id: "feedback", x: 650, y: 440, icon: "fa-chart-line", text: "Feedback" }
        ];

        // Conexões entre os nós - MAIS COMPLETO
        this.connections = [
            // Fluxo principal horizontal
            { from: "pedido", to: "busca" },
            { from: "busca", to: "analise" },
            { from: "analise", to: "distancia" },
            { from: "distancia", to: "tempo" },
            
            // Conexões verticais para processamento
            { from: "tempo", to: "selecao" },
            
            // Fluxo de execução
            { from: "selecao", to: "notificacao" },
            { from: "notificacao", to: "aceitacao" },
            { from: "aceitacao", to: "confirmacao" },
            
            // Finalização
            { from: "confirmacao", to: "entrega" },
            { from: "entrega", to: "feedback" },
            
            // Conexões de fallback
            { from: "aceitacao", to: "selecao", type: "fallback" },
            { from: "feedback", to: "analise", type: "learning" }
        ];

        this.init();
    }
    
    init() {
        this.initializeDiagram();
        this.setupEventListeners();
        this.setupStepDetails();
    }
    
    initializeDiagram() {
        const diagram = document.getElementById('diagram');
        diagram.innerHTML = '';
        
        // Criar conexões
        this.connections.forEach(conn => {
            const fromNode = this.nodes.find(n => n.id === conn.from);
            const toNode = this.nodes.find(n => n.id === conn.to);
            
            if (fromNode && toNode) {
                const connection = document.createElement('div');
                connection.className = `diagram-connection ${conn.type || 'normal'}`;
                connection.id = `conn-${conn.from}-${conn.to}`;
                
                // Calcular posição e rotação da linha
                const x1 = fromNode.x + 70;
                const y1 = fromNode.y + 30;
                const x2 = toNode.x + 70;
                const y2 = toNode.y + 30;
                
                const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                
                connection.style.width = `${length}px`;
                connection.style.left = `${x1}px`;
                connection.style.top = `${y1}px`;
                connection.style.transform = `rotate(${angle}deg)`;
                
                // Adicionar animação de fluxo
                const flowDot = document.createElement('div');
                flowDot.className = 'flow-dot';
                flowDot.style.display = 'none';
                connection.appendChild(flowDot);
                
                diagram.appendChild(connection);
            }
        });
        
        // Criar nós
        this.nodes.forEach(node => {
            const nodeElement = document.createElement('div');
            nodeElement.className = 'diagram-node';
            nodeElement.id = `node-${node.id}`;
            nodeElement.style.left = `${node.x}px`;
            nodeElement.style.top = `${node.y}px`;
            
            nodeElement.innerHTML = `
                <div class="node-icon">
                    <i class="fas ${node.icon}"></i>
                </div>
                <div class="diagram-node-text">${node.text}</div>
                <div class="node-step">${this.getStepNumber(node.id)}</div>
            `;
            
            // Tooltip para detalhes
            nodeElement.setAttribute('data-tooltip', this.getNodeTooltip(node.id));
            
            diagram.appendChild(nodeElement);
        });

        // Adicionar áreas de processo
        this.addProcessAreas();
    }

    addProcessAreas() {
        const diagram = document.getElementById('diagram');
        
        // Área de Coleta de Dados
        const dataArea = document.createElement('div');
        dataArea.className = 'process-area data-area';
        dataArea.innerHTML = '<span>📥 Coleta de Dados</span>';
        dataArea.style.left = '20px';
        dataArea.style.top = '20px';
        dataArea.style.width = '730px';
        dataArea.style.height = '120px';
        diagram.appendChild(dataArea);

        // Área de Processamento
        const processArea = document.createElement('div');
        processArea.className = 'process-area process-area';
        processArea.innerHTML = '<span>⚙️ Processamento</span>';
        processArea.style.left = '350px';
        processArea.style.top = '150px';
        processArea.style.width = '200px';
        processArea.style.height = '100px';
        diagram.appendChild(processArea);

        // Área de Execução
        const executionArea = document.createElement('div');
        executionArea.className = 'process-area execution-area';
        executionArea.innerHTML = '<span>🚀 Execução</span>';
        executionArea.style.left = '150px';
        executionArea.style.top = '280px';
        executionArea.style.width = '500px';
        executionArea.style.height = '100px';
        diagram.appendChild(executionArea);

        // Área de Aprendizado
        const learningArea = document.createElement('div');
        learningArea.className = 'process-area learning-area';
        learningArea.innerHTML = '<span>📈 Aprendizado</span>';
        learningArea.style.left = '600px';
        learningArea.style.top = '400px';
        learningArea.style.width = '150px';
        learningArea.style.height = '80px';
        diagram.appendChild(learningArea);
    }

    getStepNumber(nodeId) {
        const step = this.steps.find(s => s.nodeId === nodeId);
        return step ? step.id : '';
    }

    getNodeTooltip(nodeId) {
        const step = this.steps.find(s => s.nodeId === nodeId);
        return step ? step.description : '';
    }

    setupStepDetails() {
        const detailsContainer = document.createElement('div');
        detailsContainer.id = 'stepDetails';
        detailsContainer.className = 'step-details';
        
        const controlPanel = document.querySelector('.control-panel');
        controlPanel.appendChild(detailsContainer);
    }
    
    setupEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => this.start());
        document.getElementById('pauseBtn').addEventListener('click', () => this.pause());
        document.getElementById('resetBtn').addEventListener('click', () => this.reset());
        document.getElementById('stepForward').addEventListener('click', () => this.stepForward());
        document.getElementById('stepBackward').addEventListener('click', () => this.stepBackward());
    }
    
    start() {
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        document.getElementById('startBtn').disabled = true;
        document.getElementById('pauseBtn').disabled = false;
        document.getElementById('stepForward').disabled = true;
        document.getElementById('stepBackward').disabled = true;
        
        this.nextStep();
    }
    
    pause() {
        this.isPlaying = false;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = true;
        document.getElementById('stepForward').disabled = false;
        document.getElementById('stepBackward').disabled = false;
        
        if (this.animationTimeout) {
            clearTimeout(this.animationTimeout);
        }
    }
    
    reset() {
        this.pause();
        this.currentStep = 0;
        this.progress = 0;
        
        // Resetar todos os nós e conexões
        this.nodes.forEach(node => {
            const nodeElement = document.getElementById(`node-${node.id}`);
            nodeElement.classList.remove('active', 'completed');
        });
        
        this.connections.forEach(conn => {
            const connElement = document.getElementById(`conn-${conn.from}-${conn.to}`);
            if (connElement) {
                connElement.classList.remove('active', 'completed');
                const flowDot = connElement.querySelector('.flow-dot');
                if (flowDot) {
                    flowDot.style.display = 'none';
                }
            }
        });
        
        this.updateProgress();
        this.updateStepInfo(this.steps[0]);
        document.getElementById('statusText').textContent = 'Sistema reiniciado. Pronto para iniciar a simulação.';
        this.updateStepDetails([]);
    }

    stepForward() {
        if (this.currentStep < this.steps.length) {
            this.currentStep++;
            this.progress = (this.currentStep / this.steps.length) * 100;
            this.updateProgress();
            this.updateStepInfo(this.steps[this.currentStep - 1]);
            this.highlightStep(this.currentStep - 1);
        }
    }

    stepBackward() {
        if (this.currentStep > 0) {
            this.currentStep--;
            this.progress = (this.currentStep / this.steps.length) * 100;
            this.updateProgress();
            this.updateStepInfo(this.steps[this.currentStep]);
            this.highlightStep(this.currentStep);
        }
    }
    
    nextStep() {
        if (!this.isPlaying || this.currentStep >= this.steps.length) {
            this.completeAnimation();
            return;
        }
        
        const step = this.steps[this.currentStep];
        this.updateStepInfo(step);
        this.updateStepDetails(step.details);
        this.highlightStep(this.currentStep);
        
        // Atualizar status
        document.getElementById('statusText').textContent = `Executando: ${step.title}`;
        
        // Avançar após a duração do passo
        this.animationTimeout = setTimeout(() => {
            this.currentStep++;
            this.progress = (this.currentStep / this.steps.length) * 100;
            this.updateProgress();
            
            this.nextStep();
        }, step.duration);
    }

    highlightStep(stepIndex) {
        // Resetar todos os elementos
        this.nodes.forEach(node => {
            const nodeElement = document.getElementById(`node-${node.id}`);
            nodeElement.classList.remove('active', 'completed');
        });
        
        this.connections.forEach(conn => {
            const connElement = document.getElementById(`conn-${conn.from}-${conn.to}`);
            if (connElement) {
                connElement.classList.remove('active', 'completed');
                const flowDot = connElement.querySelector('.flow-dot');
                if (flowDot) {
                    flowDot.style.display = 'none';
                }
            }
        });

        // Ativar elementos até o passo atual
        for (let i = 0; i <= stepIndex; i++) {
            const step = this.steps[i];
            
            // Ativar nó
            const currentNode = document.getElementById(`node-${step.nodeId}`);
            if (currentNode) {
                currentNode.classList.add('completed');
                if (i === stepIndex) {
                    currentNode.classList.add('active');
                }
            }
            
            // Ativar conexão anterior
            if (i > 0) {
                const prevStep = this.steps[i - 1];
                const connId = `conn-${prevStep.nodeId}-${step.nodeId}`;
                const connection = document.getElementById(connId);
                
                if (connection) {
                    connection.classList.add('completed');
                    if (i === stepIndex) {
                        connection.classList.add('active');
                        // Animar ponto de fluxo
                        const flowDot = connection.querySelector('.flow-dot');
                        if (flowDot) {
                            flowDot.style.display = 'block';
                            flowDot.style.animation = 'flowMove 2s linear infinite';
                        }
                    }
                }
            }
        }
    }
    
    updateStepInfo(step) {
        document.getElementById('stepTitle').textContent = step.title;
        document.getElementById('stepDescription').textContent = step.description;
    }

    updateStepDetails(details) {
        const detailsContainer = document.getElementById('stepDetails');
        detailsContainer.innerHTML = '';
        
        if (details && details.length > 0) {
            detailsContainer.innerHTML = '<h4>Detalhes do Processo:</h4>';
            details.forEach(detail => {
                const detailElement = document.createElement('div');
                detailElement.className = 'detail-item';
                detailElement.innerHTML = `<i class="fas fa-check-circle"></i> ${detail}`;
                detailsContainer.appendChild(detailElement);
            });
        }
    }
    
    updateProgress() {
        document.getElementById('progressFill').style.width = `${this.progress}%`;
        document.getElementById('progressText').textContent = `${Math.round(this.progress)}%`;
        document.getElementById('stepCounter').textContent = `Passo ${this.currentStep} de ${this.steps.length}`;
    }
    
    completeAnimation() {
        this.isPlaying = false;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = true;
        document.getElementById('stepForward').disabled = false;
        document.getElementById('stepBackward').disabled = false;
        
        document.getElementById('statusText').textContent = '✅ Processo de atribuição concluído com sucesso!';
    }
}

// Inicializar o diagrama quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new DiagramAnimation();
});