// type definition

declare namespace CssobjPluginDefaultUnit {
    interface PluginObject {
      value (value: string, key: string, node: Object, result: Object): string;
    }

    interface Static {
      (defaultUnit?: string): PluginObject;
    }
}

declare module 'cssobjPluginDefaultUnit' {
    const cssobjPluginDefaultUnit: CssobjPluginDefaultUnit.Static
    export = cssobjPluginDefaultUnit
}
