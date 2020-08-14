import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class MatchService {

    constructor(private firebaseService: FirebaseService) { }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async modifyMatch(match, idTournament, idMatch) {
        return await this.firebaseService.modifyElement(match, `/json/${idTournament}/matches/${idMatch}`);
    }
}
