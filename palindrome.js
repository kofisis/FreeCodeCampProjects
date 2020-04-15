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