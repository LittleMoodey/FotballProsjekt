using FotballAPI.Interfaces;

namespace FotballAPI.Models;

public class FotballPlayer : IFotball
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Gender { get; set; } = string.Empty; //boolean?
    public int Price { get; set; }
    public string Image { get; set; } = string.Empty;
    public bool Purchased { get; set; } 
}

