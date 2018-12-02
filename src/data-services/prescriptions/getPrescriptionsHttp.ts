import { GetPrescriptionsInterface } from './getPrescriptionsInterface';
import { PrescriptionInterface } from './prescriptionInterface';
import { httpGetJson } from '../dataServicesUtils';
import { apiSettings } from '../../config/apiSettings';

export class GetPrescriptionsHttp implements GetPrescriptionsInterface {
  get(): Promise<PrescriptionInterface[]> {
    return httpGetJson(`${apiSettings.prescriptionsUrl}`);
  }
}
