using FotballAPI.Interfaces;

namespace FotballAPI.Models;

public class Company : ICompany
{
    public int Id { get; set; }
    public int MoneyLeft { get; set; }
    public int NumberOfPurchases { get; set; }
    public int MoneySpendt { get; set; }
}