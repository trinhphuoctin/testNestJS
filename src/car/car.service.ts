import { Injectable, HttpException } from '@nestjs/common';

import { CARS } from './cars.mock';

@Injectable()
export class CarService {

    private cars = CARS;

    public getCars() {
        return this.cars;
    }

    public postCar(car) {
        return this.cars.push(car);
    }

    public getCarById(id: string): Promise<any> {
        const carId = String(id);
        return new Promise((resolve) => {
            const car = this.cars.find((car) =>String(car.id) === carId);
            if (!car) {
                throw new HttpException('Not Found', 404);
            }
            return resolve(car);
        });
    }

    public deleteCarById(id: string): Promise<any> {
        const carId = String(id);
        return new Promise((resolve) => {
            const index = this.cars.findIndex((car) =>String(car.id) === carId);
            if (index === -1) {
                throw new HttpException('Not Found', 404);
            }
            this.cars.splice(index, 1);
            return resolve(this.cars);
        });
    }

    public putCarById(id: string, propertyName: string, propertyValue: string) {
        const carId= String(id);
        return new Promise((resolve) => {
        const index = this.cars.findIndex((car) => String(car.id) === carId);
        if (index === -1) {
            throw new HttpException('Not Found', 404);
        }
        this.cars[index][propertyName] = propertyValue;
        return resolve(this.cars[index]);
        })
    }

}
