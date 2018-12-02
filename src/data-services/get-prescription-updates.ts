import { PrescriptionInterface } from './prescription-interface';
import { GetMedications } from './get-medications';

export class GetPrescriptionUpdates {
  constructor(public getMedications: GetMedications) { }

  from(prescriptions: PrescriptionInterface[]): Promise<PrescriptionInterface[]> {
    return null;
  }
}

