import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { PassengerMSG } from 'src/common/constants';
import { IPassanger } from 'src/common/interfaces/passanger.interface';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { PassangerDTO } from './dto/passanger.dto';

@ApiTags('Passenger')
@Controller('api/v2/passenger')
export class PassengerController {

    constructor(private readonly clientProxy: ClientProxySuperFlights) {}

    private _clientProxyPassenger = this.clientProxy.clientProxyPassenger()

    @Post()
    create(@Body() passangerDTO: PassangerDTO): Observable<IPassanger> {
        return this._clientProxyPassenger.send(PassengerMSG.CREATE, passangerDTO);
    }

    @Get()
    findAll(): Observable<IPassanger[]> {
        return this._clientProxyPassenger.send(PassengerMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IPassanger> {
        return this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() passangerDTO: PassangerDTO): Observable<IPassanger> {
        return this._clientProxyPassenger.send(PassengerMSG.UPDATE, {id, passangerDTO});
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clientProxyPassenger.send(PassengerMSG.DELETE, id);
    }
}
