import { GetPrescriptions } from './data-services/get-prescriptions';
import { GetMedications } from './data-services/get-medications';

GetPrescriptions.get().then((values) => {
  console.log(JSON.stringify(values));
});
GetMedications.get().then((values) => {
  console.log(JSON.stringify(values));
});
