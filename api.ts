import { Game, PaginatedResponse } from "./mod.ts";

export class CurseForgeApi {
  apiKey: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey ? apiKey : "";
  }

  public setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async makeRequest(
    path: string,
    // deno-lint-ignore no-explicit-any
    body: any = null,
    method: string,
  ): Promise<Response> {
    if (this.apiKey == "") {
      throw new Error("No API key set");
    }

    return await fetch(
      `https://api.curseforge.com/v1/${path}`,
      {
        headers: {
          "x-api-key": this.apiKey,
        },
        method: method,
        body: body,
      },
    );
  }

  public async games(
    index?: number,
    pageSize?: number,
  ): Promise<PaginatedResponse<Game[]>> {
    let url = "games";

    if (index) {
      url += `?index=${index}`;
    }

    if (pageSize) {
      if (index) {
        url += `&pageSize=${pageSize}`;
      } else {
        url += `?pageSize=${pageSize}`;
      }
    }

    const response = await this.makeRequest("games", null, "GET");
    console.log(response);
    return await response.json();
  }
}
