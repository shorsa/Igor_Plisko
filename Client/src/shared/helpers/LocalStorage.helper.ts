const TOKEN_KEY: string = "auth_data"

export function setAccessToken(authData: any): void {
   localStorage.setItem(TOKEN_KEY, JSON.stringify(authData));
}

export function getAccessToken(): string | undefined {
   const token: string | null = localStorage.getItem(TOKEN_KEY);
   if (token) {
      return JSON.parse(token);
   }
}

export function removeAuth(): void {
   localStorage.removeItem(TOKEN_KEY)
}