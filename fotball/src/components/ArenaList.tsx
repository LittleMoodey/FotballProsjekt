import { useState, useEffect } from "react";
import FotballService from "../services/FotballService";
import type { IArena } from "../interfaces/IArena";
import ArenaItem from "./ArenaItem";

const ArenaList = () => {
  const [arenas, setArenas] = useState<IArena[]>([]);

  useEffect(() => {
    getAndSetAllArenas();
  }, []);

  const getAndSetAllArenas = async () => {
    const arenaResponse = await FotballService.getAllArenas();
    if (
      arenaResponse.success == true &&
      arenaResponse.data != null &&
      Array.isArray(arenaResponse.data)
    ) {
      setArenas(arenaResponse.data);
    } else {
      //Todo?
    }
  };

  return (
    <section className="section">
      <h3 className="title xs-12">Arenas</h3>
      {arenas.map((arena) => (
        <ArenaItem key={arena.id} arena={arena} />
      ))}
    </section>
  );
};
export default ArenaList;
