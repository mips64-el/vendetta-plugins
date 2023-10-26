import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";
import { Forms, General } from "@vendetta/ui/components";

const { FormInput } = Forms;
const { ScrollView } = General;


export default () => {
  useProxy(storage);

  return <ScrollView>
    <FormInput onChange={v => {
      storage.lmfao = v;
    }}/>
  </ScrollView>
}
