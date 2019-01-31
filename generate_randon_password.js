  function generatePassword() {

    var fullPassword = "";

    function generateLowerCase() {
        var arrayLowerCase = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122];
         var string_length = 1;
          var randomStringLower = '';
           for (var i=0; i<string_length; i++) {
               var rnum = Math.floor(Math.random() * arrayLowerCase.length);
                 randomStringLower += String.fromCharCode(arrayLowerCase[rnum, rnum+1]);
               }
               return randomStringLower;
             }

             var stringLower = generateLowerCase();

      function generateUpperCase() {
        var arrayUpperCase = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,84, 85, 86, 87, 88, 89, 90];
          var string_length = 1;
            var randomStringUpper = '';
              for (var i=0; i<string_length; i++) {
                var rnum = Math.floor(Math.random() * arrayUpperCase.length);
                  randomStringUpper += String.fromCharCode(arrayUpperCase[rnum, rnum+1]);
                }
                return randomStringUpper;
              }

              var stringUpper = generateUpperCase();

      function generateNumber() {
        var arrayNumber = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
          var string_length = 2;
            var randomStringNumber = '';
              for (var i=0; i<string_length; i++) {
                var rnum = Math.floor(Math.random() * arrayNumber.length);
                  randomStringNumber += String.fromCharCode(arrayNumber[rnum, rnum+1]);
                }
                return randomStringNumber;
              }

              var stringNumber = generateNumber();

      function generateSpecial() {
        var arraySpecial = [33, 35, 36, 37, 38, 40, 41, 42, 43];
          var string_length = 1;
            var randomStringSpecial = '';
              for (var i=0; i<string_length; i++) {
                var rnum = Math.floor(Math.random() * arraySpecial.length);
                  randomStringSpecial += String.fromCharCode(arraySpecial[rnum, rnum+1]);
                }
                return randomStringSpecial;
              }

              var stringSpecial = generateSpecial();

      function generateResto(){
        var arrayResto = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 33, 35, 36, 37, 38, 40, 41, 42, 43];
          var string_length = 3;
            var randomStringResto = '';
              for (var i=0; i<string_length; i++) {
                var rnum = Math.floor(Math.random() * arrayResto.length);
                  randomStringResto += String.fromCharCode(arrayResto[rnum, rnum+1]);
                }
                return randomStringResto;
              }

              var stringResto = generateResto();

          var fullPassword = stringLower + stringUpper + stringNumber + stringSpecial + stringResto;

          return fullPassword;
  };

  var fullStringPass = generatePassword();

  console.log(fullStringPass);
