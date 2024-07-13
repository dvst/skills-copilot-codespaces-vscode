function skillMember() {
    let member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'React', 'Node'],
        display: function () {
            console.log(`${this.name} is ${this.age} years old and knows ${this.skills}`);
        }
    };
    return member;
}