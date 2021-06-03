import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { membershipActivationKey } from "../config/api";

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  constructor(private storage: Storage) { }

  setMembershipActivation(data) {
    this.storage.set(membershipActivationKey, data);
  }

  removeMembershipActivation() {
    this.storage.remove(membershipActivationKey);
  }
}
