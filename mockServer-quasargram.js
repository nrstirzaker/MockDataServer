const { faker } = require('@faker-js/faker');
const {DateTime} = require("luxon");

module.exports = function generate() {

    const _ = require('lodash');
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
            let future1Week = createFutureDateByWeeks(1);
            let future3Weeks = createFutureDateByWeeks(3);
            return {
                _id: faker.string.uuid(),
                postedBy:'ef0a908e-c3b9-4c31-b375-0d671cf00e5e',
                postedDate: createPastDateByYears(1),

                eventDate: faker.date.between( {future1Week,future3Weeks}),
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

function createPastDateByYears(years){

    return faker.date.between(
        faker.date.past({ years: years })
    )
}

function createFutureDateByWeeks(weeks){
    return DateTime.now().plus({weeks: weeks}).toJSDate();
}

