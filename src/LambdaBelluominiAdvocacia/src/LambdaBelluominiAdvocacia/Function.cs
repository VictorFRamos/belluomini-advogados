using Amazon.Lambda.Core;
using System.Net;
using System.Net.Mail;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace LambdaBelluominiAdvocacia;

public class Function
{

    /// <summary>
    /// A simple function that takes a string and does a ToUpper
    /// </summary>
    /// <param name="input">The event for the Lambda function handler to process.</param>
    /// <param name="context">The ILambdaContext that provides methods for logging and describing the Lambda environment.</param>
    /// <returns></returns>
    public async Task FunctionHandler(ContactFormData request, ILambdaContext context)
    {
        try
        {
            // Criar o cliente SMTP
            using var smtpClient = new SmtpClient("smtp.gmail.com", 587);
            smtpClient.Credentials = new NetworkCredential("belluominiadvocacia@gmail.com", "wzfl ehdj dczm gefl");
            smtpClient.EnableSsl = true;
            smtpClient.UseDefaultCredentials = false; // Importante!

            // Criar a mensagem
            var mailMessage = new MailMessage
            {
                From = new MailAddress(request.Email, request.Name)
            };

            mailMessage.To.Add("belluominiadvocacia@gmail.com");
            mailMessage.Subject = $"Novo contato do site – {request.Name}"; ;

        

            mailMessage.Body =  GenerateEmailHtml(request);
            mailMessage.IsBodyHtml = true; 

            try
            {
                await smtpClient.SendMailAsync(mailMessage);
                Console.WriteLine("E -mail enviado com sucesso!");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro: {ex.Message}");
                if (ex.InnerException != null)
                    Console.WriteLine($"Detalhes: {ex.InnerException.Message}");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Erro ao enviar email: {ex.Message}");
        }
    }

    public class ContactFormData
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Subject { get; set; }
        public string Message { get; set; }
    }

    public static string GenerateEmailHtml(ContactFormData data)
    {
        return $@"
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <style>
    body {{
      font-family: Arial, sans-serif;
      color: #333;
      background-color: #f9f9f9;
      padding: 20px;
    }}
    .container {{
      background-color: #ffffff;
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 8px;
      max-width: 600px;
      margin: auto;
    }}
    h2 {{
      color: #2c3e50;
    }}
    blockquote {{
      border-left: 4px solid #ccc;
      margin: 10px 0;
      padding-left: 10px;
      color: #555;
    }}
    .footer {{
      color: #999;
      font-size: 12px;
      margin-top: 30px;
    }}
  </style>
</head>
<body>
  <div class='container'>
    <h2>📥 Novo contato recebido pelo site</h2>

    <p><strong>Nome:</strong> {WebUtility.HtmlEncode(data.Name)}</p>
    <p><strong>E-mail:</strong> {WebUtility.HtmlEncode(data.Email)}</p>
    <p><strong>Telefone:</strong> {WebUtility.HtmlEncode(data.Phone)}</p>
    <p><strong>Assunto:</strong> {WebUtility.HtmlEncode(data.Subject)}</p>

    <p><strong>Mensagem:</strong></p>
    <blockquote>
      {WebUtility.HtmlEncode(data.Message).Replace("\n", "<br/>")}
    </blockquote>

    <div class='footer'>
      Este e-mail foi gerado automaticamente a partir do formulário de contato do site.
    </div>
  </div>
</body>
</html>";
    }
}
