import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PutTeamDataController } from './controllers/put-team-data/put-team-data.controller';
import { PutMatchDataController } from './controllers/put-match-data/put-match-data.controller';
import { TeamService } from './services/team/team.service';
import { MatchService } from './services/match/match.service';

@Module({
  imports: [],
  controllers: [AppController, PutTeamDataController, PutMatchDataController],
  providers: [AppService, TeamService, MatchService],
})
export class AppModule {}
