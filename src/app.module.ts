import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PutTeamDataController } from './controllers/put-team-data/put-team-data.controller';
import { PutMatchDataController } from './controllers/put-match-data/put-match-data.controller';
import { TeamService } from './services/team/team.service';
import { MatchService } from './services/match/match.service';
import { FirebaseService } from './services/firebase/firebase.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PutTeamDataController, PutMatchDataController],
  providers: [AppService, TeamService, MatchService, FirebaseService],
})
export class AppModule {}
