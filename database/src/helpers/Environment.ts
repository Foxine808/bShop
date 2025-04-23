export default class EnvironmentVariable {
  private variable: string;

  constructor(name: string) {
    const variable = Deno.env.get(name)!;

    if (!variable) {
      const error = new Error(`Cant retrive ${name} environment variable!`);
      throw error;
    }
    
    this.variable = variable;
  }

  public get(): string { return this.variable; }
}
