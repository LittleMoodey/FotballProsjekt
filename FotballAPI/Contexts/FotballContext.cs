using Microsoft.EntityFrameworkCore;
using FotballAPI.Models;

namespace FotballAPI.Contexts;

public class FotballContext(DbContextOptions<FotballContext> options) :
DbContext(options)
{
    // Models.navn = FotballPlayer .. Tabell.navn = FotballPlayers
    public DbSet<FotballPlayer> FotballPlayers { get; set; } 

    public DbSet<Company> CompanyBooks{ get; set; } //  siden vi bare skal ha data for et firma.

    public DbSet<Arena> Arenas { get; set; }
}