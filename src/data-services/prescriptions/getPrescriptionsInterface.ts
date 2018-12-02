import { PrescriptionInterface } from './prescriptionInterface';

export interface GetPrescriptionsInterface {
  get(): Promise<PrescriptionInterface[]>;
}
