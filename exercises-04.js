var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */

 function dataHandling2(input) {
   input.splice(4, 1, "Pria", "SMA Internasional Metro");
   input[1] += " Elsharawy";
   input[2] = "Provinsi " + input[2];
   console.log(input);

   var tanggal = input[3].split("/");
   var tanggal2 = input[3].split("/");;
   var bulan = parseInt(tanggal[1]);

   switch(bulan) {
    case 1: {
      bulan = 'Januari';
      break;
    }
    case 2: {
      bulan = 'Febuari';
      break;
    }
    case 3: {
      bulan = 'Maret';
      break;
    }
    case 4: {
      bulan = 'April';
      break;
    }
    case 5: {
      bulan = 'Mei';
      break;
    }
    case 6: {
      bulan = 'Juni';
      break;
    }
    case 7: {
      bulan = 'Juli';
      break;
    }
    case 8: {
      bulan = 'Agustus';
      break;
    }
    case 9: {
      bulan = 'September';
      break;
    }
    case 10: {
      bulan = 'Oktober';
      break;
    }
    case 11: {
      bulan = 'Nobember';
      break;
    }
    case 12: {
      bulan = 'Desember';
      break;
    }
    default: {
      bulan = "Error!";
    }
  }

  console.log(bulan);
  console.log(tanggal.sort(function(a,b) {
    return parseInt(a) < parseInt(b);
  }));
  console.log(tanggal2.join("-"));
  console.log(input[1].slice(0, 15));

 }

 dataHandling2(input);
