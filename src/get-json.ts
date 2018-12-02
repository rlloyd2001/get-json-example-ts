import { GetPrescriptionsTestData } from './data-services/test-data/get-prescriptions-test-data';
import { GetMedicationsTestData, testMeds } from './data-services/test-data/get-medications-test-data';
import { GetPrescriptionUpdates } from './data-services/get-prescription-updates';
import { PrescriptionUpdatesDataInterface } from './prescription-updates-data-interface';
import { SaveJsonFile } from './file-services/save-json-file';
import { QueryMedications } from './data-services/query-medications';

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

