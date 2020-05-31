import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { response } from 'express';


@Controller('mensajes')
export class MensajesController {

    constructor(private mensajeService: MensajesService){}

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response){
        this.mensajeService.createMensaje(createMensajeDto).then(mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la creacion'});
        });
    }

    @Get()
    getAll(@Res() response){
        this.mensajeService.getAll().then(mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la obtencion de msj'});
        });
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje){
       this.mensajeService.updateMensaje(idMensaje, updateMensajeDto).then(mensaje=> {
           response.status(HttpStatus.OK).json(mensaje)
       }).catch(()=>{
         response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la ediccion de msj'});
       })
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idMensaje){
        this.mensajeService.deleteMensaje(idMensaje).then((result) => {
            response.status(HttpStatus.OK).json(result);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la eliminacion del msj'});
        });
    }


}

