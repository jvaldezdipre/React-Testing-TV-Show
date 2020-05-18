import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';

import App from './App';

jest.mock('./api/fetchShow');

const mockData = {
  id: '1',
  image: { medium: 'medium_image' },
  name: 'name',
  season: 3,
  number: 3,
  summary: '<p>Summary</p>',
  runtime: 20,
};

test('App fetches mock show data and renders it', async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);

  const { queryAllByText } = render(<App />);

  await waitFor(() => expect(queryAllByText(/name/i)).toHaveLength(1));
});
