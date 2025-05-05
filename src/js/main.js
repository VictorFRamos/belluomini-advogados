// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Obrigado, ${name}! Sua mensagem sobre "${subject}" foi recebida. Entraremos em contato em breve pelo email ${email}.`);
    
    // Reset form
    this.reset();
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotBox = document.getElementById('chatbotBox');
const closeChatbot = document.getElementById('closeChatbot');
const chatbotMessages = document.getElementById('chatbotMessages');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');
const quickQuestions = document.querySelectorAll('.quick-question');

chatbotToggle.addEventListener('click', () => {
    chatbotBox.style.display = 'flex';
});

closeChatbot.addEventListener('click', () => {
    chatbotBox.style.display = 'none';
});

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function handleUserMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response);
        }, 1000);
    }
}

function getBotResponse(question) {
    question = question.toLowerCase();
    
    if (question.includes('mateus') || question.includes('belluomini')) {
        return "Mateus Belluomini é sócio-fundador do escritório, formado pela USP com especialização em Direito Civil e Empresarial. Com mais de 10 anos de experiência, atua principalmente nas áreas contratual e societária.";
    } else if (question.includes('gustavo') || question.includes('belluomini')) {
        return "Gustavo Belluomini é sócio-fundador do escritório, formado pela PUC-SP com especialização em Direito Tributário e Contratual. Possui ampla experiência em planejamento tributário e recuperação de créditos.";
    } else if (question.includes('horário') || question.includes('atendimento')) {
        return "Nosso horário de atendimento é de segunda a sexta, das 9h às 18h. Para emergências fora desse horário, entre em contato pelo telefone (11) 8888-8888.";
    } else if (question.includes('marcar') || question.includes('consulta')) {
        return "Para marcar uma consulta, você pode:\n1. Enviar uma mensagem pelo WhatsApp (11) 9999-9999\n2. Ligar para nosso escritório\n3. Preencher o formulário de contato em nosso site\n4. Enviar um email para contato@belluominiadvogados.com.br";
    } else if (question.includes('ola') || question.includes('oi') || question.includes('olá')) {
        return "Olá! Como posso ajudar você hoje?";
    } else {
        return "Desculpe, não entendi sua pergunta. Você pode reformular ou escolher uma das opções rápidas abaixo. Se preferir, entre em contato diretamente conosco pelo WhatsApp.";
    }
}

sendMessage.addEventListener('click', handleUserMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage();
    }
});

quickQuestions.forEach(button => {
    button.addEventListener('click', () => {
        const question = button.getAttribute('data-question');
        addMessage(question, true);
        
        setTimeout(() => {
            const response = getBotResponse(question);
            addMessage(response);
        }, 1000);
    });
});