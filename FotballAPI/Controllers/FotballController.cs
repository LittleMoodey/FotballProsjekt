using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FotballAPI.Contexts;
using FotballAPI.Models;

namespace FotballAPI.Controllers;

[ApiController]
[Route("[controller]")]

public class FotballController(FotballContext _fotballContext) : ControllerBase
{
    [HttpGet("players")] //liste med forball-spillerne (fra databasen.)
    public async Task<List<FotballPlayer>> GetPlayers()
    {
        List<FotballPlayer> fotballPlayers = await _fotballContext.FotballPlayers.ToListAsync();
        return fotballPlayers;
    }

    [HttpPost("players")]
    public async Task<ActionResult> Post(FotballPlayer newPlayer) //fra Models
    {
        try
        {
            _fotballContext.FotballPlayers.Add(newPlayer);
            await _fotballContext.SaveChangesAsync();
            return Created();
        }
        catch
        {
            return StatusCode(500);
        }
    }





    [HttpGet("companybooks")] // liste med Firma-Regnskapet
    public async Task<List<Company>> GetCompanyBooks()
    {
        List<Company> companybooks = await _fotballContext.CompanyBooks.ToListAsync();
        return companybooks;
    }

    [HttpGet("arenas")] // liste med Fotball.Arenaer
    public async Task<List<Arena>> GetArenas()
    {
        List<Arena> arenas = await _fotballContext.Arenas.ToListAsync();
        return arenas;
    }

    


}