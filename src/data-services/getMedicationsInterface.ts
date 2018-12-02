import { MedicationInterface } from './medicationInterface';

export interface GetMedicationsInterface {
  forId(id: string): Promise<MedicationInterface>;
  byRxcui(rxcui: string): Promise<MedicationInterface[]>;
}
