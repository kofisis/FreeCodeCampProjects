function convertToRoman(num) {
    var decimalNumObj ={
      1:"I",
      2:"II",
      3:"III",
      4:"IV",
      5:"V",
      6:"VI",
      7:"VII",
      8:"VIII",
      9:"IX",
      10:"X",
      20:"XX",
      30:"XXX",
      40:"XL",
      50:"L",
      60:"LX",
      70:"LXX",
      80:"LXXX",
      90:"XC",
      100:"C",
      200:"CC",
      300:"CCC",
      400:"CD",
      500:"D",
      600:"DC",
      700:"DCC",
      800:"DCCC",
      900:"CM",
      1000:"M"
    }
    if(decimalNumObj.hasOwnProperty(num)){
      return decimalNumObj[num];
    }
     
    
            
      }
    
    console.log(convertToRoman(124));

    //Better solution
    var convertToRoman = function(num) {
        var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var romanNumeral = [
          "M",
          "CM",
          "D",
          "CD",
          "C",
          "XC",
          "L",
          "XL",
          "X",
          "IX",
          "V",
          "IV",
          "I"
        ];
      
        var romanized = "";
      
        for (var index = 0; index < decimalValue.length; index++) {
          while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
          }
        }
      
        return romanized;
      };
      
      // test here
      convertToRoman(36);
