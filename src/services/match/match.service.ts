import { Injectable, HttpService } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3005/api/match/';

@Injectable()
export class MatchService {

    constructor(private http: HttpService, private firebaseService: FirebaseService) { }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async modifyMatch(matchData, idTournament, idMatch) {
        console.log(`${URL}${idTournament}/${idMatch}`);
        this.findMatch(`${URL}${idTournament}/${idMatch}`).subscribe(data => {
            console.log(data.data);
        });
        // return await this.firebaseService.modifyElement(match, `/json/${idTournament}/matches/${idMatch}`);
    }

    findMatch(url): Observable<any> {
        return this.http.get(url);
    }
}
