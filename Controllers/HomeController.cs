namespace AspnetcoreVue.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(new { Message = "Hello, World!" });
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
