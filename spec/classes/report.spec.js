import { Report } from './../../src';

describe('Reports', () => {
    let report;
    const user = {
        id: '123',
        email: 'test@test.com',
        name: 'Joe Schmoe',
        avatar: 'https://test.test.com'
    };

    const userMatch = {
        customer_user_id: '123',
        email: 'test@test.com',
        name: 'Joe Schmoe',
        avatar: 'https://test.test.com'
    }

    const comments = 'This is awful stuff';

    const tags = [
        'inappropriate',
        'nudity'
    ];

    const context = {
        test: true,
        testTwo: 'abc',
        testThree: 123
    }

    beforeEach(() => {
        report = new Report(
            user,
            comments,
            tags,
            context
        );
    })

    it ('should construct the various properties', () => {

        expect(report.user).toEqual(userMatch);
        expect(report.comments).toEqual(comments);
        expect(report.tags).toEqual(tags);
        expect(report.context).toEqual(context);
    });

    it ('should all me to set all tags at once', () => {
        const new_tags = ['new', 'tags'];
        report.tags = new_tags;
        expect(report.tags).toEqual(new_tags);
    });

    it ('should allow me to add to tags', () => {
        report.addToTags('added');
        expect(report.tags).toEqual([...tags, 'added']);
    });

    it ('should allow me to remove from tags', () => {
        report.removeFromTags('nudity');
        expect(report.tags).toEqual(['inappropriate']);
    });

    it ('should allow me to set the comments', () => {
        report.comments = 'updated comments';
        expect(report.comments).toEqual('updated comments');
    });

    it ('should allow me to set the user', () => {
        const new_user = {
            id: '234',
            email: 'test@test2.com',
            name: 'test man',
            avatar: 'https://new.new.com'
        };

        const match = {
            customer_user_id: '234',
            email: 'test@test2.com',
            name: 'test man',
            avatar: 'https://new.new.com'
        }

        report.user = new_user;
        expect(report._user).toEqual(match);
    })

})