import { GetPrescriptionsTestData } from './data-services/test-data/get-prescriptions-test-data';
import { GetMedicationsTestData } from './data-services/test-data/get-medications-test-data';
import { GetPrescriptionUpdates } from './data-services/get-prescription-updates';

createPrescriptionUpdatesJson();

async function createPrescriptionUpdatesJson() {
  const getPrescriptions = new GetPrescriptionsTestData();
  const prescriptions = await getPrescriptions.get();
  const getPrescriptionUpdates = new GetPrescriptionUpdates(new GetMedicationsTestData());
  const prescriptionUpdates = await getPrescriptionUpdates.from(prescriptions);
  console.log('presc updates', JSON.stringify(prescriptionUpdates));
}
