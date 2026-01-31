
  // GLOBAL VARIABLE
  // This variable is global because it is declared outside any block or function

  var globalNumber = 10;
  console.log("Global variable value:", globalNumber);


  // BLOCK VARIABLE
  // This variable only exists inside this block

  {
    let blockNumber = 5;
    console.log("Block variable value:", blockNumber);
  }


  // MATHEMATICAL OPERATIONS

  let sum = globalNumber + 15;
  let product = globalNumber * 2;
  console.log("Sum:", sum);
  console.log("Product:", product);


  // STRING VARIABLE
  // This variable stores text

  let message = "Hello from JavaScript!";
  console.log("String variable:", message);


  // OBJECT VARIABLE (using const)

  const student = {
    name: "Jakoby",
    course: "Web Development",
    year: 2026
  };

  console.log("Object variable:", student);
  console.log("Student name:", student.name);

