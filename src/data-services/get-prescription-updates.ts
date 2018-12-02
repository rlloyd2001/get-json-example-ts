import { PrescriptionInterface } from './prescription-interface';
import { PrescriptionUpdateInterface } from './prescription-update-interface';
import { GetGenericMedicationSubstitute } from './get-generic-medication-substitute';
import { MedicationInterface } from './medication-interface';
import { QueryMedications } from './query-medications';

export class GetPrescriptionUpdates {
  constructor(public queryMedications: QueryMedications) { }

  from(prescriptions: PrescriptionInterface[]): Promise<PrescriptionUpdateInterface[]> {
    const getGeneric = new GetGenericMedicationSubstitute(this.queryMedications);
    const updates: PrescriptionUpdateInterface[] = [];
    const promises: Promise<any>[] = [];
    prescriptions.forEach((prescription: PrescriptionInterface) => {
      const promise = this.queryMedications.forId(prescription.medication_id)
        .then((medication: MedicationInterface) => {
          return getGeneric.from(medication);
        })
        .then((generic: MedicationInterface) => {
          if (!generic) { return true; }
          const update: PrescriptionUpdateInterface = {
            prescription_id: prescription.id,
            medication_id: generic.id,
          };
          updates.push(update);
          return true;
        });
      promises.push(promise);
    });
    return Promise.all<any>(promises).then(() => updates);
  }
}
