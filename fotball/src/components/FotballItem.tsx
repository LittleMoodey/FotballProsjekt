import type { IFotball } from "../interfaces/IFotball";

const FotballItem = ({ player }: { player: IFotball }) => {
  return (
    <article className="glassDiv itemCard">
      <h2 className="bold">{player.name}</h2>
      <img
        className="img-responsive"
        src={`http://localhost:5212/playerimg/${player.image}`}
        alt=""
        style={{ width: "200px" }}
      />
      <h4>Id: {player.id}</h4>
      <h4>Price: {player.price}M</h4>
      <h3>
        {player.purchased ? (
          "Utilgengelig for kjøp"
        ) : (
          <button className="button">Kjøp Spiller</button>
        )}
      </h3>
    </article>
  );
};

export default FotballItem;
