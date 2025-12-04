using FotballAPI.Interfaces;

namespace FotballAPI.Models;

public class Arena : IArena
{
    public int Id { get; set; }
    public string ArenaName { get; set; } = string.Empty;
    public int Capasity { get; set; }
    public string ArenaImage { get; set; } = string.Empty;
}