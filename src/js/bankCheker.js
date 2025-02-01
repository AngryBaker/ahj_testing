export default function bankCheker(value) {
  const number = value.toString();

  if (number[0] === "6") {
    return ".discover";
  } else if (number[0] === "5") {
    return ".master-card";
  } else if (number[0] === "4") {
    return ".visa";
  } else if (number[0] === "2" && number[1] === "2") {
    return ".mir";
  } else if (number[0] === "3" && number[1] === "5") {
    return ".jcb";
  } else if ((number[0] === "3" && number[1] === "4") || number[1] === "7") {
    return ".american-express";
  } else if (number[0] === "3") {
    return ".diners";
  }
}
