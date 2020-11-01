// const util = {

//     // Check employee array to find item matching in search
//     searchEmployees: (value, empArray) => {
//         let queriedEmp = empArray.filter((emp) => {
//             return emp.firstName.toLowerCase().includes(value.toLowerCase()) ||
//             emp.lastName.toLowerCase().includes(value.toLowerCase()) ||
//             emp.phone.toLowerCase().includes(value.toLowerCase()) ||
//             emp.email.toLowerCase().includes(value.toLowerCase())
//         })
//         return queriedEmp;
//     },

//     // Function to compare values in array and sort by ascend or decend
//     compareValues: (key, order = "asc") => {
//         return function compare(a, b) {
//             // Using toUpperCase to ignore char casing
//             const optionA = a[key].toUpperCase();
//             const optionB = b[key].toUpperCase();

//             let comparison = 0;
//             if (optionA > optionB) {
//                 comparison = 1;
//             } else if (optionA < optionB) {
//                 comparison = -1;
//             }
//             return (
//                 (order === "desc") ? (comparison * -1) : comparison
//             );
//         };
//     }
// }

// export { util }