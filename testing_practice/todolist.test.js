const Todo = require("./todo");
const TodoList = require("./todolist");

describe("TodoList", () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo("Buy milk");
    todo2 = new Todo("Clean room");
    todo3 = new Todo("Go to the gym");

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });

  test("calling toArray returns an array of todos", () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test("calling first returns todo1", () => {
    expect(list.first()).toEqual(todo1);
  });

  test("calling last returns todo3", () => {
    expect(list.last()).toEqual(todo3);
  });

  test("calling shift removes and returns todo1", () => {
    let todo = list.shift();
    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test("calling pop removes and returns todo3", () => {
    let todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test("isDone() returns true only if all list items are done", () => {
    expect(list.isDone()).toBe(false);
    list.markAllDone();
    expect(list.isDone()).toBe(true);
  });

  test("add() returns a TypeError if you attempt to add a non-Todo", () => {
    expect(() => list.add({})).toThrow(TypeError);
    expect(() => list.add(new TodoList())).toThrow(TypeError);
    expect(() => list.add(1)).toThrow(TypeError);
  });

  test("itemAt() returns the item at the given index", () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  });

  test("markDoneAt() marks the item at the given index as done", () => {
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
    list.markDoneAt(0);
    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(false);
  });

  test("markUndoneAt() marks the item at the given index as undone", () => {
    list.markAllDone();
    list.markUndoneAt(1);

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(true);
    expect(() => list.markUndoneAt(3)).toThrow(ReferenceError);
  });
});
