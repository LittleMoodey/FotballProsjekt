namespace FotballAPI.Interfaces;

interface ICompany
{
    int Id { get; set; }
    int MoneyLeft { get; set; }
    int NumberOfPurchases { get; set; }
    int MoneySpendt { get; set; }
}