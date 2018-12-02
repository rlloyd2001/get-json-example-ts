import { GetMedicationsInterface } from './getMedicationsInterface';
import { MedicationInterface } from './medicationInterface';

export class QueryMedications {
  private static promises = {} as any;

  constructor(public getMedications: GetMedicationsInterface) {}

  byRxcui(rxcui: string): Promise<MedicationInterface[]> {
    const key = `r-${rxcui}`;
    if (!!QueryMedications.promises[key]) { return QueryMedications.promises[key]; }
    const promise = this.getMedications.byRxcui(rxcui).then((medications) => {
      delete QueryMedications.promises[key];
      return medications.filter(medication => medication.active);
    });
    QueryMedications.promises[key] = promise;
    return promise;
  }

  forId(id: string): Promise<MedicationInterface> {
    const key = `i-${id}`;
    if (!!QueryMedications.promises[key]) { return QueryMedications.promises[key]; }
    const promise = this.getMedications.forId(id).then((value) => {
      delete QueryMedications.promises[key];
      return value;
    });
    QueryMedications.promises[key] = promise;
    return promise;
  }
}
