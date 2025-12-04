namespace FotballAPI.Interfaces;

interface IFotball
{
    int Id { get; set; }
    string Name { get; set; }
    string Gender { get; set; } //eller boolean?
    int Price { get; set; }
    string Image { get; set; }
    bool Purchased { get; set; } //status - "ikke kjøpt" på ved opprettelse av ny spiller

}