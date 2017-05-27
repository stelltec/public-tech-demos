import { RentService as RentServiceInterface } from "../interfaces/services";

function getEnd(date: Date, days: number) {
  const end = new Date(date.toISOString());
  end.setDate(date.getDate() + days);
  return end;
}

export class RentService implements RentServiceInterface {

    public rentMoview(
        accoountId: string,
        movieId: string
    ) {

        const now = new Date();
        const end = getEnd(now, 2);

        return Promise.resolve({
            returnDate: new Date(),
            totalPrice: 0
        });

    }

}
