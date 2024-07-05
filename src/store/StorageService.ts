import { jwtDecode } from "jwt-decode";
import { TUser } from "./StoreProvider";

export enum StorageKey {
  ACCESS_TOKEN = "ACCESS_TOKEN",
}

export class StorageService {
  public static setAccessToken(token: string) {
    localStorage.setItem(StorageKey.ACCESS_TOKEN, token);
  }

  public static getAccessToken() {
    return localStorage.getItem(StorageKey.ACCESS_TOKEN) || null;
  }

  public static removeAccessToken() {
    localStorage.removeItem(StorageKey.ACCESS_TOKEN);
  }

  public static getUser() {
    const accessToken = this.getAccessToken();

    return accessToken ? jwtDecode<TUser>(accessToken) : null;
  }
}
