import { MedicationInterface } from './medication-interface';

export interface GetMedicationsInterface {
  byRxcui(rxcui: string): Promise<MedicationInterface[]>;
  forId(id: string): Promise<MedicationInterface>;
}
