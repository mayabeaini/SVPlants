using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SVPlantsApi.Models
{
    public class SVPContext : DbContext
    {
        List<SVPlantItem> empList = new List<SVPlantItem>
        {
            new SVPlantItem{Id=101,PlantName="Bacopa",PlantStatus="Water",Timestamp=1618427341396},

            new SVPlantItem{Id=102,PlantName="Daylily",PlantStatus="Must Water",Timestamp=1618427341396},

            new SVPlantItem{Id=103,PlantName="Petunia",PlantStatus="Water",Timestamp=1618427341396},

            new SVPlantItem{Id=104,PlantName="Peony",PlantStatus="Water",Timestamp=1618427341396},

            new SVPlantItem{Id=105,PlantName="Sunflower",PlantStatus="Must Water",Timestamp=1618427341396}
        };

        //public SVPContext(DbContextOptions<SVPContext> options)
        //    : base(options)
        //{
        //}

        public DbSet<SVPlantItem> SVPlantItems { get; set; }
    }
}