using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SVPlantsApi.Models;

namespace SVPlantsApi.Controllers
{
    #region SVPlantsController
    [Route("api/[controller]")]
    [ApiController]
    public class SVPlantItemsController : ControllerBase
    {
        private readonly SVPContext _context;

        public SVPlantItemsController(SVPContext context)
        {
            _context = context;
        }
        #endregion

        // GET: api/SVPlants
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SVPlantItem>>> GetSVPlantItems()
        {
            //return 
            //return Json(new { Property1 = "Valu1", Properrty2 = "Value2" })
            return await _context.SVPlantItems.ToListAsync();
        }

        // GET: api/SVPlants/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SVPlantItem>> GetSVPlantItem(long id)
        {
            var svplantItem = await _context.SVPlantItems.FindAsync(id);

            if (svplantItem == null)
            {
                return NotFound();
            }

            return svplantItem;
        }

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        #region snippet_Update
        // PUT: api/SVPlants/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSVPlantItem(long id, SVPlantItem svplantItem)
        {
            if (id != svplantItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(svplantItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SVPlantItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        #endregion

        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        #region snippet_Create
        // POST: api/SVPlants
        [HttpPost]
        public async Task<ActionResult<SVPlantItem>> PostTodoItem(SVPlantItem svplantItem)
        {
            _context.SVPlantItems.Add(svplantItem);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetSVPlantItem", new { id = svplantItem.Id }, svplantItem);
            return CreatedAtAction(nameof(GetSVPlantItem), new { id = svplantItem.Id }, svplantItem);
        }
        #endregion

       

        private bool SVPlantItemExists(long id)
        {
            return _context.SVPlantItems.Any(e => e.Id == id);
        }
    }
}
