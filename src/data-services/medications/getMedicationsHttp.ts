import { GetMedicationsInterface } from './getMedicationsInterface';
import { MedicationInterface } from './medicationInterface';
import { apiSettings } from '../../config/apiSettings';
import { httpGetJson } from '../dataServicesUtils';

export class GetMedicationsHttp implements GetMedicationsInterface {
  forId(id: string): Promise<MedicationInterface> {
    return httpGetJson(`${apiSettings.medicationsUrl}/${id}`);
  }

  byRxcui(rxcui: string): Promise<MedicationInterface[]> {
    return httpGetJson(`${apiSettings.medicationsUrl}?rxcui=${rxcui}`);
  }
}
