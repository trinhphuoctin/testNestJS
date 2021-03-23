import { Controller, Get, Post, Delete ,Put, Body,Param, Query} from '@nestjs/common';

import { CarService} from './car.service';
import { Car } from './car.dto';

@Controller('car')
export class CarController {
    constructor (private carService: CarService){}
    @Get()
    public getCars(){
        return this.carService.getCars();
    }
    @Post()
    public postCar(@Body() car: Car){
        return this.carService.postCar(car);
    }

    @Get(':id')
    public async getCarById(@Param('id') id:string){
        return this.carService.getCarById(id);
    }

    @Delete()
    public async deleteCarById(@Param('id') id:string){
        this.carService.deleteCarById(id);
    }

    @Put()
    public async putCarById(@Param('id') id:string, @Query() query){
        const propertyName= query.property_name;
        const propertyValue=query.property_value;
        return this.carService.putCarById(id, propertyName, propertyValue);
    }


}
