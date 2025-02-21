const getAge = (person) => {
    person.yearOfDeath ??= new Date().getFullYear();

    return person.yearOfDeath - person.yearOfBirth

}

const findTheOldest = function(people) {
    people.sort((personA, personB) => getAge(personB) - getAge(personA));
    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
