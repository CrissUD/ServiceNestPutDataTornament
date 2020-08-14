import { Controller, Put, Body, Param } from '@nestjs/common';
import { TeamService } from 'src/services/team/team.service';

@Controller('team')
export class PutTeamDataController {

    constructor (private teamService: TeamService) {}
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Put('/:idTournament/:idTeam')
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    modifyTornero(@Body() tournament, @Param('idTournament') idTournament, @Param('idTeam') idTeam) {
        return this.teamService.modifyTeam(tournament, idTournament, idTeam);
    }
}
