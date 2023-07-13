import { computed } from "vue";

export function useVModel(props: Record<string, unknown>, propName: string, emit: Function) {
  return computed({
    get() {
      return new Proxy(props[propName] as Record<string, unknown>, {
        set(obj: Record<string, unknown>, name, val) {
          console.log("emit", obj, name, val);
          emit("update:" + propName, {
            ...obj,
            [name]: val
          });
          return true;
        }
      });
    },
    set(value) {
      emit("update:" + propName, value);
    }
  });
}
