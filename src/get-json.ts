import { GetPrescriptions } from './data-services/get-prescriptions';

GetPrescriptions.get().then((values) => {
  console.log(JSON.stringify(values));
});
