import { renderHook } from '@testing-library/react-hooks';
import { use<%= ComponentName %> } from '../hooks'

describe('Hook `use<%= ComponentName %>`', () => {
    test('correct default behavior', async () => {
        const { result } = renderHook(() => use<%= ComponentName %>());

        expect(result.current);
    });

});
