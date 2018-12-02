import { GetMedicationsInterface } from './get-medications-interface';
import { MedicationInterface } from './medication-interface';

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