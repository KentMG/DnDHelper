import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'DNDHelper_Character_Data';

exports.SaveLoad = function () {
    return {

        save: function (data) {
            AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        },
        load: async function () {
            try {
                let CharData = AsyncStorage.getItem(STORAGE_KEY);

                if (CharData === null) { return []; }

                return JSON.parse(CharData);
            } catch (error) {
                console.log('Error fetching Character Data', error);
            }
        }
    }
}