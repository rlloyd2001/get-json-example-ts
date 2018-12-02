import { expect } from 'chai';
import 'mocha';
import { GetMedicationsTestData, testMeds } from './getMedicationsTestData';
import { GetGenericMedicationSubstitute } from '../getGenericMedicationSubstitute';
import { QueryMedications } from '../queryMedications';
import { MedicationInterface } from '../medicationInterface';

describe('GetGenericMedicationSubstitute.from', () => {
  it('should find 1 match if not generic and has generic', async () => {
    const getMedications = new GetMedicationsTestData(testMeds);
    const getSubstitute = new GetGenericMedicationSubstitute(new QueryMedications(getMedications));
    const medication = await getSubstitute.from(testMeds[1]);
    expect(medication.id).to.equal('562cdd706238310003000000');
  });

  it('should find 0 match if generic', async () => {
    const getMedications = new GetMedicationsTestData(testMeds);
    const getSubstitute = new GetGenericMedicationSubstitute(new QueryMedications(getMedications));
    const medication = await getSubstitute.from(testMeds[0]);
    expect(medication).to.equal(null);
  });

  it('should find 0 match if not generic and has generic and not active', async () => {
    const meds: MedicationInterface[] = JSON.parse(JSON.stringify(testMeds));
    meds[0].active = false;
    const getMedications = new GetMedicationsTestData(meds);
    const getSubstitute = new GetGenericMedicationSubstitute(new QueryMedications(getMedications));
    const medication = await getSubstitute.from(meds[1]);
    expect(medication).to.equal(null);
  });
});
