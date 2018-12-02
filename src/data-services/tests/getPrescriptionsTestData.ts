import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetPrescriptionsInterface } from '../prescriptions/getPrescriptionsInterface';
import { PrescriptionInterface } from '../prescriptions/prescriptionInterface';

const testPrescriptions = [
  {
    "id": "562cddf76238310003020000",
    "medication_id": "562cddb86238310003010000",
    "created_at": "2015-10-25T13:49:43.728Z",
    "updated_at": "2015-10-25T13:49:43.728Z"
  },
  {
    "id": "562cde1d6238310003030000",
    "medication_id": "562cdd706238310003000000",
    "created_at": "2015-10-25T13:50:21.550Z",
    "updated_at": "2015-10-25T13:50:21.550Z"
  }
];

export class GetPrescriptionsTestData implements GetPrescriptionsInterface{
  get(): Promise<PrescriptionInterface[]> {
    return timer().pipe(
      map(() => {
        return testPrescriptions;
      })
    ).toPromise();
  }
}
