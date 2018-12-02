import { GetMedications } from './get-medications';
import { MedicationInterface } from './medication-interface';

export class GetGenericMedicationSubstitute {
  constructor(public getMedications: GetMedications) {
  }

  from(medication: MedicationInterface): Promise<MedicationInterface | null> {
    if (medication.generic) {
      return new Promise<MedicationInterface | null>(() => null);
    }
    return this.getMedications.byRxcui(medication.rxcui).then((medications: MedicationInterface[]) => {
      return medications.find(medication => medication.generic) || null;
    });
  }
}