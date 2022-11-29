import got from 'got';
import { AES } from './aes';

export abstract class Codeforces {
  private static async getHomepage() {
    const cf = await got('https://codeforces.com/');
    return cf.body;
  }

  private static async getAESParameters() {
    const homepage = await Codeforces.getHomepage();
    const params = homepage.matchAll(/toNumbers\(\"([\d\w]*)\"\)/g);
    const [a, b, c] = [...params].map((e) => e[1]);
    return { a, b, c };
  }

  static async getRCPCValue() {
    const { a, b, c } = await this.getAESParameters();
    return AES.decrypt(c, a, b);
  }

  static async hasRedirection(): Promise<boolean> {
    const homepage = await Codeforces.getHomepage();
    return homepage.includes('Redirecting');
  }
}
