import http from 'http';

export function httpGetJson(url: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    http.get(url, (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });
      resp.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on('error', (err) => {
      reject(new Error(err.message));
    });
  });
}
