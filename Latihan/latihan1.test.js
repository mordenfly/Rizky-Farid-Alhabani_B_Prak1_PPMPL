
import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from './math.js';

describe('Pengujian Fungsi Matematika', function() {
    
    it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
        expect(tambah(2, 2)).to.equal(4);
    });
    it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
        expect(kali(2, 3)).to.equal(6);
    });
    it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
        expect(kurang(2, 2)).to.equal(0);
    });
    it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
        expect(bagi(6, 3)).to.equal(2);
    });
    it('seharusnya mengembalikan error saat membagi dengan 0', function() {
        expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
    });

    
    it('seharusnya mengembalikan -4 saat mengurangkan 2 - 6', function() {
        expect(kurang(2, 6)).to.equal(-4);
    });

    it('seharusnya mengembalikan -5 saat mengurangkan -3 - 2', function() {
        expect(kurang(-3, 2)).to.equal(-5);
    });

    it('seharusnya mengembalikan 5 saat mengurangkan 0 - (-5)', function() {
        expect(kurang(0, -5)).to.equal(5);
    });

    it('seharusnya mengembalikan error saat membagi dengan 0 (case negatif)', function() {
        expect(() => bagi(-4, 0)).to.throw('Tidak bisa membagi dengan nol');
    });
});
