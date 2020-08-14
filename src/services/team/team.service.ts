import { Injectable, HttpService } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable } from 'rxjs';
import { Team } from 'src/controllers/models/Team';

const URL = 'http://localhost:3005/api/team/';

@Injectable()
export class TeamService {

    constructor(private http: HttpService, private firebaseService: FirebaseService) { }
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async modifyTeam (teamData, idTournament, idTeam) {

        let team: Team;
        this.findTeam(`${URL}${idTournament}/${idTeam}`).subscribe(data => {
            team = data.data;
            team.gamesPlayed += 1;
            team.goalsScored += teamData.goals_local;
            team.goalsConceded += teamData.goals_ops;
            team.goalDifference = team.goalsScored - team.goalsConceded;
            if(teamData.goals_local > teamData.goals_ops){
                team.wonMatches += 1;
                team.totalPoints += 3;
            } else if(teamData.goals_local === teamData.goals_ops){
                team.tiedMatches += 1;
                team.totalPoints += 1;
            }else if (teamData.goals_local < teamData.goals_ops)
                team.lostMatches += 1;
            return this.firebaseService.modifyElement(team, `/json/${idTournament}/teams/${idTeam}`);
        });
    }

    findTeam(url): Observable<any> {
        return this.http.get(url);
    }
}
