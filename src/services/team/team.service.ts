import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class TeamService {

    constructor(private firebaseService: FirebaseService) { }
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async modifyTeam (team, idTournament, idteam) {
        return await this.firebaseService.modifyElement(team, `/json/${idTournament}/teams/${idteam}`);
    }
}
