import { GetMedicationsInterface } from './getMedicationsInterface';
import { MedicationInterface } from './medicationInterface';

export class QueryMedications {
  constructor(public getMedications: GetMedicationsInterface) {
  }

  byRxcui(rxcui: string): Promise<MedicationInterface[]> {
    return this.getMedications.get().then((medications) => {
      return medications.filter(medication => medication.rxcui === rxcui && medication.active);
    });
  }

  forId(id: string): Promise<MedicationInterface> {
    return this.getMedications.forId(id);
  }
}