import FotballService from "../services/FotballService";
import { useRef, useState } from "react";
import type { IFotball } from "../interfaces/IFotball";

const FotballAdd = () => {
  const [statusMessage, setStatusMessage] =
    useState<string>("Legg til spillere!");

  const nameInput = useRef<HTMLInputElement | null>(null);
  const priceInput = useRef<HTMLInputElement | null>(null);
  const genderInput = useRef<HTMLInputElement | null>(null);

  const postNewPLayer = async () => {
    if (
      priceInput.current &&
      priceInput.current?.value != "" &&
      nameInput.current &&
      nameInput.current.value.trim() != "" &&
      genderInput.current &&
      genderInput.current.value.trim() != ""
    ) {
      const newPlayer: IFotball = {
        name: nameInput.current.value,
        image: "",
        gender: genderInput.current.value,
        price: Number(priceInput.current.value),
        purchased: false,
      };
      const playerResponse = await FotballService.postNewPlayer(newPlayer);

      if (playerResponse.success) {
        setStatusMessage(newPlayer.name + " er lagret! ");

        nameInput.current.value = "";
        priceInput.current.value = "";
        genderInput.current.value = "";
      } else {
        setStatusMessage(newPlayer.name + " - er ikke lagret!");

        nameInput.current.value = "";
        priceInput.current.value = "";
        genderInput.current.value = "";
      }
    } else {
      setStatusMessage("Du må fylle ut alle felter!");
    }
    setTimeout(() => {
      setStatusMessage("");
    }, 5000);
  };

  return (
    <section>
      <h3>Legg til ny spiller!</h3>
      <div>
        <label>Navn </label>
        <input ref={nameInput} className="input" type="text" />
      </div>
      <div>
        <label>Kjøpspris</label>
        <input ref={priceInput} className="input" type="number" />
      </div>
      <div>
        <label>Kjønn</label>
        <input ref={genderInput} className="input" type="text" />
      </div>
      <button onClick={postNewPLayer} className="button">
        Lagre
      </button>
      <p>{statusMessage}</p>
    </section>
  );
};
export default FotballAdd;
