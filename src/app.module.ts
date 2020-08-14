import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PutTeamDataController } from './controllers/put-team-data/put-team-data.controller';
import { PutMatchDataController } from './controllers/put-match-data/put-match-data.controller';

@Module({
  imports: [],
  controllers: [AppController, PutTeamDataController, PutMatchDataController],
  providers: [AppService],
})
export class AppModule {}
