import * as fs from 'fs';
import moment from 'moment';

export class SaveJsonFile {
  withDateInName(data: any) {
    const fileName = `prescription-updates-${moment().format('h-m-s')}.json`;
    fs.writeFile(fileName,  JSON.stringify(data), 'utf-8', (err) => {
      if (err) throw err;
      console.log(`${fileName} created!`);
    });
  }
}
