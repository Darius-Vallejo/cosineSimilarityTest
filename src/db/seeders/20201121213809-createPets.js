const pets = [
  ['Odin', 3000000, 300, 100, 500, 'akitajapones.jpg'],
  ['Orion', 1000000, 200, 80, 500, 'basset_hound.jpg'],
  ['Lucas', 500000, 200, 80, 500, 'beagle.jpg'],
  ['Maxell', 600000, 200, 50, 400, 'BichonBolones.jpg'],
  ['Apolo', 600000, 300, 100, 200, 'border_collie.jpg'],
  ['Josue', 300000, 300, 50, 300, 'border_terrier.jpg'],
  ['Mateo', 2000000, 200, 4500, 200, 'bostonTerrier.jpg'],
  ['Martina', 1000000, 400, 6500, 500, 'boxer.jpg'],
  ['Roko', 1500000, 200, 50, 400, 'bulldog.jpg'],
  ['Coco', 500000, 300, 90, 400, 'BullTerrier.jpg'],
  ['Odisea', 300000, 100, 78, 300, 'Chihuahua.jpg'],
  ['Atenea', 1000000, 200, 70, 300, 'Corgi.jpg'],
  ['Franco', 800000, 400, 100, 200, 'Doberman.jpg'],
  ['Yoda', 500000, 100, 60, 200, 'frenchbull.jpg'],
  ['Romeo', 500000, 300, 120, 400, 'GoldenRetriever.jpg'],
  ['Emilio', 1000000, 300, 120, 400, 'HuskySiberiano.jpg'],
  ['Martin', 1000000, 300, 100, 300, 'Labrador.jpg'],
  ['Genius', 1200000, 500, 180, 500, 'Pastoraleman.jpg'],
  ['Rocky', 500000, 400, 180, 500, 'PastorCollie.jpg'],
  ['Romulo', 450000, 200, 78, 200, 'Perrosalchicha.jpg'],
  ['Res', 780000, 300, 150, 300, 'PitbullCafe.jpg'],
  ['Tomas', 860000, 300, 120, 300, 'PitbullTerrier.jpg'],
  ['Felicia', 570000, 200, 6500, 300, 'pomerania.jpg'],
  ['Jeremias', 1100000, 400, 200, 200, 'Rottweiler.jpg'],
  ['Jocker', 1400000, 500, 220, 200, 'Schnauzergigante.jpg'],
  ['Mostacho', 890000, 200, 78, 200, 'SchnauzerMiniatura.jpg'],
  ['Godin', 420000, 300, 80, 300, 'sharpei.jpg'],
  ['Winter', 1600000, 500, 300, 200, 'Terranova.jpg'],
  ['Lupita', 2000000, 200, 78, 500, 'yorkshireTerrier.jpg'],
  ['Lucas', 500000, 200, 78, 500, 'Beagle2.jpg'],
  ['Elias', 500000, 200, 78, 200, 'Buldog.jpg'],
  ['Manuel', 100000, 200, 78, 300, 'Criollo.jpg'],
  ['Pedro', 100000, 200, 78, 500, 'Criollo2.jpg'],
  ['Elias', 100000, 200, 78, 500, 'Criollo3.jpg'],
  ['Geremias', 100000, 200, 78, 400, 'Criollo4.jpg'],
  ['Homero', 100000, 200, 78, 300, 'Criollo5.jpg'],
  ['Bar', 100000, 200, 78, 300, 'Criollo7.jpg'],
  ['Roswel', 100000, 200, 78, 300, 'Criollo8.jpg'],
  ['Zeus', 100000, 400, 100, 200, 'Doberman2.jpg'],
  ['Lisa', 500000, 200, 120, 300, 'Golden.jpg'],
  ['Tobi', 1000000, 400, 120, 400, 'Lobo.jpg'],
  ['Bar', 780000, 300, 150, 300, 'PitbulCafe.jpg'],
  ['Matias', 600000, 300, 78, 400, 'Pitbull.jpg'],
  ['Rambo', 730000, 400, 78, 200, 'Pitbullnegro.jpg'],
  ['Samuel', 1500000, 200, 78, 300, 'Pug.jpg'],
  ['Neron', 2000000, 500, 300, 500, 'Sanbernardo.jpg'],
  ['Niko', 300000, 200, 78, 200, 'chihuahua3.jpg'],
  ['Joel', 800000, 400, 180, 300, 'Labradorcafe.jpg'],
  ['Thor', 800000, 400, 180, 200, 'labrador-negro.jpg'],
  ['Loky', 1100000, 200, 120, 500, 'bulldog4.jpg'],
  ['Chiqui', 300000, 200, 65, 500, 'BeaglePequeño.jpg'],
  ['Chispa', 250000, 200, 65, 200, 'Boston.jpg'],
  ['Rayo', 400000, 200, 65, 200, 'BulldogPeque.jpg'],
  ['Chiko', 380000, 200, 60, 300, 'Chihuahua.jpg'],
  ['Luna', 620000, 200, 65, 300, 'Pomerania.jpg'],
  ['Lola', 370000, 200, 65, 200, 'SchnauzerMini.jpg'],
  ['Nina', 300000, 200, 60, 500, 'Shihtzu.jpg'],
  ['Simba', 410000, 200, 65, 500, 'Spaniel.jpg'],
  ['Coco', 350000, 200, 65, 400, 'Terrier.jpg'],
  ['Bimba', 600000, 200, 68, 500, 'Yorki.jpg'],
  ['Sultan', 1000000, 300, 120, 300, 'AmericanStaffTerrier.jpg'],
  ['Chulo', 900000, 300, 110, 500, 'Beagle.jpg'],
  ['Agus', 1100000, 300, 120, 500, 'Bassethound.jpg'],
  ['Maxto', 780000, 300, 90, 200, 'BorderCollie.jpg'],
  ['Enzo', 930000, 300, 120, 300, 'BoxerCafe.jpg'],
  ['Ivan', 980000, 300, 120, 300, 'BullTerrierCafe.jpg'],
  ['Brenda', 1000000, 300, 100, 400, 'Caniche.jpg'],
  ['Perla', 750000, 300, 95, 300, 'Chowchow.webp'],
  ['Mina', 735000, 300, 110, 300, 'CockerSpaniel.jpg'],
  ['Hulk', 1100000, 300, 120, 100, 'Dalmata.jpg'],
  ['Duque', 1330000, 300, 145, 100, 'huskySiberiano.jpg'],
  ['Patas', 1400000, 300, 140, 300, 'LabradorChocolate.jpg'],
  ['Leo', 8750000, 300, 120, 300, 'Sharpei.webp'],
  ['Dolly', 810000, 400, 125, 200, 'Akita.jpg'],
  ['Musa', 815000, 400, 142, 500, 'Boyero.jpg'],
  ['Zar', 820000, 400, 155, 300, 'Braco.jpg'],
  ['Sol', 825000, 400, 160, 500, 'ColliePelocorto.jpg'],
  ['Elite', 830000, 400, 200, 500, 'ColliePeloLargo.jpg'],
  ['Maicol', 840000, 400, 175, 200, 'Dogo.jpg'],
  ['Nicolas', 850000, 400, 200, 300, 'Fila-brasileiro.jpg'],
  ['Intel', 900000, 400, 115, 200, 'GranDanes.jpg'],
  ['Core', 980000, 400, 156, 300, 'LabradorRetriever.jpg'],
  ['Javier', 960000, 400, 147, 500, 'Malamute.jpg'],
  ['Zoe', 970000, 400, 130, 200, 'Mastin.jpg'],
  ['Mastel', 1000000, 400, 135, 400, 'Pachon.jpg'],
  ['Mastil', 750000, 400, 160, 500, 'Pastor.jpg'],
  ['Pastelito', 840000, 400, 165, 300, 'PastorBelga.jpg'],
  ['Caramelo', 890000, 400, 170, 200, 'Rottweiler.webp'],
  ['Sol', 1200000, 400, 175, 500, 'SanBenardo.jpg'],
  ['Zorro', 1300000, 400, 120, 200, 'Terranova.jpg'],
  ['Rexing', 620000, 400, 125, 100, 'weimaraner.jpg'],
];

module.exports = {
  up: (queryInterface) => {
    return queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.sequelize.query(
        `INSERT INTO "pets" ("name", "price", "size", "area", "color", "path", "createdAt", "updatedAt") VALUES ${pets.map(
          () => '(?)',
        )}`,
        {
          replacements: pets.map((e) => [...e, new Date(), new Date()]),
        },
        { transaction },
      );
    });
  },

  down: () => {},
};
