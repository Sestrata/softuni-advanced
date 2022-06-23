let properties = {
    name: 'string',
    age: 'number',
    birthday: 'object'
};
let repository = new Repository(properties);
let entity = {
    name:'Pesho',
    age: 22,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity);
repository.add(entity);
console.log(repository.degId(0));
console.log(repository.degId(1));
entity = {
    name: 'Gosho',
    age: 22,
    birthday:new Date (1998, 0, 7)
};
repository.update(1,entity);
console.log(repository.getId(1));
repository.del(0);
console.log(repository.count);

module.exports = { properties };
