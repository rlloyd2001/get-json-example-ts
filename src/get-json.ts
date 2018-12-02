import { GetPrescriptionsTestData } from './data-services/test-data/get-prescriptions-test-data';
import { GetMedicationsTestData } from './data-services/test-data/get-medications-test-data';
import { GetPrescriptionUpdates } from './data-services/get-prescription-updates';
import { PrescriptionUpdatesFileFormatInterface } from './file-services/prescription-updates-file-format-interface';
import { SaveJsonFile } from './file-services/save-json-file';

createPrescriptionUpdatesJson();

async function createPrescriptionUpdatesJson() {
  const getPrescriptions = new GetPrescriptionsTestData();
  const prescriptions = await getPrescriptions.get();
  const getPrescriptionUpdates = new GetPrescriptionUpdates(new GetMedicationsTestData());
  const prescriptionUpdates = await getPrescriptionUpdates.from(prescriptions);
  const fileData: PrescriptionUpdatesFileFormatInterface = { prescription_updates: prescriptionUpdates };
  const saveJsonFile = new SaveJsonFile();
  saveJsonFile.withDateInName(fileData);
}

