import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { MedicationInterface } from './medication-interface';

const testMeds = [
  {
    "id": "562cdd706238310003000000",
    "ndc": "ecuzioqsigu",
    "rxcui": "12345",
    "description": "Acetaminophen 297 mg",
    "generic": true,
    "active": true,
    "created_at": "2015-10-25T13:47:28.572Z",
    "updated_at": "2015-10-25T13:47:28.572Z"
  },
  {
    "id": "562cddb86238310003010000",
    "ndc": "ufietuinycf",
    "rxcui": "12345",
    "description": "Tylenol 297 mg",
    "generic": false,
    "active": true,
    "created_at": "2015-10-25T13:48:40.516Z",
    "updated_at": "2015-10-25T13:48:40.516Z"
  }
];

export class GetMedications {
  static get(): Promise<MedicationInterface[]> {
    return timer(300).pipe(
      map(() => {
        return testMeds;
      })
    ).toPromise();
  }
}
