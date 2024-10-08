import { expect } from 'chai';
import { tambah, kali } from './math.js';

describe('Pengujian Fungsi Matematika untuk Kasus Negatif', function() {

    
    it('seharusnya mengembalikan NaN jika salah satu input adalah string (untuk tambah)', function() {
        expect(tambah(2, 'string')).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika salah satu input adalah null (untuk tambah)', function() {
        expect(tambah(2, null)).to.be.NaN;
    });

    
    it('seharusnya mengembalikan NaN jika salah satu input adalah string (untuk kali)', function() {
        expect(kali(2, 'string')).to.be.NaN;
    });

    it('seharusnya mengembalikan NaN jika salah satu input adalah null (untuk kali)', function() {
        expect(kali(2, null)).to.be.NaN;
    });

});
