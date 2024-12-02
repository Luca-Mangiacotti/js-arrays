const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers)
const reversedTeachers = teachers.reverse() 
console.log(teachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
let n = 0;
for(let i = 0 ; i < teachers.length; i++){
  const currentName = teachers[i]
  const currentNameLeng = currentName.length;
  
  if(currentNameLeng >= 5){
      longNames[n] == longNames.push(currentName)
      n ++
  }

}
console.log(`i nomi lunghi sono: ${longNames}`)


// 3. Rimuovi 'Ed' dall'array teachers

const delTeacher = teachers.indexOf('Ed')
teachers.splice(delTeacher,1)
console.log(teachers)