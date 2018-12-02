import { GetPrescriptionUpdates } from './data-services/prescription-updates/getPrescriptionUpdates';
import { QueryMedications } from './data-services/medications/queryMedications';
import { PrescriptionUpdatesDataInterface } from './prescriptionUpdatesDataInterface';
import { SaveJsonFile } from './file-services/saveJsonFile';
import { GetMedicationsHttp } from './data-services/medications/getMedicationsHttp';
import { GetPrescriptionsHttp } from './data-services/prescriptions/getPrescriptionsHttp';

createPrescriptionUpdatesJson();

async function createPrescriptionUpdatesJson() {
  const getPrescriptionsHttp = new GetPrescriptionsHttp();
  const prescriptions = await getPrescriptionsHttp.get();
  const getMedicationsHttp = new GetMedicationsHttp();
  const getPrescriptionUpdates = new GetPrescriptionUpdates(new QueryMedications(getMedicationsHttp));
  const prescriptionUpdates = await getPrescriptionUpdates.from(prescriptions);
  const fileData: PrescriptionUpdatesDataInterface = { prescription_updates: prescriptionUpdates };
  const saveJsonFile = new SaveJsonFile();
  saveJsonFile.withDateInName(fileData);
}
