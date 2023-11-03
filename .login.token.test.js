// Importer login-funksjonen
import { login } from 'src/js/listeners/auth/login';

// Mock fetch-funksjonen for testing
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ accessToken: 'your-access-token' }),
  })
);

// Mock localStorage for testing
global.localStorage = {
  setItem: jest.fn(),
};

describe('login function', () => {
  it('fetches and stores a token in browser storage', async () => {
    const email = 'test@example.com';
    const password = 'password';

    // Kall login-funksjonen
    const profile = await login(email, password);

    // Sjekk at fetch ble kalt med riktig URL og data
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/social/auth/login'), {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Sjekk at token ble lagret i localStorage
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'your-access-token');

    // Sjekk at profile ble returnert som forventet
    expect(profile).toEqual({}); // Legg til forventet profildata her
  });
});

