import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { UserMSG } from 'src/common/constants';
import { IUser } from 'src/common/interfaces/user.interface';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { UserDto } from './dto/user.dto';

@ApiTags('Users')
@Controller('api/v2/user')
export class UserController {

    constructor(private readonly clientProxy: ClientProxySuperFlights) {}

    private _clienteProxyUser = this.clientProxy.clientProxyUser()

    @Post()
    create(@Body() userDto: UserDto): Observable<IUser> {
        return this._clienteProxyUser.send(UserMSG.CREATE, userDto);
    }

    @Get()
    findAll(): Observable<IUser[]> {
        return this._clienteProxyUser.send(UserMSG.FIND_ALL, '');
    }

    @Get(':id')
    findOne(@Param('id') id: string): Observable<IUser> {
        return this._clienteProxyUser.send(UserMSG.FIND_ONE, id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDto: UserDto): Observable<IUser> {
        return this._clienteProxyUser.send(UserMSG.UPDATE, {id, userDto});
    }

    @Delete(':id')
    delete(@Param('id') id: string): Observable<any> {
        return this._clienteProxyUser.send(UserMSG.DELETE, id);
    }
}
