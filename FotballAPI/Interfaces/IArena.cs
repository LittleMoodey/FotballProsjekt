namespace FotballAPI.Interfaces;

interface IArena
{
    int Id { get; set; }
    string ArenaName { get; set; }
    int Capasity { get; set; }
    string ArenaImage { get; set; }
}