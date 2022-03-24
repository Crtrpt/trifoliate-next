import { Node } from "./node";

interface Page {
    name?: String;
    tree?: Node | Node[];
    pageAttr?: Map<String, String>;
}

interface RuntimePageInterface extends Page {
  idHash: Map<String, String>;
  nameHash: Map<String, Node[]>;
  fromJson(source: String): Page;
  toJson(): String;
}
class RuntimePage implements RuntimePageInterface {
  idHash: Map<String, String> = new Map();
  nameHash: Map<String, Node[]> = new Map();
  fromJson(source: String): Page {
    throw new Error("Method not implemented.");
  }
  toJson(): String {
    throw new Error("Method not implemented.");
  }
  name?: String | undefined;
  tree?: Node | Node[] | undefined;
  pageAttr?: Map<String, String> | undefined;
}

export { Page, RuntimePage };
