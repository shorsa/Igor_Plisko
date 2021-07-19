import jwt_decode from "jwt-decode"
import { TokenPayloadData } from "../models"
import { getAccessToken } from "./LocalStorage.helper"

export function getUserId(): string | null {
   const token: string | undefined = getAccessToken()


   if (!token) {
      return null
   }

   else {
      let decoded: TokenPayloadData = jwt_decode(token)
      return decoded.userId
   }
}

