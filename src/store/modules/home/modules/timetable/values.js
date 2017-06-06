export class Lesson {
  constructor ({teacher = '', title = '', room = '', type = ''} = {}) {
    this.teacher = teacher
    this.title = title
    this.room = room
    this.type = type
  }
}
