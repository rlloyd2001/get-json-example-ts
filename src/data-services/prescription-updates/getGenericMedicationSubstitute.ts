import { QueryMedications } from '../medications/queryMedications';
import { MedicationInterface } from '../medications/medicationInterface';

export class GetGenericMedicationSubstitute {
  constructor(public queryMedications: QueryMedications) {}

  from(medication: MedicationInterface): Promise<MedicationInterface | null> {
    if (medication.generic) {
      return new Promise(resolve => resolve(null));
    }
    return this.queryMedications.byRxcui(medication.rxcui).then((medications: MedicationInterface[]) => {
      return medications.find(medication => medication.generic) || null;
    });
  }
}
