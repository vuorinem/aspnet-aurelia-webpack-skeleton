using Microsoft.AspNetCore.Mvc;

namespace Client {
    public class SpaIndexController : Controller {
        public IActionResult Index() {
            return View();
        }
    }
}
