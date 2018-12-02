import { MedicationInterface } from './medication-interface';
import { GetMedicationsInterface } from './get-medications-interface';

export class GetGenericMedicationSubstitute {
  constructor(public getMedications: GetMedicationsInterface) {}

  from(medication: MedicationInterface): Promise<MedicationInterface | null> {
    if (medication.generic) {
      return new Promise(resolve => resolve(null));
    }
    return this.getMedications.byRxcui(medication.rxcui).then((medications: MedicationInterface[]) => {
      return medications.find(medication => medication.generic) || null;
    });
  }
}