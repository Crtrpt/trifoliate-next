export class Command {
  param: any;
  redo: any;
  undo: any;
}
export class Commander {
  commandList: any[] = [];
  capacity = 100;
  cursor = 0;
  exec(parm: any, doAction: Function, undoAction?: Function) {
    if (this.cursor != this.commandList.length) {
      this.commandList = this.commandList.splice(0, this.cursor);
    }
    if (this.cursor >= this.capacity) {
      this.commandList.unshift();
    } else {
      this.cursor++;
    }
    this.commandList.push({
      redo: doAction,
      undo: undoAction,
      param: parm,
    });

    doAction(parm);
  }
  undo() {
    if (this.cursor == 0) {
      return;
    }
    this.cursor--;
    var cm = this.commandList[this.cursor];
    cm.undo(cm.param);
  }
  redo() {
    if (this.cursor >= this.commandList.length) {
      return;
    }
    var cm = this.commandList[this.cursor];
    cm.redo(cm.param);
    this.cursor++;
  }
}

