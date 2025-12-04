import axios from "axios";
import type { IFotball } from "../interfaces/IFotball";
import type { IArena } from "../interfaces/IArena";
import type { ICompany } from "../interfaces/ICompany";

const baseUrl = "http://localhost:5212/fotball";

const playersEndpoint = "/players";
const arenasEndpoint = "/arenas";
const companyEndpoint = "/companybooks";

//SPILLERE
interface IPlayerResponsList {
  success: boolean;
  data: IFotball[] | null;
}

const getAllPlayers = async (): Promise<IPlayerResponsList> => {
  try {
    const playerResponse = await axios.get(baseUrl + playersEndpoint);
    return {
      success: true,
      data: playerResponse.data,
    };
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

interface IDefultPlayerResponse {
  success: boolean;
}

const postNewPlayer = async (
  newPlayer: IFotball
): Promise<IDefultPlayerResponse> => {
  try {
    const playerResponse = await axios.post(
      baseUrl + playersEndpoint,
      newPlayer
    );
    return {
      success: true,
    };
  } catch {
    return { success: false };
  }
};

//ARENAER
interface IArenaResponsList {
  success: boolean;
  data: IArena[] | null;
}
const getAllArenas = async (): Promise<IArenaResponsList> => {
  try {
    const arenaResponse = await axios.get(baseUrl + arenasEndpoint);
    return {
      success: true,
      data: arenaResponse.data,
    };
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

//FIRMA
interface ICompanyResponsList {
  success: boolean;
  data: ICompany[] | null;
}
const getAllCompanyBooks = async (): Promise<ICompanyResponsList> => {
  try {
    const companyResponse = await axios.get(baseUrl + companyEndpoint);
    return {
      success: true,
      data: companyResponse.data,
    };
  } catch {
    return {
      success: false,
      data: null,
    };
  }
};

export default {
  getAllPlayers,
  getAllArenas,
  getAllCompanyBooks,
  postNewPlayer,
};
