using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Diagnostics;
using System.Net;
using System.Net.Mail;

namespace BelluominiAdvocaciaRestApiRestApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController(IConfiguration configuration) : ControllerBase
    {
        [HttpPost]
        public async Task <IActionResult> Enviar(MensagemVm mensagem)
        {
            if(mensagem == null)
                return BadRequest("Dados da mensagem não fornecidos.");

            var settings = configuration.GetSection("EmailSettings").Get<EmailSettings>(); ;

            try
            {
                // Criar o cliente SMTP
                using var smtpClient = new SmtpClient("smtp.gmail.com", 587);
                smtpClient.Credentials = new NetworkCredential(settings.Username, settings.Password);
                smtpClient.EnableSsl = true;
                smtpClient.UseDefaultCredentials = false; // Importante!

                // Criar a mensagem
                var mailMessage = new MailMessage
                {
                    From = new MailAddress(mensagem.Email, mensagem.Nome),
                    Subject = $"Novo Contato via Site - {mensagem.Nome}",
                    Body = MontarCorpoEmail(mensagem),
                    IsBodyHtml = true
                };

                mailMessage.To.Add(settings.FromAddress);

                try
                {
                    smtpClient.Send(mailMessage);
                    Debug.WriteLine("E-mail enviado com sucesso!");
                    return Ok();
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Erro: {ex.Message}");
                    if (ex.InnerException != null)
                        Debug.WriteLine($"Detalhes: {ex.InnerException.Message}");

                    throw;
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine($"Erro ao enviar email: {ex.Message}");
                throw;
            }
        }

        public class MensagemVm
        {
            public string Nome { get; set; }
            public string Email { get; set; }
            public string Telefone { get; set; }
            public string Mensagem { get; set; }
        }

        public class EmailSettings
        {
            public string SmtpServer { get; set; }
            public int Port { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
            public string FromName { get; set; }
            public string FromAddress { get; set; }
            public bool EnableSsl { get; set; }
        }

        private string MontarCorpoEmail(MensagemVm mensagem)
        {
            return $@"
          <!DOCTYPE html>
<html>
<head>
    <meta charset=""UTF-8"">
    <title>Novo Contato via Site</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 15px;
        }}
        .header {{
            background-color: #1a3a5f;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px 5px 0 0;
        }}
        .content {{
            border: 1px solid #ddd;
            padding: 20px;
            background-color: #f9f9f9;
        }}
        .field {{
            margin-bottom: 12px;
        }}
        .label {{
            font-weight: bold;
            color: #1a3a5f;
            display: inline-block;
            width: 100px;
        }}
        .message {{
            background-color: #fff;
            border-left: 4px solid #1a3a5f;
            padding: 15px;
            margin: 15px 0;
        }}
        .footer {{
            margin-top: 20px;
            font-size: 12px;
            color: #666;
            text-align: center;
        }}
    </style>
</head>
<body>
    
    <div class=""content"">
        <p>Um novo contato foi realizado através do site:</p>
        
        <div class=""field"">
            <span class=""label"">Nome:</span> {mensagem.Nome}
        </div>
        <div class=""field"">
            <span class=""label"">E-mail:</span> {mensagem.Email}
        </div>
        <div class=""field"">
            <span class=""label"">Telefone:</span> {mensagem.Telefone}
        </div>
        
        <p><strong>Mensagem:</strong></p>
        <div class=""message"">
            {mensagem.Mensagem}
        </div>
    </div>
</body>
</html>
            ";
        }
    }
}
