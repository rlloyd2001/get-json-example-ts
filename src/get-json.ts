import { GetPrescriptions } from './data-services/get-prescriptions';
import { GetMedications } from './data-services/get-medications';
import { GetPrescriptionUpdates } from './data-services/get-prescription-updates';

createPrescriptionUpdatesJson();

async function createPrescriptionUpdatesJson() {
  const getPrescriptions = new GetPrescriptions();
  const prescriptions = await getPrescriptions.get();
  const getPrescriptionUpdates = new GetPrescriptionUpdates(new GetMedications());
  const prescriptionUpdates = await getPrescriptionUpdates.from(prescriptions);
  console.log('presc updates', JSON.stringify(prescriptionUpdates));
}
