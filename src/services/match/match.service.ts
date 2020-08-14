import { Injectable, HttpService } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable } from 'rxjs';
import { Match } from 'src/controllers/models/Match';

const URL = 'http://localhost:3005/api/match/';

@Injectable()
export class MatchService {

    constructor(private http: HttpService, private firebaseService: FirebaseService) { }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async modifyMatch(matchData, idTournament, idMatch) {
        let match: Match;
        this.findMatch(`${URL}${idTournament}/${idMatch}`).subscribe(data => {
            match = data.data;
            match.goals_team1 = matchData.goals_team1;
            match.goals_team2 = matchData.goals_team2;
            match.isPlayed = true;
            return this.firebaseService.modifyElement(match, `/json/${idTournament}/matches/${idMatch}`);
        });
    }

    findMatch(url): Observable<any> {
        return this.http.get(url);
    }
}
