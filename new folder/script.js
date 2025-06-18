// Check Palindrome or not ;

const car = 'toyota';
const rev = car.split('').reverse().join('');

if (car === rev) {
    console.log(true)
} else {
    console.log(false)
}