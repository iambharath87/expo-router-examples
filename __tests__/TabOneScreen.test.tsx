import {
    renderRouter,
    screen,
} from 'expo-router/src/testing-library';
import TabOneScreen from '../app/(tabs)';
import TabTwoScreen from '../app/(tabs)/two';

describe('<HomeTab />', () => {
    it('renders tab 1', async () => {
        renderRouter('app', {initialUrl: '/'});

        expect(await screen.findByText('app/(tabs)/index.tsx')).toBeOnTheScreen();
        expect(screen).toHavePathname('/');
    });

    it('renders tab 1 alternate', async () => {
        renderRouter({
            index: TabOneScreen,
            '/two': TabTwoScreen,
        }, {initialUrl: '/'})

        expect(await screen.findByText('Tab One')).toBeOnTheScreen();
        expect(screen).toHavePathname('/');
    });
});
