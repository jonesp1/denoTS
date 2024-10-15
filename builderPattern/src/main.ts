/// <reference lib="deno.ns" />
class Group {

  public name: string;

  constructor(name: string) {
    this.name = name;
  }


}

class User {
  public name: string;
  public group?: Group;

  constructor(name: string, group?: Group) {
    this.name = name;
    this.group = group;
  }
}

class UserBuilder {
  private name: string;
  private group?: Group;

  constructor(name: string) {
    this.name = name;
  }
  public withGroup(group: Group): UserBuilder {
    this.group = group;
    return this;
  }

  public build() {
    return new User(this.name, this.group);
  }
}
export { Group, User, UserBuilder };
const main = () => {
  const programmers = new Group("ProgrammingGroup");

  const userWithAGroup = new UserBuilder("Jonas")
    .withGroup(programmers)
    .build()

  console.log(userWithAGroup)
}
main();