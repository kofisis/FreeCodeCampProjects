<<<<<<< HEAD
function palindrome(str) {

    //replace non-alphanumerics with space and convert to lowercase
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str // the reversed of the above
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
  }
=======
function palindrome(str) {

    //replace non-alphanumerics with space and convert to lowercase
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str // the reversed of the above
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
  }
>>>>>>> 391afcf2f95094717fe37b8a8a4496341ef960f6
