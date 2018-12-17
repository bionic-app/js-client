import { FlaggedItem } from './../../src';
import { convertKeysToSnakecase } from './../../test/dataHelpers';

describe('FlaggedItem', () => {
    let flaggedItem;

    const sourceId = '12345';
    const user = {
        id: '123',
        email: 'test@test.com',
        name: 'Joe Schmoe',
        avatar: 'https://test.test.com'
    };

    const content = {
        id: '345',
        contentType: 'text',
        content: 'test data',
        timestamp: new Date().toISOString()
    }

    const requestContent = convertKeysToSnakecase(content);

    const parent = {
        id: '456',
        contentType: 'text',
        content: 'test parent data',
        link: 'https://test.data.com',
        timestamp: new Date().toISOString()
    }

    const requestParent = convertKeysToSnakecase(parent);

    const context = {
        test: true,
        testTwo: 'abc',
        testThree: 123
    }

    beforeEach(() => {
        flaggedItem = new FlaggedItem(
            sourceId,
            content,
            user,
            parent,
            context
        );
    })

    it ('should construct the various properties', () => {

        expect(flaggedItem.sourceId).toEqual(sourceId);
        expect(flaggedItem.user).toEqual(user);
        expect(flaggedItem.content).toEqual(requestContent);
        expect(flaggedItem.parent).toEqual(requestParent);
        expect(flaggedItem.context).toEqual(context);
    });

    it ('should allow me to set the content', () => {
        const newContent = {
            id: '234',
            contentType: 'text',
            content: 'new stuff',
            timestamp: new Date().toISOString(),
        }
        flaggedItem.content = newContent;
        expect(flaggedItem.content).toEqual(convertKeysToSnakecase(newContent));
    });

    it ('should allow me to set the parent', () => {
        const newParent = {
            id: '234',
            contentType: 'text',
            content: 'new stuff',
            link: 'https://test.test.com',
            timestamp: new Date().toISOString(),
        }

        flaggedItem.parent = newParent;
        expect(flaggedItem.parent).toEqual(convertKeysToSnakecase(newParent));
    });

    it ('should allow me to set the user', () => {
        const new_user = {
            id: '234',
            email: 'test@test2.com',
            name: 'test man',
            avatar: 'https://new.new.com'
        };

        flaggedItem.user = new_user;
        expect(flaggedItem.user).toEqual(new_user);
    });

    it ('should allow me to set the sourceId', () => {
        flaggedItem.sourceId = 'abc123';
        expect(flaggedItem.sourceId).toEqual('abc123');
    })

})