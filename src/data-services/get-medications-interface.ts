import { MedicationInterface } from './medication-interface';

export interface GetMedicationsInterface {
  get(): Promise<MedicationInterface[]>;
  forId(id: string): Promise<MedicationInterface>;
}
