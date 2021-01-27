import faker from 'faker';
import { MarkerInfo } from './Map';

export class User implements MarkerInfo {
  name: string;
  public location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName() || faker.name.lastName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
