export interface MedicationInterface {
  id: string;
  ndc: string;
  rxcui: string;
  description: string;
  generic: boolean;
  active: boolean;
  created_at: string;
  updated_at: string;
}
