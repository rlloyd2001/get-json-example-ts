import { PrescriptionInterface } from './prescription-interface';

export interface GetPrescriptionsInterface {
  get(): Promise<PrescriptionInterface[]>;
}
