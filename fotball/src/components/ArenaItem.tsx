import type { IArena } from "../interfaces/IArena";

const ArenaItem = ({ arena }: { arena: IArena }) => {
  return (
    <article className="glassDiv itemCard xs-12">
      <h2 className="bold">{arena.arenaName}</h2>
      <img
        className="img-responsive"
        src={`http://localhost:5212/arenaimg/${arena.arenaImage}`}
        alt="arena"
        style={{ width: "600px" }}
      />
      <h4>Id: {arena.id}</h4>
      <h4>Capacity: {arena.capasity}</h4>
    </article>
  );
};
export default ArenaItem;
