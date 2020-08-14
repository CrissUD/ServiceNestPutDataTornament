import { Controller, Put, Body, Param } from '@nestjs/common';
import { MatchService } from 'src/services/match/match.service';

@Controller('put-match-data')
export class PutMatchDataController {

    constructor (private matchService: MatchService) {}
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Put('/:idTournament/:idMatch')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    modifyTornero(@Body() tournament, @Param('idTournament') idTournament, @Param('idMatch') idMatch) {
        return this.matchService.modifyMatch(tournament, idTournament, idMatch);
    }
}
