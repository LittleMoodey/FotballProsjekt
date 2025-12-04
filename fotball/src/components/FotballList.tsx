import { useState, useEffect } from "react";
import FotballService from "../services/FotballService";
import type { IFotball } from "../interfaces/IFotball";
import FotballItem from "./FotballItem";

const FotballList = () => {
  const [players, setPlayers] = useState<IFotball[]>([]);

  useEffect(() => {
    getAndSetAllFotballplayers();
  }, []);

  const getAndSetAllFotballplayers = async () => {
    const playerResponse = await FotballService.getAllPlayers();
    if (
      playerResponse.success == true &&
      playerResponse.data != null &&
      Array.isArray(playerResponse.data)
    ) {
      setPlayers(playerResponse.data);
    } else {
      // TODO: Feilmelding til bruker
    }
  };

  return (
    <section className="section">
      <h3 className="title xs-12">Fotball Players</h3>
      {players.map((player) => (
        <FotballItem key={player.id} player={player} />
      ))}
    </section>
  );
};
export default FotballList;
