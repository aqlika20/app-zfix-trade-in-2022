import { HttpHeaders } from "@angular/common/http";

export const apiUrl = "https://zfix.id/api/v2/";

export const tokenKey = "auth-token";

export const membershipActivationKey = "membership-activation";

export function setToken(token) {
  return new HttpHeaders().append("Authorization", "Bearer " + token);
}
