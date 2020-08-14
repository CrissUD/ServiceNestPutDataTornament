import { Injectable } from '@nestjs/common';

import * as firebase from "firebase-admin";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require("../../../soccerCup.json");

@Injectable()
export class FirebaseService {

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async modifyElement (element, url) {
        await firebase.database().ref(url).set(element);
    }
}
