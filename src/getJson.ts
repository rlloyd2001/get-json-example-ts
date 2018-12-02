import { GetPrescriptionsTestData } from './data-services/test-data/getPrescriptionsTestData';
import { GetMedicationsTestData, testMeds } from './data-services/test-data/getMedicationsTestData';
import { GetPrescriptionUpdates } from './data-services/getPrescriptionUpdates';
import { QueryMedications } from './data-services/queryMedications';
import { PrescriptionUpdatesDataInterface } from './prescriptionUpdatesDataInterface';
import { SaveJsonFile } from './file-services/saveJsonFile';

createPrescriptionUpdatesJson();

async function createPrescriptionUpdatesJson() {
  const getPrescriptions = new GetPrescriptionsTestData();
  const prescriptions = await getPrescriptions.get();
  const getMedications = new GetMedicationsTestData(testMeds);
  const getPrescriptionUpdates = new GetPrescriptionUpdates(new QueryMedications(getMedications));
  const prescriptionUpdates = await getPrescriptionUpdates.from(prescriptions);
  const fileData: PrescriptionUpdatesDataInterface = { prescription_updates: prescriptionUpdates };
  const saveJsonFile = new SaveJsonFile();
  saveJsonFile.withDateInName(fileData);
}
