import { RentService as RentServiceInterface } from "../interfaces/services";

export class RentService implements RentServiceInterface {

    public rentMoview(
        movieId: string, 
        startDate: Date,
        numberOfDays: number,
        charge: boolean
    ) {
        return Promise.resolve({
            returnDate: new Date(),
            totalPrice: 0
        });
    }

}
