using Microsoft.AspNetCore.Mvc;

namespace BelluominiAdvocaciaRestApiRestApi.Controllers
{
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public async Task <IActionResult> Post(object dados)
        {
            return Ok();
        }
    }
}
