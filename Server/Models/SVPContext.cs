using Microsoft.EntityFrameworkCore;

namespace SVPlantsApi.Models
{
    public class SVPContext : DbContext
    {
        public SVPContext(DbContextOptions<SVPContext> options)
            : base(options)
        {
        }

        public DbSet<SVPlantItem> SVPlantItems { get; set; }
    }
}