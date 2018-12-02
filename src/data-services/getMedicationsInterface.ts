import { MedicationInterface } from './medicationInterface';

export interface GetMedicationsInterface {
  get(): Promise<MedicationInterface[]>;
  forId(id: string): Promise<MedicationInterface>;
}
