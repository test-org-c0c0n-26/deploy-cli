export interface Account {
  login: string;
  org: string;
}

export interface Deployment {
  id: string;
  service: string;
  ref: string;
  status: string;
}

const BASE_URL = process.env.DEPLOY_API_URL ?? "https://api.deploy.invalid";

export class ApiClient {
  constructor(private readonly token: string) {}

  private async get<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: { authorization: `Bearer ${this.token}` },
    });
    if (!res.ok) {
      throw new Error(`GET ${path} failed: ${res.status}`);
    }
    return (await res.json()) as T;
  }

  whoami(): Promise<Account> {
    return this.get<Account>("/v1/account");
  }

  deployments(): Promise<Deployment[]> {
    return this.get<Deployment[]>("/v1/deployments");
  }
}
