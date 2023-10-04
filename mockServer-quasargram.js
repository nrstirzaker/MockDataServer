const { faker } = require('@faker-js/faker');
module.exports = function generate() {

    const _ = require('lodash');
    const {DateTime} = require('luxon');
    return {
        users:  [

            {
                _id: 'ef0a908e-c3b9-4c31-b375-0d671cf00e5e',
                firstName : 'Pete',
                lastName: 'Hewlett',
                userName: '@PeteHewlett',
                avatar: faker.image.avatar()
            }
        ],
        posts: _.times(50, function () {
            return {
                _id: faker.string.uuid(),
                postedBy:'ef0a908e-c3b9-4c31-b375-0d671cf00e5e',
                postedDate: createPastDate(),
                eventDate: faker.date.between({
                    from: DateTime.now().plus({weeks: 1}).milliseconds,
                    to: DateTime.now().plus({weeks: 3}).milliseconds
                }),
                photo: {url:faker.image.url()},
                comments: [{
                    _id: faker.string.uuid(),
                    comment: faker.word.words({count: {min: 5, max: 10}}),
                    username: createUsername(),
                    taggedUsers: [
                        createUsername(),
                        createUsername()
                    ]
                }],
                likedBy: [
                    createUsername(),
                    createUsername()
                ]
            }
        })

    }
}

function createUsername(){
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return firstName.charAt(0).toUpperCase() + firstName.slice(1) + lastName.charAt(0).toUpperCase() + lastName.slice(1)

}

function createPastDate(){

    return faker.date.between(
        faker.date.past({ years: 1 })
    )
}
